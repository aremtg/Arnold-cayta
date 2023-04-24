var btn = document.getElementById("btn-toggle");
var enlaces = document.querySelector("nav");

function toggleBtn(){
    btn.classList.toggle("active");
    
    if(btn.classList.contains("active")){
    document.body.style.backgroundColor ="black";
    enlaces.style.color ="white";

    }else{
        document.body.style.backgroundColor = "white";
        enlaces.style.color ="black";


    }
}

var hamburguesa = document.querySelector(".bar-img");
var navUl = document.querySelector("nav ul");

function menuMostrar(){
    navUl.classList.toggle("ulResponsive");

}


