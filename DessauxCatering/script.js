// Inicializar EmailJS con tu USER_ID
emailjs.init("GB2TBo_Xp1RJDW3am");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    // Recoger los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validación de campos
    if (!nombre || !email || !mensaje) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Crear el objeto templateParams con los valores del formulario
    var templateParams = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Enviar el correo usando EmailJS
    emailjs.send("service_q8jlhnz", "template_6p73c1e", templateParams)
        .then(function(response) {
            alert("Mensaje enviado con éxito");
            document.getElementById("contact-form").reset();  // Limpiar el formulario
        }, function(error) {
            alert("Hubo un error al enviar el mensaje: " + error.text);  // Mostrar el error si ocurre
        });
});
