document.addEventListener("DOMContentLoaded", function() {
    var servicios = document.getElementById("servicios");
    var submenuServicios = document.getElementById("submenu-servicios");

    servicios.addEventListener("click", function() {
        if (submenuServicios.style.display === "block") {
            submenuServicios.style.display = "none";
            /*el style.display me dejaba agregar o poner un bloque en el html*/
        } else {
            submenuServicios.style.display = "block";
        }
    });
});