document.addEventListener("DOMContentLoaded", () => {
  const talkBooton = document.getElementById("talkBooton");

  talkBooton.addEventListener("click", (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Formulario de Consulta",
      html: `
            <form id="consulta-form">
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" class="swal2-input" placeholder="Tu nombre">
    
              <label for="apellido">Apellido:</label>
              <input type="text" id="apellido" name="apellido" class="swal2-input" placeholder="Tu apellido">
    
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" class="swal2-input" placeholder="Tu correo electrónico">
    
              <label for="consulta">Consulta:</label>
              <textarea id="consulta" name="consulta" class="swal2-textarea" placeholder="Escribe tu consulta" rows="5"></textarea>
            </form>
          `,
      confirmButtonText: "Enviar",
      focusConfirm: false,
      customClass: {
        confirmButton: "custom-confirm-button", // Aquí personalizamos el botón
      },
      preConfirm: () => {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const consulta = document.getElementById("consulta").value;

        if (!nombre || !apellido || !email || !consulta) {
          Swal.showValidationMessage("Por favor, completa todos los campos");
        }

        return { nombre, apellido, email, consulta };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Datos enviados:", result.value);
        Swal.fire("¡Enviado!", "Tu consulta ha sido recibida.", "success");
      }
    });
  });
});
