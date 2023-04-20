const pantalla = document.getElementById('pantalla');
const botones = document.getElementsByClassName('boton');
const botonBorrar = document.getElementById('borrarUltimo');

const arrayBotones = Array.from(botones);
arrayBotones.forEach(button => {
     button.addEventListener("click", () =>{
          calculadora(button, pantalla)
     })
})
function calculadora(button, pantalla){
     switch (button.innerHTML) {
          case "C":
               borrar(pantalla);
               break;
          case "=":
               calcular(pantalla);
               break;
          case "←":
               borraUltimo(pantalla);
               break;
          default:
               actualizar(pantalla, button);
               break;
     }
}
function calcular(pantalla){
    pantalla.innerHTML = eval(pantalla.innerHTML);
}
function actualizar(pantalla, button){
     if (pantalla.innerHTML == 0) {
          pantalla.innerHTML = ` `;
     }     
     pantalla.innerHTML = pantalla.innerHTML + button.innerHTML;
}
function borrar(pantalla){
     pantalla.innerHTML = ` `;
}
function borraUltimo(pantalla) {
     const valorActual = pantalla.innerHTML;
     pantalla.innerHTML = valorActual.slice(0, -1);
}
// consejos- frase

const frases = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día",
    "Rindete, las cosas buenas no siempre llegan",
    "El fracaso es una oportunidad para comenzar de nuevo con más inteligencia",
    "Si te caes siete veces, se te van a reir",
    "Si piensas que puedes, ya estás a medio camino",
    "Si te gusta lo que haces, nunca tendrás que trabajar",
    "Elige un trabajo que te guste y no tendrás que trabajar ni un día de tu vida",
    "Cada logro comienza con la decisión de intentarlo",
    "No hay atajos para llegar a la cima, hay que subir peldaño a peldaño",
    "A veces las cosas más pequeñas ocupan más espacio en tu corazón"
  ];
  function obtenerFraseAleatoria() {
    return frases[Math.floor(Math.random() * frases.length)];
  }
// actualiza su contenido usando la propiedad textContent.
  function mostrarFrase() {
    const fraseAleatoria = obtenerFraseAleatoria();
    const p = document.getElementById("frase");
    p.textContent = fraseAleatoria;
  }
