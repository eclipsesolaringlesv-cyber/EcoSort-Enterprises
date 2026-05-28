/* =========================
   MOBILE MENU
========================= */

const menuBtn =
document.querySelector(".menu-btn");

const mobileMenu =
document.querySelector(".mobile-menu");

menuBtn.addEventListener(

  "click",

  ()=>{

    mobileMenu.classList.toggle(
      "active"
    );

  }

);


/* CLOSE MENU */

document
.querySelectorAll(".mobile-menu a")
.forEach(link=>{

  link.addEventListener(

    "click",

    ()=>{

      mobileMenu.classList.remove(
        "active"
      );

    }

  );

});


/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll("[data-scroll]")
.forEach(button=>{

  button.addEventListener(

    "click",

    ()=>{

      const target =
      document.querySelector(

        button.dataset.scroll
      );

      if(target){

        target.scrollIntoView({

          behavior:"smooth"

        });

      }

    }

  );

});


/* =========================
   NAVBAR SCROLL
========================= */

const navbar =
document.querySelector(".navbar");

window.addEventListener(

  "scroll",

  ()=>{

    if(window.scrollY > 40){

      navbar.classList.add(
        "scrolled"
      );

    }else{

      navbar.classList.remove(
        "scrolled"
      );

    }

  }

);


/* =========================
   SCROLL PROGRESS
========================= */

const progress =
document.querySelector(
  ".scroll-progress"
);

window.addEventListener(

  "scroll",

  ()=>{

    const totalHeight =

      document.body.scrollHeight -
      window.innerHeight;

    const progressHeight =

      (window.scrollY / totalHeight)
      * 100;

    progress.style.width =
    progressHeight + "%";

  }

);


/* =========================
   REVEAL ANIMATION
========================= */

const reveals =
document.querySelectorAll(

  ".fade-up, .fade-left, .fade-right"

);

const revealOnScroll = ()=>{

  const trigger =
  window.innerHeight * 0.88;

  reveals.forEach(item=>{

    const top =
    item.getBoundingClientRect().top;

    if(top < trigger){

      item.classList.add(
        "visible"
      );

    }

  });

};

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


/* =========================
   RIPPLE EFFECT
========================= */

document
.querySelectorAll(".ripple")
.forEach(button=>{

  button.addEventListener(

    "click",

    function(e){

      const ripple =
      document.createElement("span");

      const rect =
      this.getBoundingClientRect();

      const size =
      Math.max(
        rect.width,
        rect.height
      );

      ripple.style.width =
      ripple.style.height =
      size + "px";

      ripple.style.left =

        e.clientX -
        rect.left -
        size / 2 + "px";

      ripple.style.top =

        e.clientY -
        rect.top -
        size / 2 + "px";

      this.appendChild(ripple);

      setTimeout(()=>{

        ripple.remove();

      },700);

    }

  );

});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener(

  "scroll",

  ()=>{

    let current = "";

    sections.forEach(section=>{

      const top =
      section.offsetTop - 200;

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

    navLinks.forEach(link=>{

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
   SEARCH
========================= */

const searchInput =
document.getElementById(
  "searchInput"
);

searchInput?.addEventListener(

  "keyup",

  (e)=>{

    if(e.key === "Enter"){

      const value =
      searchInput.value
      .toLowerCase();

      if(value.includes("scada")){

        document
        .querySelector("#scada")
        .scrollIntoView({

          behavior:"smooth"

        });

      }

      if(value.includes("impact")){

        document
        .querySelector("#impact")
        .scrollIntoView({

          behavior:"smooth"

        });

      }

      if(value.includes("contact")){

        document
        .querySelector("#contact")
        .scrollIntoView({

          behavior:"smooth"

        });

      }

    }

  }

);


/* =========================
   CONTACT BUTTONS
========================= */

document
.getElementById("whatsappBtn")
?.addEventListener(

  "click",

  ()=>{

    window.open(

      "https://wa.me/527205756626",

      "_blank"

    );

  }

);


document
.getElementById("instagramBtn")
?.addEventListener(

  "click",

  ()=>{

    window.open(

      "https://instagram.com/ecosort._.12",

      "_blank"

    );

  }

);


document
.getElementById("emailBtn")
?.addEventListener(

  "click",

  ()=>{

    window.location.href =
    "mailto:ecosortentuvida@gmail.com";

  }

);


/* =========================
   CLOSE MENU OUTSIDE
========================= */

document.addEventListener(

  "click",

  (e)=>{

    if(

      !mobileMenu.contains(e.target)
      &&
      !menuBtn.contains(e.target)

    ){

      mobileMenu.classList.remove(
        "active"
      );

    }

  }

);


/* =========================
   HERO PARALLAX
========================= */

const scada =
document.querySelector(
  ".scada-container"
);

window.addEventListener(

  "mousemove",

  (e)=>{

    const x =
    (window.innerWidth / 2 - e.clientX)
    / 40;

    const y =
    (window.innerHeight / 2 - e.clientY)
    / 40;

    scada.style.transform =

      `rotateY(${x}deg)
       rotateX(${-y}deg)`;

  }

);


/* =========================
   RESET PARALLAX
========================= */

window.addEventListener(

  "mouseleave",

  ()=>{

    scada.style.transform =
    "rotateY(0deg) rotateX(0deg)";

  }

  
);
