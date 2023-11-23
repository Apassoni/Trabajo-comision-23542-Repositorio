var nombre = document.getElementById("fname");
var apellido = document.getElementById("lname");
var correo = document.getElementById("email");
var telefono = document.getElementById("phone");
var mensaje = document.getElementById("message");
var error = document.getElementById("error");
error.style.color = "red";

var expReg =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

var form = document.getElementById("formulariojs");
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  var mensajesError = [];

  if (nombre.value === null || nombre.value === "") {
    mensajesError.push("Ingresa un nombre");
  }

  if (apellido.value === null || apellido.value === "") {
    mensajesError.push("Ingresa un apellido");
  }

  if (
    correo.value === null ||
    correo.value === "" ||
    !expReg.test(correo.value)
  ) {
    mensajesError.push("Ingresa un correo valido");
  }

  if (telefono.value === null || telefono.value === "") {
    mensajesError.push("Ingresa un telefono de contacto");
  }

  if (mensaje.value === null || nombre.value === "") {
    mensajesError.push("Completa el campo mensaje");
  }

  error.innerHTML = mensajesError.join(", ");
});
