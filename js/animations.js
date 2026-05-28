/* =========================
   REVEAL ELEMENTS
========================= */

const revealElements =
document.querySelectorAll(

  ".reveal"

);

const revealObserver =
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
  threshold:0.15
}

);


revealElements.forEach(el=>{

  revealObserver.observe(el);

});


/* =========================
   PARALLAX ORBS
========================= */

const orbs =
document.querySelectorAll(
  ".blur-orb"
);

window.addEventListener(

  "mousemove",

  (e)=>{

    const x =
    e.clientX / window.innerWidth;

    const y =
    e.clientY / window.innerHeight;

    orbs.forEach((orb,index)=>{

      const speed =
      (index + 1) * 18;

      orb.style.transform =

      `translate(
        ${x * speed}px,
        ${y * speed}px
      )`;

    });

  }

);


/* =========================
   SHOWCASE HOVER
========================= */

const showcaseCards =
document.querySelectorAll(

  ".showcase-card"

);

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

      const rotateY =

      ((x / rect.width) - 0.5)
      * 10;

      const rotateX =

      ((y / rect.height) - 0.5)
      * -10;

      card.style.transform =

      `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
      `;

    }

  );

  card.addEventListener(

    "mouseleave",

    ()=>{

      card.style.transform =

      "rotateX(0) rotateY(0)";

    }

  );

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(
  "[data-counter]"
);

const counterObserver =
new IntersectionObserver(

(entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      animateCounter(
        entry.target
      );

      counterObserver.unobserve(
        entry.target
      );

    }

  });

},

{
  threshold:0.5
}

);


counters.forEach(counter=>{

  counterObserver.observe(counter);

});


function animateCounter(el){

  const target =
  +el.dataset.counter;

  let current = 0;

  const increment =
  target / 80;

  const update = ()=>{

    current += increment;

    if(current < target){

      el.innerText =
      Math.floor(current);

      requestAnimationFrame(update);

    }else{

      el.innerText =
      target;

    }

  };

  update();

}


/* =========================
   SCROLL PARALLAX
========================= */

const parallax =
document.querySelectorAll(
  "[data-parallax]"
);

window.addEventListener(

  "scroll",

  ()=>{

    const scroll =
    window.scrollY;

    parallax.forEach(item=>{

      const speed =
      item.dataset.parallax;

      item.style.transform =

      `translateY(
        ${scroll * speed}px
      )`;

    });

  }

);


/* =========================
   BUTTON MAGNET
========================= */

const magnetButtons =
document.querySelectorAll(

  ".primary-btn, .secondary-btn"

);

magnetButtons.forEach(button=>{

  button.addEventListener(

    "mousemove",

    (e)=>{

      const rect =
      button.getBoundingClientRect();

      const x =
      e.clientX - rect.left;

      const y =
      e.clientY - rect.top;

      const moveX =

      (x - rect.width / 2)
      * 0.12;

      const moveY =

      (y - rect.height / 2)
      * 0.12;

      button.style.transform =

      `translate(
        ${moveX}px,
        ${moveY}px
      )`;

    }

  );

  button.addEventListener(

    "mouseleave",

    ()=>{

      button.style.transform =
      "translate(0,0)";

    }

  );

});


/* =========================
   SCROLL GLOW
========================= */

window.addEventListener(

  "scroll",

  ()=>{

    const scroll =
    window.scrollY;

    document.body.style.backgroundPosition =

    `center ${scroll * 0.05}px`;

  }

);


/* =========================
   PARTICLES
========================= */

const canvas =
document.getElementById(
  "particles"
);

if(canvas){

  const ctx =
  canvas.getContext("2d");

  canvas.width =
  window.innerWidth;

  canvas.height =
  window.innerHeight;

  let particles = [];

  class Particle{

    constructor(){

      this.x =
      Math.random() *
      canvas.width;

      this.y =
      Math.random() *
      canvas.height;

      this.size =
      Math.random() * 2 + 1;

      this.speedX =
      Math.random() * 0.3 - 0.15;

      this.speedY =
      Math.random() * 0.3 - 0.15;
    }

    update(){

      this.x += this.speedX;

      this.y += this.speedY;

      if(this.x > canvas.width){

        this.x = 0;
      }

      if(this.x < 0){

        this.x = canvas.width;
      }

      if(this.y > canvas.height){

        this.y = 0;
      }

      if(this.y < 0){

        this.y = canvas.height;
      }

    }

    draw(){

      ctx.beginPath();

      ctx.arc(
        this.x,
        this.y,
        this.size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
      "rgba(34,197,94,0.15)";

      ctx.fill();

    }

  }


  function initParticles(){

    particles = [];

    for(let i=0;i<90;i++){

      particles.push(
        new Particle()
      );

    }

  }


  function animateParticles(){

    ctx.clearRect(

      0,
      0,
      canvas.width,
      canvas.height

    );

    particles.forEach(p=>{

      p.update();

      p.draw();

    });

    requestAnimationFrame(
      animateParticles
    );

  }

  initParticles();

  animateParticles();


  window.addEventListener(

    "resize",

    ()=>{

      canvas.width =
      window.innerWidth;

      canvas.height =
      window.innerHeight;

      initParticles();

    }

  );

}


/* =========================
   AUTO IMAGE SLIDE
========================= */

const showcaseScroll =
document.querySelector(
  ".showcase-scroll"
);

if(showcaseScroll){

  let autoScroll = 0;

  setInterval(()=>{

    autoScroll += 1;

    showcaseScroll.scrollTo({

      left:autoScroll * 450,

      behavior:"smooth"

    });

    if(

      autoScroll > 4

    ){

      autoScroll = 0;

    }

  },5000);

}