/* =========================
   CONTACT DATA
========================= */

const contactLinks = {

  whatsapp:
  "https://wa.me/527205756626",

  instagram:
  "https://instagram.com/ecosort._.12",

  email:
  "mailto:ecosortentuvida@gmail.com"

};


/* =========================
   BUTTONS
========================= */

const whatsappBtn =
document.getElementById(
  "whatsappBtn"
);

const instagramBtn =
document.getElementById(
  "instagramBtn"
);

const emailBtn =
document.getElementById(
  "emailBtn"
);


/* =========================
   WHATSAPP
========================= */

whatsappBtn?.addEventListener(

  "click",

  ()=>{

    animateButton(
      whatsappBtn
    );

    window.open(

      contactLinks.whatsapp,

      "_blank"

    );

  }

);


/* =========================
   INSTAGRAM
========================= */

instagramBtn?.addEventListener(

  "click",

  ()=>{

    animateButton(
      instagramBtn
    );

    window.open(

      contactLinks.instagram,

      "_blank"

    );

  }

);


/* =========================
   EMAIL
========================= */

emailBtn?.addEventListener(

  "click",

  ()=>{

    animateButton(
      emailBtn
    );

    window.location.href =
    contactLinks.email;

  }

);


/* =========================
   BUTTON FEEDBACK
========================= */

function animateButton(button){

  button.classList.add(
    "clicked"
  );

  setTimeout(()=>{

    button.classList.remove(
      "clicked"
    );

  },400);

}


/* =========================
   COPY EMAIL
========================= */

const copyEmail =
document.getElementById(
  "copyEmail"
);

copyEmail?.addEventListener(

  "click",

  ()=>{

    navigator.clipboard.writeText(
      "contacto@ecosort.com"
    );

    copyEmail.innerText =
    "Correo copiado";

    setTimeout(()=>{

      copyEmail.innerText =
      "Copiar correo";

    },2000);

  }

);


/* =========================
   CONTACT CARD HOVER
========================= */

const contactCards =
document.querySelectorAll(

  ".contact-card"

);

contactCards.forEach(card=>{

  card.addEventListener(

    "mouseenter",

    ()=>{

      card.style.transform =

      "translateY(-8px)";

    }

  );

  card.addEventListener(

    "mouseleave",

    ()=>{

      card.style.transform =
      "";

    }

  );

});


/* =========================
   FORM
========================= */

const contactForm =
document.getElementById(
  "contactForm"
);

contactForm?.addEventListener(

  "submit",

  (e)=>{

    e.preventDefault();

    const submitBtn =
    contactForm.querySelector(
      "button"
    );

    submitBtn.innerText =
    "Enviando...";

    submitBtn.disabled =
    true;

    setTimeout(()=>{

      submitBtn.innerText =
      "Mensaje enviado";

      submitBtn.style.background =
      "#16a34a";

    },1500);

    setTimeout(()=>{

      contactForm.reset();

      submitBtn.innerText =
      "Enviar mensaje";

      submitBtn.disabled =
      false;

      submitBtn.style.background =
      "";

    },3500);

  }

);


/* =========================
   LIVE STATUS
========================= */

const contactStatus =
document.getElementById(
  "contactStatus"
);

const statuses = [

  "Disponible ahora",

  "Respondiendo mensajes",

  "Soporte en línea",

  "Atención activa"

];

let statusIndex = 0;

setInterval(()=>{

  if(!contactStatus){

    return;
  }

  statusIndex++;

  if(
    statusIndex >=
    statuses.length
  ){

    statusIndex = 0;
  }

  contactStatus.innerText =

  statuses[statusIndex];

},4000);


/* =========================
   SCROLL CONTACT
========================= */

document
.querySelectorAll("[data-contact]")
.forEach(button=>{

  button.addEventListener(

    "click",

    ()=>{

      document
      .querySelector("#contact")
      .scrollIntoView({

        behavior:"smooth"

      });

    }

  );

});


/* =========================
   MOBILE TOUCH
========================= */

if(window.innerWidth < 768){

  document
  .querySelectorAll(".contact-btn")
  .forEach(button=>{

    button.addEventListener(

      "touchstart",

      ()=>{

        button.style.transform =
        "scale(0.96)";

      }

    );

    button.addEventListener(

      "touchend",

      ()=>{

        button.style.transform =
        "";

      }

    );

  });

}