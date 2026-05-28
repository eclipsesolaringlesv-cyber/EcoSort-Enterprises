/* SCROLL REVEAL */

const revealElements =
document.querySelectorAll(

  ".fade-up,\
   .fade-left,\
   .fade-right,\
   .scale-in"

);


const revealOnScroll = ()=>{

  const triggerBottom =
  window.innerHeight * 0.88;

  revealElements.forEach(element=>{

    const boxTop =
    element.getBoundingClientRect().top;

    if(boxTop < triggerBottom){

      element.classList.add("active");

    }

  });

};


window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


/* PARALLAX HERO */

const hero =
document.querySelector(".hero");

window.addEventListener("scroll",()=>{

  const scrollY =
  window.scrollY;

  if(hero){

    hero.style.backgroundPositionY =
    scrollY * 0.15 + "px";
  }

});


/* SHOWCASE DRAG */

const showcase =
document.querySelector(".showcase-scroll");

if(showcase){

  let isDown = false;

  let startX;

  let scrollLeft;

  showcase.addEventListener(
    "mousedown",
    (e)=>{

      isDown = true;

      showcase.classList.add("dragging");

      startX =
      e.pageX -
      showcase.offsetLeft;

      scrollLeft =
      showcase.scrollLeft;

    }
  );

  showcase.addEventListener(
    "mouseleave",
    ()=>{

      isDown = false;

      showcase.classList.remove("dragging");

    }
  );

  showcase.addEventListener(
    "mouseup",
    ()=>{

      isDown = false;

      showcase.classList.remove("dragging");

    }
  );

  showcase.addEventListener(
    "mousemove",
    (e)=>{

      if(!isDown) return;

      e.preventDefault();

      const x =
      e.pageX -
      showcase.offsetLeft;

      const walk =
      (x - startX) * 1.2;

      showcase.scrollLeft =
      scrollLeft - walk;

    }
  );

}


/* AUTO HIDE NAVBAR */

let lastScroll = 0;

window.addEventListener("scroll",()=>{

  const currentScroll =
  window.pageYOffset;

  if(currentScroll <= 0){

    navbar.style.transform =
    "translateY(0)";

    return;
  }

  if(
    currentScroll > lastScroll &&
    currentScroll > 120
  ){

    navbar.style.transform =
    "translateY(-100%)";

  }else{

    navbar.style.transform =
    "translateY(0)";
  }

  lastScroll = currentScroll;

});


/* SCROLL PROGRESS */

const progressBar =
document.querySelector(".scroll-progress");

window.addEventListener("scroll",()=>{

  if(progressBar){

    const totalHeight =

      document.body.scrollHeight -
      window.innerHeight;

    const progress =

      (window.pageYOffset /
      totalHeight) * 100;

    progressBar.style.width =
    progress + "%";
  }

});


/* BUTTON FLOAT */

const floatButtons =
document.querySelectorAll(
  ".primary-btn,.nav-btn"
);

floatButtons.forEach(button=>{

  button.addEventListener(
    "mousemove",
    (e)=>{

      const rect =
      button.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      button.style.transform =
      `translateY(-3px)
       rotateX(${-(y-20)/18}deg)
       rotateY(${(x-60)/18}deg)`;

    }
  );

  button.addEventListener(
    "mouseleave",
    ()=>{

      button.style.transform =
      "translateY(0)";
    }
  );

});