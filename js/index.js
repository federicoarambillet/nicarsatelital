"use strict";

document.addEventListener('DOMContentLoaded', () => {

    let btnContratar = document.getElementsByClassName("btn-contratar");

    /* Asigno la funcion de scroll a las cards de planes */
    for (let i = 0; i < btnContratar.length; i++) {
        btnContratar[i].addEventListener('click', () => {
            document.getElementById('contacto').scrollIntoView({
                block: "center",
                behavior: "smooth"
            })
        })
    }

    let btnNavegacion = document.getElementsByClassName('nav-link');

    /* Asigno a los nav los efectos de scroll */
    for (let i = 0; i < btnNavegacion.length; i++) {
        btnNavegacion[i].addEventListener('click', navegacion);
    }

    document.getElementById('btn-enviarform').addEventListener('click', enviarFormulario);
})

function navegacion() {
    document.getElementById(this.getAttribute('value')).scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
    document.getElementsByClassName('navbar-collapse')[0].classList.remove('show');
}


function enviarFormulario() {
    let nombre = document.getElementById('form-nombre').value;
    let telefono = document.getElementById('form-telefono').value;
    let email = document.getElementById('form-email').value;
    let descripcion = document.getElementById('form-descripcion').value;
    let mensajeError = document.getElementById('mensaje-error');

    if (nombre.length > 0 && telefono.length > 0 && email.length > 0 && descripcion.length > 0) {
        mensajeError.innerHTML = "";
    } else {
        mensajeError.innerHTML = "Todos los campos deben estar completos";
    }

}