const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();


/*cora*/
const typed = new Typed('.card__parrafo', {
  strings: ['Amor yo sé que estamos lejos, pero de igual forma quiero que en este día recuerdes tus esfuerzos. posdata: estas fotos aparte que me encantan son momentos lindos con familia y amigos, para la siguiente mándame una foto de tus amigos jajajajaja Sorry a Santi y Jenifer.'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  showCursor: false,
  loop: true
}); 