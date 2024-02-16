function calcularTotal() {
    var productos = document.querySelectorAll('input[name^="producto"]');
    var subtotal = 0;
    var descuento = 0;

    // Calcular subtotal
    productos.forEach(function (producto) {
        subtotal += parseFloat(producto.value) || 0;
    });
    document.getElementById('subtotal').value = subtotal;

    // Calcular descuento
    if (subtotal > 100) {
        descuento = 10;
    } else if (subtotal > 50) {
        descuento = 5;
    }
    document.getElementById('descuento').value = 'Descuento ' + descuento + '%';

    // Calcular total
    var total = subtotal * (1 - descuento / 100);
    document.getElementById('total').value = total.toFixed(2);
}

function limpiarFormulario() {
    document.getElementById('pedidoForm').reset();
}

document.getElementById('pedidoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Validar campos
    var inputs = document.querySelectorAll('input[type="number"]');
    var valid = true;
    inputs.forEach(function (input) {
        if (!input.value.trim() || isNaN(input.value.trim())) {
            valid = false;
            return;
        }
    });

    if (valid) {
        calcularTotal();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingresa números en todos los campos',
        });
    }
});