import {
  diccionarioDatos,     // Array de objetos { termino, definicion }
  traduccionEspAho,     // Mapa: español → idioma “Aho”
  traduccionAhoEsp      // Mapa: idioma “Aho” → español
} from './data.js';
import { isLoggedIn, isAdmin, obtenerUsuarioLoggeado } from './funciones.js';

// Espera a que el DOM se cargue antes de renderizar el listado
document.addEventListener('DOMContentLoaded', () => {
  if(!isLoggedIn()) {
    window.location.href = 'login.html';
  } else {
    renderDiccionario();
  }
});

export function renderDiccionario() {
  const lista = document.getElementById('lista-diccionario');
  lista.innerHTML = '';  // Limpiamos cualquier contenido previo

  const admin = isAdmin();

  // Recorremos cada entrada del diccionario
  diccionarioDatos.forEach((entry, index) => {
    const { termino, definicion } = entry;
    const traduccion = traduccionEspAho[termino] || '?';

    // Si es admin, preparamos los botones; si no, omitimos la sección
    const actionsHtml = admin
      ? `
      <div class="actions">
        <button class="btn edit-btn" title="Editar">
          <img src="icons/edit_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Editar">
        </button>
        <button class="btn delete-btn" data-index="${index}" title="Eliminar">
          <img src="icons/cancel_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Eliminar">
        </button>
      </div>`
      : '';

    // Creamos el elemento fila con término, definición y (posibles) acciones
    const item = document.createElement('div');
    item.className = 'diccionario-item';
    item.innerHTML = `
      <div class="term">${termino} → ${traduccion}</div>
      <div class="desc">${definicion}</div>
      ${actionsHtml}
    `;
    lista.appendChild(item);
  });

  // Si es admin, enlazamos el listener de eliminación a cada botón
  if (admin) {
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.index);
        const termino = diccionarioDatos[idx].termino;
        const traduccion = traduccionEspAho[termino];

        if (!confirm(`¿Eliminar "${termino}", su significado y su traducción?`)) {
          return;
        }

        // 1) Borramos la entrada del array
        diccionarioDatos.splice(idx, 1);

        // 2) Borramos las claves de traducción en ambos mapas
        delete traduccionEspAho[termino];
        if (traduccion in traduccionAhoEsp) {
          delete traduccionAhoEsp[traduccion];
        }

        // 3) Re-renderizamos para actualizar la vista
        renderDiccionario();
      });
    });
  }
}