/* =========================
   VALUES
========================= */

let metal = 12;

let wet = 25;

let dry = 41;

let co2 = 19.08;


/* =========================
   ELEMENTS
========================= */

const metalCount =
document.getElementById(
  "metalCount"
);

const wetCount =
document.getElementById(
  "wetCount"
);

const dryCount =
document.getElementById(
  "dryCount"
);

const co2Count =
document.getElementById(
  "co2Count"
);

const feedText =
document.getElementById(
  "feedText"
);

const core =
document.querySelector(
  ".core-ring"
);

const center =
document.getElementById(
  "coreCenter"
);


/* =========================
   UPDATE UI
========================= */

function updateUI(){

  metalCount.innerText =
  metal;

  wetCount.innerText =
  wet;

  dryCount.innerText =
  dry;

  co2Count.innerText =
  `${co2.toFixed(2)} kg`;

}


/* =========================
   FEED
========================= */

function setFeed(message){

  feedText.innerText =
  message;

}


/* =========================
   PULSE CORE
========================= */

function pulseCore(){

  core.classList.add(
    "pulse"
  );

  setTimeout(()=>{

    core.classList.remove(
      "pulse"
    );

  },1000);

}


/* =========================
   RANDOM TELEMETRY
========================= */

function randomTelemetry(){

  const states = [

    "Sensores calibrados.",
    "Monitoreo activo.",
    "Sistema estable.",
    "SCADA operativo.",
    "Analizando residuos.",
    "Conexión industrial estable.",
    "Procesando datos.",
    "EcoSort en línea."

  ];

  const random =
  states[
    Math.floor(
      Math.random()
      *
      states.length
    )
  ];

  setFeed(random);

}


setInterval(

  randomTelemetry,

  5000

);


/* =========================
   METAL
========================= */

document
.getElementById("metalBtn")
.addEventListener(

  "click",

  ()=>{

    metal++;

    co2 += 0.52;

    updateUI();

    pulseCore();

    center.innerText =
    "METAL";

    setFeed(
      "Metal detectado y clasificado."
    );

    center.style.background =

      "linear-gradient(145deg,#3b82f6,#2563eb)";

    setTimeout(()=>{

      center.innerText =
      "ECOSORT";

      center.style.background =

        "linear-gradient(145deg,#16a34a,#15803d)";

    },2000);

  }

);


/* =========================
   WET
========================= */

document
.getElementById("wetBtn")
.addEventListener(

  "click",

  ()=>{

    wet++;

    co2 += 0.35;

    updateUI();

    pulseCore();

    center.innerText =
    "HÚMEDO";

    setFeed(
      "Residuo húmedo procesado."
    );

    center.style.background =

      "linear-gradient(145deg,#f59e0b,#d97706)";

    setTimeout(()=>{

      center.innerText =
      "ECOSORT";

      center.style.background =

        "linear-gradient(145deg,#16a34a,#15803d)";

    },2000);

  }

);


/* =========================
   DRY
========================= */

document
.getElementById("dryBtn")
.addEventListener(

  "click",

  ()=>{

    dry++;

    co2 += 0.41;

    updateUI();

    pulseCore();

    center.innerText =
    "SECO";

    setFeed(
      "Residuo seco clasificado."
    );

    center.style.background =

      "linear-gradient(145deg,#22c55e,#15803d)";

    setTimeout(()=>{

      center.innerText =
      "ECOSORT";

      center.style.background =

        "linear-gradient(145deg,#16a34a,#15803d)";

    },2000);

  }

);


/* =========================
   LIVE COUNTER ANIMATION
========================= */

function animateValue(
  element,
  start,
  end,
  duration
){

  let startTime = null;

  function animation(currentTime){

    if(!startTime){

      startTime = currentTime;
    }

    const progress = Math.min(

      (currentTime - startTime)
      / duration,

      1

    );

    const value = Math.floor(

      progress *
      (end - start)
      + start

    );

    element.innerText =
    value;

    if(progress < 1){

      requestAnimationFrame(
        animation
      );

    }

  }

  requestAnimationFrame(
    animation
  );

}


/* =========================
   INITIAL
========================= */

updateUI();


/* =========================
   AUTO STATUS
========================= */

const statuses = [

  "ONLINE",
  "MONITORING",
  "ACTIVE",
  "PROCESSING"

];

const liveStatus =
document.querySelector(
  ".status-live"
);

let statusIndex = 0;

setInterval(()=>{

  statusIndex++;

  if(
    statusIndex >=
    statuses.length
  ){

    statusIndex = 0;
  }

  liveStatus.innerHTML = `

    <span></span>

    ${statuses[statusIndex]}

  `;

},4000);


/* =========================
   AUTO SIMULATION
========================= */

setInterval(()=>{

  const random =
  Math.floor(Math.random()*3);

  if(random === 0){

    metal++;

    co2 += 0.12;

  }

  if(random === 1){

    wet++;

    co2 += 0.09;

  }

  if(random === 2){

    dry++;

    co2 += 0.11;

  }

  updateUI();

},12000);