document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

const toggleMenuElement = document.getElementById('toggle_menu');
const mainMenuElement = document.getElementById('main_menu');

    toggleMenuElement.addEventListener('click', () => {
        mainMenuElement.classList.toggle('nav_menu--show');
    }) ;

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

}


const testimonios = [
  {
    mensaje: "Karina es muy profesional y resolutiva. Trabajar con ella fue excelente.",
    autor: "– Julia Ramírez, Electricidad y Control"
  },
  {
    mensaje: "Creativa, puntual y siempre con nuevas ideas. 100% recomendada.",
    autor: "– Pablo Gigante, TheBee Agency"
  }
];

const contenedor = document.querySelector(".testimonios-container");

testimonios.forEach(t => {
  const div = document.createElement("div");
  div.className = "testimonio";
  div.innerHTML = `
    <p class="mensaje">"${t.mensaje}"</p>
    <h4 class="autor">${t.autor}</h4>
  `;
  contenedor.appendChild(div);
});

/* const toggleMenuElement = document.getElementById('toggle_menu');
const mainMenuElement = document.getElementById('main_menu');

    toggleMenuElement.addEventListener('click', () => {
        mainMenuElement.classList.toggle('nav_menu--show');
    }) ; */
