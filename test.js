function saludo(Hewi) {
    alert ('Hola' + Hewi)
}
console.log(eval('3+5'));

function validarNombre(nombre) {

  return nombre.trim() !== '';

}

function validarEmail(email) {

  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);

}

function validarFormulario(nombre, email) {

  if (!validarNombre(nombre)) {

    console.log('El nombre es obligatorio.');

    return false;

  }

  if (!validarEmail(email)) {

    console.log('El email es inválido.');

    return false;

  }

  console.log('Formulario válido.');

  return true;

}

validarFormulario('Juan', 'juan@example.com'); // Formulario válido.