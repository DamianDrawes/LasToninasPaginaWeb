
function abrir() {
    // Obtener el botón por su ID
    var barra = document.getElementById("barra");
    var boton = document.getElementById("openhead");
    // Verificar si tiene la clase actual y cambiarla
    if (barra.classList.contains("close")) {
        barra.classList.remove("close");
        barra.classList.add("open");
        boton.classList.add("color");
    } else {
        barra.classList.remove("open");
        barra.classList.add("close");
        boton.classList.remove("color");
    }
}
