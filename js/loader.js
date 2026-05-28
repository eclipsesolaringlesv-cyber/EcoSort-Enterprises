/* PAGE LOAD */

window.addEventListener("load",()=>{

  setTimeout(()=>{

    document.body.classList.add(
      "loaded"
    );

  },700);

});


/* FADE ELEMENTS */

const fadeElements =
document.querySelectorAll(

  ".fade-page"

);

fadeElements.forEach((element,index)=>{

  element.style.transitionDelay =
  `${index * 0.08}s`;

});


/* LOADER TEXT */

const loaderText =
document.querySelector(".loader-text");

const messages = [

  "Inicializando sistema...",
  "Conectando sensores...",
  "Verificando telemetría...",
  "Cargando dashboard...",
  "Sistema EcoSort listo."

];

let currentMessage = 0;

const loaderInterval =
setInterval(()=>{

  if(loaderText){

    loaderText.innerText =
    messages[currentMessage];

    currentMessage++;

    if(
      currentMessage >=
      messages.length
    ){

      clearInterval(
        loaderInterval
      );

    }

  }

},140);


/* PAGE TRANSITION */

document
.querySelectorAll("a")
.forEach(link=>{

  link.addEventListener(

    "click",

    (e)=>{

      const href =
      link.getAttribute("href");

      if(
        href &&
        !href.startsWith("#")
      ){

        document.body.classList.remove(
          "loaded"
        );

      }

    }

  );

});


/* BUTTON MICRO INTERACTION */

const buttons =
document.querySelectorAll(

  "button"

);

buttons.forEach(button=>{

  button.addEventListener(

    "mousedown",

    ()=>{

      button.style.transform =
      "scale(0.97)";

    }

  );

  button.addEventListener(

    "mouseup",

    ()=>{

      button.style.transform =
      "";

    }

  );

});


/* PERFORMANCE */

window.requestIdleCallback?.(()=>{

  console.log(
    "EcoSort Enterprise Ready"
  );

});