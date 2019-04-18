'use strict'

let formsContainer = document.querySelector('.forms-container');

function createForm(array){
    let form = document.createElement("form");
    form.setAttribute("class", "form-container border border-primary");
    let inputContainer = document.createElement("div");
    let formButton = document.createElement("button");
    formButton.setAttribute('type', 'submit');
    formButton.setAttribute('class', 'btn btn-primary');
    formButton.innerHTML = 'Submit';

    formsContainer.appendChild(form);
    form.appendChild(inputContainer);
    form.appendChild(formButton);

    let inputs;
    if(array.length > 0) {
        for(let i = 0; i < array.length; i++){
            inputs = array.map(obj => 
                `<input class="input-style" type="${obj.type}"
                    name="${obj.name}"
                   id="${obj.id}"
                   placeholder="${obj.name}"
                   ${obj.required ? "required" : ''}
            >
            </input>`).join('');
        }
        inputContainer.innerHTML = inputs;
    }
    reset();
    array.length = 0;
}


// para el campo dinamico, el array viene generado desde otra funcion
// el formulario para generar array viene pintado en el DOM (los radios estan ya todos seleccionados)
// antes, se carga la funcion para generar el array, luego la para generar el formulario (en manera sincrona?)
// como callback de la segunda, se pinta un button (antes se podría poder un button medio sbiadito con animación


