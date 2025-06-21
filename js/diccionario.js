import {
  diccionarioDatos,
  traduccionEspAho,
  traduccionAhoEsp
} from './data.js';

// Renderizado de datos
document.addEventListener('DOMContentLoaded', () => {
  renderDiccionario();
});

export function renderDiccionario() {
  const lista = document.getElementById('lista-diccionario');
  lista.innerHTML = '';

  diccionarioDatos.forEach((entry, index) => {
    const { termino, definicion } = entry;
    const traduccion = traduccionEspAho[termino];

    const item = document.createElement('div');
    item.className = 'diccionario-item';
    item.innerHTML = `
      <!-- Mostramos Español → Aho -->
      <div class="term">${termino} → ${traduccion}</div>
      <div class="desc">${definicion}</div>
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

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index);
      const termino = diccionarioDatos[idx].termino;
      const traduccion = traduccionEspAho[termino];

      if (!confirm(`¿Eliminar "${termino}", su signficiado y su traducción?`)) return;

      diccionarioDatos.splice(idx, 1);

      delete traduccionEspAho[termino];
      if (traduccion in traduccionAhoEsp) {
        delete traduccionAhoEsp[traduccion];
      }

      renderDiccionario();
    });
  });
}