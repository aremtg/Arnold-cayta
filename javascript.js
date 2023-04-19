var btn = document.getElementById("btn-toggle");

function toggleBtn(){
    btn.classList.toggle("active");
    
    if(btn.classList.contains("active")){
    document.body.style.backgroundColor = "gray";

    }else{
        document.body.style.backgroundColor = "white";

    }
}

var hamburguesa = document.querySelector(".bar-img");
var navUl = document.querySelector("nav ul");

function menuMostrar(){
    navUl.classList.toggle("ulResponsive")
    if(navUl.classList.contains("ulResponsive")){
        
    }

}