document.addEventListener("DOMContentLoaded", function() {
    var servicios = document.getElementById("servicios");
    var submenuServicios = document.getElementById("submenu-servicios");
    var datosUsuario = localStorage.getItem("datosUsuario");

    
    servicios.addEventListener("click", function() {
        if (submenuServicios.style.display === "block") {
            submenuServicios.style.display = "none";
            /*el style.display me dejaba agregar o poner un bloque en el html*/
        } else {
            submenuServicios.style.display = "block";
        }
    });




    var datosGuardados = localStorage.getItem("datosUsuario");
    if (datosGuardados) {
        var datosUsuario = JSON.parse(datosGuardados);
        var nombre = datosUsuario.nombre;
        var apellido = datosUsuario.apellido;

        // Mostrar el nombre y apellido en el div correspondiente
        var datosUsuarioDiv = document.querySelector(".datos_usuario h2");
        datosUsuarioDiv.textContent = "Hola, " + nombre + " " + apellido + "!";
        datosUsuarioDiv.style.display = "block"; // Mostrar el div

        var sacarIngresar = document.querySelector(".ingresar");
        sacarIngresar.style.display = "none";
    }
    else{
        var datosUsuarioDiv = document.querySelector(".datos_usuario2 h4");
        
        datosUsuarioDiv.textContent = "¡Únete a nuestra comunidad! Inicia sesión para acceder a contenido exclusivo."
    }
});