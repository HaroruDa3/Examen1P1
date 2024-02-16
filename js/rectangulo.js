console.log("Hola mundo");

function calcularArea() {
    let baseIngresada = parseInt(document.getElementById('base').value);
    let alturaIngresada = parseInt(document.getElementById('altura').value);

    console.log(document.getElementById('altura').value);
    console.log(document.getElementById('base').value);

    if (alturaIngresada >= 0 && baseIngresada >= 0) {
        let areaRectangulo = baseIngresada * alturaIngresada;
        asignarTextoElemento('h1', `El area del rectángulo es: ${areaRectangulo}.`);
    } else {
        asignarTextoElemento('h1', `El area y base ingresada deben ser entero positivos`);
        limpiar();
    }

    return;
}

function limpiar() {
    document.querySelector('#base').value = '';
    document.querySelector('#altura').value = '';
}

function reiniciarCalculadora() {
    limpiar();
    condicionesIniciales();
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Calculadora de el área de un rectángulo!');
    asignarTextoElemento('p', `Complete los campos`);
}

/*Funcion de asignar texto a elementos según la condición */
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

condicionesIniciales();





