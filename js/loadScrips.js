'use strict'

function loadScript(src, callback){
    const head = document.querySelector('head');
    let script = document.createElement('script');
    script.src = src;
    head.appendChild(script);
    script.onload = () => {
        if(callback){
            callback();
        } 
    };
}

function loadScripts(array = []) {
    if(array.length > 0){ 
          for(let i=0; i<array.length; i++){
            loadScript(array[i], loadScript[i+1]);
          }
        // array.map(src => loadScript(src, console.log(`modulo cargado: ${src}`))); 
    } else {
        console.log('Añade un array de modulos de JS')
    }
}
loadScripts(['js/createArray.js', 'js/createForm.js']);

// , 'js/consoleLog1.js', 'js/consoleLog2.js'
