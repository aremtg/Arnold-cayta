var btn = document.getElementById("btn-toggle");

function toggleBtn(){
    btn.classList.toggle("active");
    
    if(btn.classList.contains("active")){
    document.body.style.backgroundImage = `url("imagenes/estrellas.jpg")`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    }else{
        document.body.style.backgroundImage = "none";

    }
}

var hamburguesa = document.querySelector(".bar-img");
var navUl = document.querySelector("nav ul");

function menuMostrar(){
    navUl.classList.toggle("ulResponsive");

}

var contenedorContenido = document.getElementById("contenido");


