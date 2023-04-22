// consejos- frase

const frases = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día",
    "Rindete, las cosas buenas no siempre llegan",
    "El fracaso es una oportunidad para comenzar de nuevo con más inteligencia",
    "this is una frase aleatoria",
    "Si piensas que puedes, ya estás a medio camino",
    "Si te gusta lo que haces, nunca tendrás que trabajar",
    "Elige un trabajo que te guste y no tendrás que trabajar ni un día de tu vida",
    "Cada logro comienza con la decisión de intentarlo",
    "No hay atajos para llegar a la cima, hay que subir peldaño a peldaño",
    "A veces las cosas más pequeñas ocupan más espacio en tu corazón"
  ];
  function obtenerFraseAleatoria() {
     // devuuelve la frase numero ...redondea el numero randon-entre 10
    return frases[Math.floor(Math.random() * frases.length)];
  }
// actualiza su contenido usando la propiedad textContent.
  function mostrarFrase() {
    const fraseAleatoria = obtenerFraseAleatoria();
    const p = document.getElementById("frase");
    p.textContent = fraseAleatoria;
  }
  var clics = 0;
    
  function contar() {
      clics++;
      document.getElementById("sonido").innerHTML = `<audio src="/imagenes/click-sonido.mp3" autoplay></audio>`;
      document.getElementById("numeroClicks").textContent = clics ;

      if (clics === 1) {
          // Iniciar temporizador después del primer clic
          setTimeout(function() {
              document.getElementById("boton").disabled = true;
              document.getElementById("sonido").innerHTML = `<audio src="/imagenes/tiempo-sonido.mp3" autoplay></audio>`
              document.getElementById("alerta-tiempo").innerHTML = `<h1>`+clics+`</h1><span id="span-yaa">Se que puedes con mas.</span><img onclick= "reiniciar()"src="/imagenes/reiniciar.svg" alt="">`;
          }, 1000);
          
      }

  }
  function reiniciar() {
     clics = 0;
     document.getElementById("numeroClicks").textContent = clics;
     document.getElementById("boton").disabled = false;
     document.getElementById("alerta-tiempo").innerHTML = "";
     document.getElementById("sonido").innerHTML = "";
 }
 
 
 
 
 
 
 