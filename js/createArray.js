'use strict'

document.querySelectorAll('#configuration-single-field');

let x = document.querySelectorAll("#configuration-single-field > .checkbox-input");
let y = document.querySelectorAll("#configuration-single-field > .checkbox-input-isRequired");
let requiredFieldText = document.querySelectorAll("#configuration-single-field > #required-field");

let array = [];

function selectCheckbox(i) {
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

function selectRequiredField(i) {
    let index = array.findIndex(x => x.id === y[i].id);
    if (y[i].checked) {
        array[index].required = true;
    } 
    else {
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
