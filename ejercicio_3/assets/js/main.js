
// Seleccionar imagen
var btn = document.getElementById("boton-oficial");
var drop1 = document.getElementById("drop1");
var drop2 = document.getElementById("drop2");
var drop3 = document.getElementById("drop3");
var mens = document.getElementById("mensaje");

// Agregar borde al hacer click
btn.addEventListener("click", function() {
    
    if (drop1.value==9 && drop2.value==1 && drop3.value==1) {
        mens.textContent = "* Password 1 correcto";
    } else if (drop1.value==7 && drop2.value==1 && drop3.value==4) {
        mens.textContent = "* Password 2 correcto";
    } else {
       mens.textContent = "* Password incorrecta";
    }
})