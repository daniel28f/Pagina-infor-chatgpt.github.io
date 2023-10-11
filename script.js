// Función para mostrar un mensaje de bienvenida
function mostrarMensajeBienvenida() {
    alert("¡Bienvenido a mi sitio web sobre ChatGPT y la inteligencia artificial!");
}

// Función para validar un formulario de contacto
function validarFormularioContacto() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || correo === '' || mensaje === '') {
        alert('Por favor, complete todos los campos del formulario de contacto.');
        return false;
    }

    alert('¡Gracias por tu mensaje! Te responderemos pronto.');
    return true;
}

// Asociar funciones a eventos
document.addEventListener('DOMContentLoaded', mostrarMensajeBienvenida);
document.getElementById('formulario-contacto').addEventListener('submit', validarFormularioContacto);

