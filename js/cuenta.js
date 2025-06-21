import { usuario } from './data.js';

// Renderizado de datos
document.addEventListener('DOMContentLoaded', () => {
  renderPerfil();
});

function renderPerfil() {
  document.getElementById('perfil-nombre').textContent = usuario.nombre;
  document.getElementById('perfil-usuario').textContent = usuario.usuario;
  document.getElementById('perfil-email').textContent = usuario.email;
  document.getElementById('perfil-rol').textContent = usuario.rol;
}
