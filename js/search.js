/* =========================
   SEARCH DATA
========================= */

const searchSections = [

  {
    keywords:[
      "inicio",
      "hero",
      "ecosort"
    ],

    target:"#hero",

    label:"Inicio"
  },

  {
    keywords:[
      "scada",
      "dashboard",
      "simulador",
      "sensores"
    ],

    target:"#scada",

    label:"SCADA Industrial"
  },

  {
    keywords:[
      "tecnologia",
      "industrial",
      "automatizacion"
    ],

    target:"#technology",

    label:"Tecnología"
  },

  {
    keywords:[
      "impacto",
      "medio ambiente",
      "co2"
    ],

    target:"#impact",

    label:"Impacto"
  },

  {
    keywords:[
      "galeria",
      "noticias",
      "showcase"
    ],

    target:"#news",

    label:"Noticias"
  },

  {
    keywords:[
      "contacto",
      "whatsapp",
      "instagram",
      "correo"
    ],

    target:"#contact",

    label:"Contacto"
  }

];


/* =========================
   ELEMENTS
========================= */

const searchInput =
document.getElementById(
  "searchInput"
);

const searchResults =
document.getElementById(
  "searchResults"
);


/* =========================
   CREATE RESULTS
========================= */

function renderResults(results){

  if(!searchResults){

    return;
  }

  if(results.length === 0){

    searchResults.innerHTML =

    `
    <div class="search-empty">
      No se encontraron resultados
    </div>
    `;

    searchResults.classList.add(
      "active"
    );

    return;
  }

  searchResults.innerHTML =

  results.map(result=>`

    <div
      class="search-item"
      data-target="${result.target}"
    >

      <span>
        ${result.label}
      </span>

      <i class="fa-solid fa-arrow-right"></i>

    </div>

  `).join("");

  searchResults.classList.add(
    "active"
  );

  activateSearchItems();

}


/* =========================
   SEARCH LOGIC
========================= */

searchInput?.addEventListener(

  "input",

  ()=>{

    const value =
    searchInput.value
    .trim()
    .toLowerCase();

    if(value.length <= 0){

      searchResults.classList.remove(
        "active"
      );

      return;
    }

    const matches =
    searchSections.filter(section=>{

      return section.keywords.some(

        keyword=>

        keyword.includes(value)

      );

    });

    renderResults(matches);

  }

);


/* =========================
   ITEM CLICK
========================= */

function activateSearchItems(){

  document
  .querySelectorAll(".search-item")
  .forEach(item=>{

    item.addEventListener(

      "click",

      ()=>{

        const target =
        item.dataset.target;

        document
        .querySelector(target)
        .scrollIntoView({

          behavior:"smooth"

        });

        searchResults.classList.remove(
          "active"
        );

        searchInput.value = "";

      }

    );

  });

}


/* =========================
   CLOSE RESULTS
========================= */

document.addEventListener(

  "click",

  (e)=>{

    if(

      !searchResults?.contains(e.target)
      &&
      !searchInput?.contains(e.target)

    ){

      searchResults?.classList.remove(
        "active"
      );

    }

  }

);


/* =========================
   ENTER NAVIGATION
========================= */

searchInput?.addEventListener(

  "keydown",

  (e)=>{

    if(e.key !== "Enter"){

      return;
    }

    const first =
    document.querySelector(
      ".search-item"
    );

    if(first){

      first.click();
    }

  }

);


/* =========================
   SEARCH ANIMATION
========================= */

searchInput?.addEventListener(

  "focus",

  ()=>{

    searchInput.parentElement
    .classList.add("focused");

  }

);

searchInput?.addEventListener(

  "blur",

  ()=>{

    setTimeout(()=>{

      searchInput.parentElement
      .classList.remove("focused");

    },200);

  }

);


/* =========================
   HIGHLIGHT SECTION
========================= */

function highlightSection(target){

  const section =
  document.querySelector(target);

  if(!section){

    return;
  }

  section.classList.add(
    "search-highlight"
  );

  setTimeout(()=>{

    section.classList.remove(
      "search-highlight"
    );

  },2000);

}


/* =========================
   MOBILE SEARCH
========================= */

if(window.innerWidth < 768){

  searchInput?.setAttribute(

    "placeholder",

    "Buscar..."

  );

}


/* =========================
   AUTO SUGGESTIONS
========================= */

const suggestions = [

  "SCADA",
  "Impacto",
  "Sensores",
  "Noticias",
  "Contacto"

];

let suggestionIndex = 0;

setInterval(()=>{

  if(

    document.activeElement ===
    searchInput

  ){

    return;
  }

  searchInput?.setAttribute(

    "placeholder",

    `Buscar ${suggestions[suggestionIndex]}...`

  );

  suggestionIndex++;

  if(
    suggestionIndex >=
    suggestions.length
  ){

    suggestionIndex = 0;
  }

},3000);