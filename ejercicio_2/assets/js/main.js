
// Seleccionar imagen
var imag = document.getElementById("imagen");

// Agregar borde al hacer click
imag.addEventListener("click", function() {
    
    if (imagen.style.borderColor === 'red' && imagen.style.borderWidth === '2px') {
        imag.style.borderColor = "black";
        imag.style.borderWidth = "1px";        
    } else {
        imag.style.borderColor = "red";
        imag.style.borderWidth = "2px";
    }
})