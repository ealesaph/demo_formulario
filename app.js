document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const direccion = document.getElementById('direccion').value;
    const password = document.getElementById('password').value;

    if (nombre === "" || correo === "" || direccion === "" || password === ""){
        document.getElementById('mensaje').textContent =
        'Debe rellenar todos los campos';
        return; 
    }

    document.getElementById('mensaje').textContent =
    'Formulario enviado correctamente.';
});