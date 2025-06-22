import {
  diccionarioDatos,     // Array de objetos { termino, definicion }
  traduccionEspAho,     // Mapa: español → idioma “Aho”
  traduccionAhoEsp      // Mapa: idioma “Aho” → español
} from './data.js';
import { isLoggedIn } from './funciones.js';

// Espera a que el DOM se cargue antes de renderizar el listado
document.addEventListener('DOMContentLoaded', () => {
  if(!isLoggedIn()) {
    window.location.href = 'login.html';
  } else {
    renderDiccionario();
  }
});

export function renderDiccionario() {
  // Obtenemos el contenedor donde inyectar las filas
  const lista = document.getElementById('lista-diccionario');
  lista.innerHTML = '';  // Limpiamos el contenido previo

  // Recorremos cada entrada del diccionario
  diccionarioDatos.forEach((entry, index) => {
    const { termino, definicion } = entry;
    const traduccion = traduccionEspAho[termino];  // Buscamos su traducción

    // Creamos el elemento de fila y definimos su estructura interna
    const item = document.createElement('div');
    item.className = 'diccionario-item';
    item.innerHTML = `
      <!-- Término en Español con su traducción -->
      <div class="term">${termino} → ${traduccion}</div>
      <!-- Descripción/definición del término -->
      <div class="desc">${definicion}</div>
      <!-- Botones de acción -->
      <div class="actions">
        <button class="btn edit-btn" title="Editar">
          <img src="icons/edit_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Editar">
        </button>
        <button class="btn delete-btn" data-index="${index}" title="Eliminar">
          <img src="icons/cancel_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Eliminar">
        </button>
      </div>
    `;
    lista.appendChild(item);
  });

  // Asignamos el listener de eliminación a cada botón
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index);
      const termino = diccionarioDatos[idx].termino;
      const traduccion = traduccionEspAho[termino];

      // Confirmación antes de borrar
      if (!confirm(`¿Eliminar "${termino}", su significado y su traducción?`)) {
        return;
      }

      // 1) Quitamos la entrada del array principal
      diccionarioDatos.splice(idx, 1);

      // 2) Eliminamos la clave de traducción en ambos mapas
      delete traduccionEspAho[termino];
      if (traduccion in traduccionAhoEsp) {
        delete traduccionAhoEsp[traduccion];
      }

      // 3) Volvemos a renderizar para actualizar la vista
      renderDiccionario();
    });
  });
}
