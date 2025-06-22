import { isLoggedIn, obtenerUsuarioLoggeado } from './funciones.js';

// Espera a que el DOM esté completamente cargado antes de renderizar
document.addEventListener('DOMContentLoaded', () => {
  if(!isLoggedIn()) {
    window.location.href = 'login.html';
  } else {
    renderPerfil();
  }
});

/**
 * Toma los datos del objeto `usuario` y los inyecta
 * en los elementos del perfil en la página.
 */
function renderPerfil() {
  const usuario = obtenerUsuarioLoggeado();
  document.getElementById('perfil-nombre').textContent = usuario.nombre;
  document.getElementById('perfil-usuario').textContent = usuario.username;
  document.getElementById('perfil-email').textContent = usuario.email;
  document.getElementById('perfil-rol').textContent = usuario.rol;
}
