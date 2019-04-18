'use strict'

let formContainer = document.querySelector('.form-container');

function createForm(array){
    let form = document.createElement("form");
    let inputContainer = document.createElement("div");
    let formButton = document.createElement("button");
    formButton.setAttribute('type', 'submit');
    formButton.innerHTML = 'Submit';

    formContainer.appendChild(form);
    form.appendChild(inputContainer);
    form.appendChild(formButton);

    let inputs;
    if(array.length > 0) {
        for(let i = 0; i < array.length; i++){
            inputs = array.map(obj => 
                `<div class="form-box"><input type="${obj.type}"
                    name="${obj.name}"
                   id="${obj.id}"
                   placeholder="${obj.name}"
                   ${obj.required ? "required" : ''}
            >
            </input></div>`).join();
        }
        inputContainer.innerHTML = inputs;
    }
    reset();
}


// para el campo dinamico, el array viene generado desde otra funcion
// el formulario para generar array viene pintado en el DOM (los radios estan ya todos seleccionados)
// antes, se carga la funcion para generar el array, luego la para generar el formulario (en manera sincrona?)
// como callback de la segunda, se pinta un button (antes se podría poder un button medio sbiadito con animación


