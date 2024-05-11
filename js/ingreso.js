document.addEventListener("DOMContentLoaded", function() {
    var registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        var contrasena = document.getElementById("contrasena").value;

        var datosUsuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasena: contrasena
        };

        // Guardar los datos del usuario en el almacenamiento local del navegador
        localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));

        // Redirigir al usuario a otra página
        window.location.href = "../index.html"; 
    });

    
});