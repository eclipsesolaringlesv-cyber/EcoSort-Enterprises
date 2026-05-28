/* =========================
   NAVBAR ACTIVE
========================= */

const navItems =
document.querySelectorAll(

  ".nav-links a"

);

window.addEventListener(

  "scroll",

  ()=>{

    let current = "";

    document
    .querySelectorAll("section")
    .forEach(section=>{

      const top =
      section.offsetTop - 180;

      const height =
      section.offsetHeight;

      if(

        window.scrollY >= top &&
        window.scrollY < top + height

      ){

        current =
        section.getAttribute("id");

      }

    });

    navItems.forEach(link=>{

      link.classList.remove(
        "active"
      );

      if(

        link.getAttribute("href")
        ===
        `#${current}`

      ){

        link.classList.add(
          "active"
        );

      }

    });

  }

);


/* =========================
   SEARCH SYSTEM
========================= */

const search =
document.getElementById(
  "searchInput"
);

const searchMap = {

  scada:"#scada",

  dashboard:"#scada",

  impacto:"#impact",

  contacto:"#contact",

  noticias:"#news",

  tecnologia:"#technology",

  sensores:"#technology",

  ecosort:"#hero"

};


search?.addEventListener(

  "keydown",

  (e)=>{

    if(e.key !== "Enter"){

      return;
    }

    const value =
    search.value
    .trim()
    .toLowerCase();

    const target =
    searchMap[value];

    if(target){

      document
      .querySelector(target)
      .scrollIntoView({

        behavior:"smooth"

      });

      search.value = "";

    }else{

      search.style.border =
      "1px solid #ef4444";

      search.placeholder =
      "No encontrado...";

      setTimeout(()=>{

        search.style.border =
        "";

        search.placeholder =
        "Buscar sección...";

      },2000);

    }

  }

);


/* =========================
   BUTTON HOVER SOUND FX
========================= */

const buttons =
document.querySelectorAll(

  "button"

);

buttons.forEach(button=>{

  button.addEventListener(

    "mouseenter",

    ()=>{

      button.style.transform =
      "translateY(-3px)";

    }

  );

  button.addEventListener(

    "mouseleave",

    ()=>{

      button.style.transform =
      "";

    }

  );

});


/* =========================
   STATUS TIME
========================= */

const statusClock =
document.getElementById(
  "statusClock"
);

function updateClock(){

  if(!statusClock){

    return;
  }

  const now =
  new Date();

  const time =
  now.toLocaleTimeString(
    "es-MX",
    {

      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit"

    }

  );

  statusClock.innerText =
  time;

}

setInterval(
  updateClock,
  1000
);

updateClock();


/* =========================
   IMAGE LOADING
========================= */

const images =
document.querySelectorAll("img");

images.forEach(img=>{

  img.addEventListener(

    "load",

    ()=>{

      img.classList.add(
        "loaded"
      );

    }

  );

});


/* =========================
   HERO TYPE EFFECT
========================= */

const heroText =
document.getElementById(
  "heroTyping"
);

if(heroText){

  const words = [

    "Clasificación Inteligente",
    "Automatización Sustentable",
    "SCADA Industrial",
    "Tecnología Ambiental"

  ];

  let wordIndex = 0;

  let charIndex = 0;

  let deleting = false;

  function typeEffect(){

    const current =
    words[wordIndex];

    if(!deleting){

      heroText.innerText =

      current.substring(
        0,
        charIndex++
      );

      if(charIndex > current.length){

        deleting = true;

        setTimeout(
          typeEffect,
          1400
        );

        return;
      }

    }else{

      heroText.innerText =

      current.substring(
        0,
        charIndex--
      );

      if(charIndex < 0){

        deleting = false;

        wordIndex++;

        if(
          wordIndex >= words.length
        ){

          wordIndex = 0;
        }

      }

    }

    setTimeout(
      typeEffect,
      deleting ? 45 : 80
    );

  }

  typeEffect();

}


/* =========================
   CONTACT BUTTONS
========================= */

const links = [

  {

    id:"whatsappBtn",

    url:"https://wa.me/5210000000000"

  },

  {

    id:"instagramBtn",

    url:"https://instagram.com"

  },

  {

    id:"emailBtn",

    url:"mailto:contacto@ecosort.com"

  }

];

links.forEach(item=>{

  const button =
  document.getElementById(
    item.id
  );

  if(button){

    button.addEventListener(

      "click",

      ()=>{

        window.open(
          item.url,
          "_blank"
        );

      }

    );

  }

});


/* =========================
   SCROLL TOP
========================= */

const scrollTopBtn =
document.getElementById(
  "scrollTop"
);

window.addEventListener(

  "scroll",

  ()=>{

    if(!scrollTopBtn){

      return;
    }

    if(window.scrollY > 500){

      scrollTopBtn.classList.add(
        "show"
      );

    }else{

      scrollTopBtn.classList.remove(
        "show"
      );

    }

  }

);


scrollTopBtn?.addEventListener(

  "click",

  ()=>{

    window.scrollTo({

      top:0,

      behavior:"smooth"

    });

  }

);


/* =========================
   SHOWCASE DRAG SCROLL
========================= */

const showcase =
document.querySelector(
  ".showcase-scroll"
);

if(showcase){

  let isDown = false;

  let startX;

  let scrollLeft;

  showcase.addEventListener(

    "mousedown",

    (e)=>{

      isDown = true;

      startX =
      e.pageX - showcase.offsetLeft;

      scrollLeft =
      showcase.scrollLeft;

    }

  );

  showcase.addEventListener(

    "mouseleave",

    ()=>{

      isDown = false;

    }

  );

  showcase.addEventListener(

    "mouseup",

    ()=>{

      isDown = false;

    }

  );

  showcase.addEventListener(

    "mousemove",

    (e)=>{

      if(!isDown){

        return;
      }

      e.preventDefault();

      const x =
      e.pageX - showcase.offsetLeft;

      const walk =
      (x - startX) * 1.5;

      showcase.scrollLeft =
      scrollLeft - walk;

    }

  );

}