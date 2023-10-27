document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento de imagen de perfil
    const imagenPerfil = document.getElementById('imagen_perfil');
    // Obtener los elementos de input
    const usernameInput = document.getElementById('usernameInput');
    const nombreInput = document.getElementById('nombreInput');
    const apellidoInput = document.getElementById('apellidoInput');
    const emailInput = document.getElementById('emailInput');
  
    // Obtener los datos del usuario almacenados en sessionStorage
    const usuarioString = sessionStorage.getItem('usuarioLogeado');
  
    if (usuarioString) {
      // Si se encontraron datos del usuario en sessionStorage
      const usuario = JSON.parse(usuarioString);
  
      // Establecer los valores en los elementos HTML
      usernameInput.value = usuario.username;
      nombreInput.value = usuario.nombre;
      apellidoInput.value = usuario.apellido;
      emailInput.value = usuario.email;
  
      // Establecer la imagen de perfil
      imagenPerfil.src = usuario.avatar;
    }
  });
  





// Obtener elementos HTML
const modal = document.getElementById('modal-avatar');
const openModalButton = document.getElementById('openModalAvatar');
const closeButton = document.getElementById('closeButton');

// Función para abrir la ventana modal
function openModal() {
  modal.style.display = 'block';
}

// Función para cerrar la ventana modal
function closeModal() {
  modal.style.display = 'none';
}

// Agregar eventos a los botones
openModalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

// Función para seleccionar un avatar (puedes personalizarla según tus necesidades)
function seleccionarAvatar(avatarSrc) {
  // Realiza acciones cuando se selecciona un avatar (por ejemplo, actualizar una imagen de perfil)
  console.log(`Avatar seleccionado: ${avatarSrc}`);
}

// Botón para guardar la selección del avatar
const guardarButton = document.getElementById('guardarButton');
guardarButton.addEventListener('click', () => {
  // Ejecuta la función para seleccionar el avatar
  seleccionarAvatar(avatarSrc);
  // Cierra la ventana modal
  closeModal();
});









