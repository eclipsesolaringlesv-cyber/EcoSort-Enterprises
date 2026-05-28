/* SHOWCASE AUTO SCROLL */

const gallery =
document.querySelector(".showcase-scroll");

let autoScroll;


/* START AUTO */

function startAutoScroll(){

  autoScroll = setInterval(()=>{

    if(gallery){

      gallery.scrollLeft += 1.2;

      if(

        gallery.scrollLeft +

        gallery.clientWidth >=

        gallery.scrollWidth - 2

      ){

        gallery.scrollLeft = 0;
      }

    }

  },18);

}


/* STOP AUTO */

function stopAutoScroll(){

  clearInterval(autoScroll);

}


/* HOVER EVENTS */

if(gallery){

  gallery.addEventListener(

    "mouseenter",

    stopAutoScroll

  );

  gallery.addEventListener(

    "mouseleave",

    startAutoScroll

  );

}


/* MOBILE TOUCH */

if(gallery){

  let touchStartX = 0;

  let touchScrollLeft = 0;

  gallery.addEventListener(

    "touchstart",

    (e)=>{

      touchStartX =
      e.touches[0].pageX;

      touchScrollLeft =
      gallery.scrollLeft;

    }

  );

  gallery.addEventListener(

    "touchmove",

    (e)=>{

      const moveX =
      e.touches[0].pageX;

      const distance =
      touchStartX - moveX;

      gallery.scrollLeft =
      touchScrollLeft + distance;

    }

  );

}


/* PARALLAX IMAGE */

const showcaseCards =
document.querySelectorAll(".showcase-card");

showcaseCards.forEach(card=>{

  card.addEventListener(

    "mousemove",

    (e)=>{

      const rect =
      card.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      const centerX =
      rect.width / 2;

      const centerY =
      rect.height / 2;

      const rotateX =
      ((y - centerY) / 30);

      const rotateY =
      ((centerX - x) / 30);

      card.style.transform =

      `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
      `;

    }

  );

  card.addEventListener(

    "mouseleave",

    ()=>{

      card.style.transform =

      `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      `;

    }

  );

});


/* IMAGE REVEAL */

const galleryObserver =
new IntersectionObserver(

  (entries)=>{

    entries.forEach(entry=>{

      if(entry.isIntersecting){

        entry.target.classList.add(
          "active"
        );

      }

    });

  },

  {
    threshold:0.2
  }

);


showcaseCards.forEach(card=>{

  galleryObserver.observe(card);

});


/* START */

startAutoScroll();