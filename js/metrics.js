/* =========================================================
   ANIMACIÓN INTERACTIVA DE MÉTRICAS (EcoSort Impact)
========================================================= */

const counters = document.querySelectorAll('.impact-card h2');

// Función encargada de animar individualmente cada contador
const animateCounter = (counter) => {
  // Extraemos el valor numérico objetivo del texto del HTML (ej: "95%" -> 95)
  const targetText = counter.innerText.trim();
  const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ''), 10);
  
  // Guardamos el sufijo (como '%', ' kg' o ' unidades') para reinsertarlo al final
  const suffix = targetText.replace(/[0-9]/g, '');

  let currentNumber = 0;
  const duration = 2000; // Duración total de la animación en milisegundos (2 segundos)
  const frameRate = 1000 / 60; // 60 cuadros por segundo para máxima fluidez
  const totalSteps = Math.round(duration / frameRate);
  const increment = targetNumber / totalSteps;

  const updateNumber = () => {
    currentNumber += increment;
    
    if (currentNumber >= targetNumber) {
      counter.innerText = `${targetNumber}${suffix}`; // Asegura el valor exacto al final
    } else {
      counter.innerText = `${Math.floor(currentNumber)}${suffix}`;
      requestAnimationFrame(updateNumber);
    }
  };

  updateNumber();
};

// Observer para activar la animación justo cuando el usuario hace scroll y ve las tarjetas
const metricsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counterElement = entry.target;
      animateCounter(counterElement);
      // Dejamos de observar el elemento para que la animación solo ocurra una vez
      observer.unobserve(counterElement);
    }
  });
}, {
  threshold: 0.25 // Se activa cuando el 25% de la tarjeta es visible
});

// Vinculamos todos los contadores detectados al Observer
counters.forEach(counter => {
  metricsObserver.observe(counter);
});