"use strict";

document.addEventListener('DOMContentLoaded', () => {
    
    let btnContratar = document.getElementsByClassName("btn-contratar");
    
    /* Asigno la funcion de scroll a las cards de planes */
    for(let i = 0; i < btnContratar.length; i++){
        btnContratar[i].addEventListener('click', () => {
            document.getElementById('contacto').scrollIntoView({block: "center", behavior: "smooth"})
        })
    }

    let btnNavegacion = document.getElementsByClassName('nav-link');
    
    /* Asigno a los nav los efectos de scroll */
    for(let i = 0; i < btnNavegacion.length; i++){
        btnNavegacion[i].addEventListener('click', navegacion);
    }
    
})

function navegacion(){
    document.getElementById(this.getAttribute('value')).scrollIntoView({block: "center", behavior: "smooth"});
    document.getElementsByClassName('navbar-collapse')[0].classList.remove('show');
}