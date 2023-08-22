//CÓDIGO CON COMENTARIOS PARA POSIBLES REVISONES FUTURAS.

// Primero esperamos a que realice toda la carga del DOM.
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el formulario de dentro del DOM para poder después escuchar el evento que estamos queriendo controlar.
    const form = document.querySelector("form");
  
    // Escuchar el evento de tipo submit que teníamos preparado.
    form.addEventListener("submit", function(event) {
        // Evitar el comportamiento predeterminado del envío del formulario.
         event.preventDefault();
  
        // Obtener los elementos de entrada del formulario. Esto nos va a permitir realizar las comprobaciones con los patrones que hayamos elegido.
        const nameInput = document.getElementById("name");
        const lastNameInput = document.getElementById("apellidos");
        const ageInput = document.getElementById("age");
        const telephoneInput = document.getElementById("telephone");
        const emailInput = document.getElementById("email");
  
        // Una vez obtenidos se captura el propio valor en si mismo para poder realizar la comprobación.
        const name = nameInput.value;
        const lastName = lastNameInput.value;
        const age = ageInput.value;
        const telephone = telephoneInput.value;
        const email = emailInput.value;
  
        // Expresiones de validación. 
        const nameRegex = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]{2,15}$/;
        //Te pide entre 2 y 15 caractees y te admite además los caracteres acentuados.
        const lastNameRegex = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]{3,46}$/;
        //Te pide entre 3 y 46 caractees y te admite además los caracteres acentuados.
        const ageRegex = /^[0-9]+$/;
        //Te permite la introducción de números. Te exige nueve.
        const telephoneRegex = /^[0-9]{9}$/;
        //Comrpobación de la validadez también de los datos introducidos en un email.
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
        // Validamos los campos.
        if (!nameRegex.test(name)) {
            alert("El nombre debe tener de 2 a 15 letras.");
            return;
        }
  
        if (!lastNameRegex.test(lastName)) {
            alert("El apellido debe tener de 3 a 46 letras.");
            return;
        }
  
        if (!ageRegex.test(age) || age < 0 || age > 130) {
            alert("La edad debe ser un número válido entre 0 y 130.");
            return;
        }
  
        if (!telephoneRegex.test(telephone)) {
            alert("El teléfono debe tener nueve números.");
            return;
        }
  
        if (!emailRegex.test(email)) {
            alert("El email debe tener un formato válido.");
            return;
        }
  
        // Si todo está bien se produce el envío de la información.
        alert("Datos enviados correctamente!");
    });
  });
  