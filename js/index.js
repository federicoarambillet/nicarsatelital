"use strict";

document.addEventListener('DOMContentLoaded', () => {
    
    let btnContratar = document.getElementsByClassName("btn-contratar");
    
    for(let i = 0; i < btnContratar.length; i++){
        btnContratar[i].addEventListener('click', () => {
            document.getElementById('contacto').scrollIntoView({block: "center", behavior: "smooth"})
        })
    }

    
})