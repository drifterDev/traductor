import { usuario } from './data.js';

// Espera a que el DOM esté completamente cargado antes de renderizar
document.addEventListener('DOMContentLoaded', () => {
  renderPerfil();
});

/**
 * Toma los datos del objeto `usuario` y los inyecta
 * en los elementos del perfil en la página.
 */
function renderPerfil() {
  document.getElementById('perfil-nombre').textContent = usuario.nombre;
  document.getElementById('perfil-usuario').textContent = usuario.usuario;
  document.getElementById('perfil-email').textContent = usuario.email;
  document.getElementById('perfil-rol').textContent = usuario.rol;
}
