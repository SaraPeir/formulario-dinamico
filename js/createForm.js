'use strict'

let formsContainer = document.querySelector('#forms-container');

function createForm(array){
    let form = document.createElement("form");
    form.setAttribute("class", "col-8 border border-primary bg-light py-4 my-4");
    let inputContainer = document.createElement("div");
    inputContainer.setAttribute('class', 'row justify-content-center');
    let formButton = document.createElement("button");
    formButton.setAttribute('type', 'submit');
    formButton.setAttribute('class', 'btn btn-primary col-6');
    formButton.innerHTML = 'Submit';

    formsContainer.appendChild(form);
    form.appendChild(inputContainer);

    let inputs;
    if(array.length > 0) {
        for(let i = 0; i < array.length; i++){
            inputs = array.map(obj => 
                `<input class="mb-3 col-10" type="${obj.type}"
                    name="${obj.name}"
                   id="${obj.id}"
                   placeholder="${obj.name}${obj.required ? "*" : ''}"
                   ${obj.required ? "required" : ''}
            >
            </input>`).join('');
        }
        inputContainer.innerHTML = inputs;
        inputContainer.appendChild(formButton);
    }
    reset();
    array.length = 0;
}

function triggerEvent(array) {
    return array.length > 0 && createForm(array); 
}


// para el campo dinamico, el array viene generado desde otra funcion
// el formulario para generar array viene pintado en el DOM (los radios estan ya todos seleccionados)
// antes, se carga la funcion para generar el array, luego la para generar el formulario (en manera sincrona?)
// como callback de la segunda, se pinta un button (antes se podría poder un button medio sbiadito con animación


