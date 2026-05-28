/* =========================================================
   NEWS DATA
========================================================= */
const newsData = [
  {
    title: "EcoSort mejora la clasificación industrial.",
    description: "La nueva versión del sistema incrementa la precisión de separación automática mediante la optimización de sus algoritmos.",
    image: "assets/images/news-1.jpg" // Cambia si tus rutas son distintas
  },
  {
    title: "Sensores inteligentes en tiempo real.",
    description: "SCADA industrial optimizado para el monitoreo continuo de variables físicas y flujos de residuos.",
    image: "assets/images/news-2.jpg"
  },
  {
    title: "Automatización sustentable para empresas.",
    description: "EcoSort reduce el volumen de residuos desviados incorrectamente y mejora los procesos industriales verdes.",
    image: "assets/images/news-3.jpg"
  },
  {
    title: "Tecnología ambiental de nueva generación.",
    description: "Procesamiento automatizado con analítica avanzada para mitigar la huella de carbono industrial.",
    image: "assets/images/news-4.jpg"
  }
];

/* =========================================================
   REMAINING LOGIC & FIX
========================================================= */
let currentNews = 0;
let newsInterval;

function renderNews() {
  const newsContainer = document.getElementById("newsContainer");
  if (!newsContainer) return;

  // Limpiamos el contenedor por completo antes de renderizar
  newsContainer.innerHTML = "";

  newsData.forEach((item, index) => {
    const slide = document.createElement("div");
    
    // Si es la noticia actual, lleva la clase 'active', si no, se oculta
    const isActive = index === currentNews;
    slide.className = `news-slide ${isActive ? "active" : ""}`;
    
    // CONTROL CRÍTICO: Forzamos estilos en línea para que no dependa de clases CSS externas que puedan fallar
    slide.style.display = isActive ? "flex" : "none";
    slide.style.opacity = isActive ? "1" : "0";
    slide.style.transition = "opacity 0.4s ease-in-out, transform 0.4s ease";
    slide.style.gap = "40px";
    slide.style.alignItems = "center";
    slide.style.width = "100%;";

    // Estructura interna de la tarjeta de noticias
    slide.innerHTML = `
      <div class="news-image" style="flex: 1; max-width: 40%; height: 240px; border-radius: 20px; overflow: hidden; background: #f1f5f9;">
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';">
      </div>
      <div class="news-content" style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
        <span style="align-self: flex-start; background: rgba(34,197,94,0.1); color: #16a34a; padding: 6px 14px; border-radius: 999px; font-size: 0.75rem; font-weight: 700; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Actualización 0${index + 1}</span>
        <h3 style="font-size: 1.5rem; color: #0f172a; margin-bottom: 12px; font-weight: 700; line-height: 1.3;">${item.title}</h3>
        <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0;">${item.description}</p>
      </div>
    `;
    
    newsContainer.appendChild(slide);
  });

  renderDots();
}

function renderDots() {
  const newsDotsContainer = document.getElementById("newsDots");
  if (!newsDotsContainer) return;
  newsDotsContainer.innerHTML = "";

  newsData.forEach((_, index) => {
    const dot = document.createElement("button");
    const isActive = index === currentNews;
    dot.className = `news-dot ${isActive ? "active" : ""}`;
    
    // Estilos visuales de respaldo para los botones de paginación
    dot.style.width = isActive ? "24px" : "10px";
    dot.style.height = "10px";
    dot.style.borderRadius = "999px";
    dot.style.border = "none";
    dot.style.cursor = "pointer";
    dot.style.backgroundColor = isActive ? "#16a34a" : "#cbd5e1";
    dot.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";

    dot.addEventListener("click", () => {
      currentNews = index;
      renderNews();
      resetSliderInterval();
    });
    newsDotsContainer.appendChild(dot);
  });
}

function nextNews() {
  currentNews = (currentNews + 1) % newsData.length;
  renderNews();
}

function startSlider() {
  newsInterval = setInterval(nextNews, 5000);
}

function resetSliderInterval() {
  clearInterval(newsInterval);
  startSlider();
}

// Inicialización limpia esperando a que el árbol HTML esté construido
document.addEventListener("DOMContentLoaded", () => {
  renderNews();
  startSlider();

  const newsContainer = document.getElementById("newsContainer");
  if (newsContainer) {
    newsContainer.addEventListener("mouseenter", () => clearInterval(newsInterval));
    newsContainer.addEventListener("mouseleave", startSlider);
  }
});

// Ejecución inmediata de respaldo por si el script carga de manera asíncrona diferida
if (document.readyState === "complete" || document.readyState === "interactive") {
  renderNews();
}