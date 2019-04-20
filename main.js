'use strict'

let formsContainer = document.querySelector('#forms-container');
let x = document.querySelectorAll("#configuration-single-field > .checkbox-input");
let y = document.querySelectorAll("#configuration-single-field > .checkbox-input-isRequired");
let requiredFieldText = document.querySelectorAll("#configuration-single-field > #required-field");

let array = [];
!localStorage.formArray && localStorage.setItem('formArray', JSON.stringify([]));

function selectCheckbox(array=[], i) {
    if (x[i].checked) {
        console.log(x[i].name, x[i].id);
        y[i].disabled = false;
        requiredFieldText[i].setAttribute('class', 'typo2');
        let obj = {
            type: x[i].name,
            name: x[i].id,
            id: x[i].id,
            required: false
        }
        array.push(obj);
        console.log(array);
    } else {
        array.splice(i, 1);
        console.log(array);
        y[i].disabled = true;
        y[i].checked = false;
    }
}

function selectRequiredField(array=[], i) {
    let index = array.findIndex(x => x.id === y[i].id);
    if (y[i].checked) {
        array[index].required = true;
    } else {
        array[index].required = false;
    }
    console.log('array', array);
}

function getArray(){
    console.log('getArray', array);
    return array;
}

function reset(){
    for(let i=0; i<x.length; i++){
        if (x[i].checked) {
            x[i].checked = false;
        }
    }

    for(let i=0; i<y.length; i++){
        if (y[i].checked) {
            y[i].disabled = true;
            y[i].checked = false;
        }
    }

    for(let i=0; i<requiredFieldText.length; i++){
        if (requiredFieldText[i].getAttribute('class') == "typo2") {
            requiredFieldText[i].setAttribute('class', 'typo2-disabled');
        }
    }
}

function createForm(array=[], callback){
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
        inputs = array.map(obj => 
            `<input class="mb-3 col-10" type="${obj.type}"
                name="${obj.name}"
                id="${obj.id}"
                placeholder="${obj.name}${obj.required ? "*" : ''}"
                ${obj.required ? "required" : ''}
            >
            </input>`).join('');
        inputContainer.innerHTML = inputs;
        inputContainer.appendChild(formButton);

        let storageArray = JSON.parse(localStorage.getItem('formArray'));
        
        storageArray && storageArray.push(array);
        console.log('storageArray', storageArray);
        localStorage.setItem('formArray', JSON.stringify(storageArray));
        
        callback && callback();
        array.length = 0;
    } 
}

function triggerEvent(array=[], callback) {
    return array.length > 0 && createForm(array, callback); 
}

function createFormsFromStorage(){
    const storageArray = localStorage.formArray && JSON.parse(localStorage.getItem('formArray'));
    let inputs;
    if(storageArray && storageArray.length > 0) {
        for(let i = 0; i < storageArray.length; i++){
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

            inputs = storageArray[i].map(obj => 
                `<input class="mb-3 col-10" type="${obj.type}"
                    name="${obj.name}"
                   id="${obj.id}"
                   placeholder="${obj.name}${obj.required ? "*" : ''}"
                   ${obj.required ? "required" : ''}
            >
            </input>`).join('');

            inputContainer.innerHTML = inputs;
            inputContainer.appendChild(formButton);
        }
    } 
}

createFormsFromStorage();
