
// Seleccionar imagen
var btn = document.getElementById("boton-oficial");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var mens = document.getElementById("mensaje");

// Agregar borde al hacer click
btn.addEventListener("click", function() {

    var valor1 = parseInt(input1.value) || 0;
    var valor2 = parseInt(input2.value) || 0;
    var valor3 = parseInt(input3.value) || 0;

    var suma = valor1 + valor2 + valor3;

    if (suma < 11) {
        mens.textContent = "Llevas " + suma + " stickers";
    } else {
        mens.textContent = "Llevas demasiados stickers";
    }
})