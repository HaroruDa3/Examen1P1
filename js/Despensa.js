console.log('Hola mundo');


function validarInputsPorId() {

    let idsInputs = ["Producto1", "Producto2", "Producto3", "Producto4", "Producto5"];
    let inputsVacios = [];

    idsInputs.forEach(function (id) {
        let input = document.getElementById(id);
        if (!input.value.trim()) { // Verifica si el valor del input está vacío o contiene solo espacios en blanco
            inputsVacios.push(id);
        }
    });

    if (inputsVacios.length === 0) {
        console.log('Todos los inputs tienen valores.');
        return true;
    } else {
        let inputsVaciosStr = inputsVacios.join(', '); // Convertimos el array en una cadena separada por comas
        Swal.fire({
            icon: 'error',
            title: 'Inputs vacíos',
            text: `Los siguientes inputs están vacíos: ${inputsVaciosStr}`
        });
        return false;
    }
}

// Ejemplo de uso:
// let inputsValidos = validarInputsPorId();
// if (inputsValidos) {
//     console.log('Todos los inputs tienen valores. Puedes continuar.');
// } else {
//     console.log('Por favor, completa todos los inputs.');
// }
function calcularTotal() {

    let descuento = 0;
    let subtotal = 0;
    let total = 0;

    let pro1 = parseInt(document.getElementById('Producto1').value);
    let pro2 = parseInt(document.getElementById('Producto2').value);
    let pro3 = parseInt(document.getElementById('Producto3').value);
    let pro4 = parseInt(document.getElementById('Producto4').value);
    let pro5 = parseInt(document.getElementById('Producto5').value);

    subtotal = pro1 + pro2 + pro3 + pro4 + pro5;
    console.log(subtotal);

    asignarTextoElemento('#Subtotal', ` ${subtotal}`);

    if (subtotal !== "" && parseFloat(subtotal) >= 0 && parseFloat(subtotal) < 1000) {
        descuento = subtotal * 0.10;
        total = subtotal - descuento;
        asignarTextoElemento('#Total', ` ${total}`);
        asignarTextoElemento('#Descuento', `Descuento de 0%: ${descuento}`)// No aplica descuento

    } else if (subtotal >= 1000 && subtotal < 5000) {
        descuento = subtotal * 0.10;
        total = subtotal - descuento;
        asignarTextoElemento('#Total', ` ${total}`);
        asignarTextoElemento('#Descuento', `Descuento de 10%: ${descuento}`) // 10% descuento

    } else if (subtotal >= 5000 && subtotal < 9000) {
        descuento = subtotal * 0.20;
        total = subtotal - descuento;
        asignarTextoElemento('#Total', ` ${total}`);
        asignarTextoElemento('#Descuento', `Descuento de 20%: ${descuento}`) // 20% descuento

    } else if (subtotal >= 9000 && subtotal < 13000) {
        descuento = subtotal * 0.30;
        total = subtotal - descuento;
        asignarTextoElemento('#Total', ` ${total}`);
        asignarTextoElemento('#Descuento', `Descuento de 30%: ${descuento}`) // 30% descuento

    } else {
        descuento = subtotal * 0.40;
        total = subtotal - descuento;
        asignarTextoElemento('#Total', ` ${total}`);
        asignarTextoElemento('#Descuento', `Descuento de 40%: ${descuento}`) // 40% descuento
    }

    console.log('Hola calcular');
    return;
}


function validarYCalcular() {
    let validacionExitosa = validarInputsPorId();
    if (validacionExitosa) {
        calcularTotal();
        return "Validación exitosa. Se calculó el total.";
    } else {
        condicionesIniciales();
        return "Validación fallida. Se aplicaron condiciones iniciales.";
    }
}

function limpiar() {
    document.querySelector('#Producto1').value = '';
    document.querySelector('#Producto2').value = '';
    document.querySelector('#Producto3').value = '';
    document.querySelector('#Producto4').value = '';
    document.querySelector('#Producto5').value = '';
    document.querySelector('#Subtotal').value = '';
    document.querySelector('#Total').value = '';
}

function reiniciarDespensa() {
    limpiar();
    condicionesIniciales();
    console.log('Hola limpiar');
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Factura de productos!');
    asignarTextoElemento('p', `Complete los campos`);
    asignarTextoElemento('#Descuento', 'Descuento de 0%')
}

/*Funcion de asignar texto a elementos según la condición */
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    elementoHTML.placeholder = texto;
    return;
}

condicionesIniciales();