// Renderizado de datos
document.addEventListener('DOMContentLoaded', () => {
  renderDiccionario();
});

function renderDiccionario() {
  const lista = document.getElementById('lista-diccionario');
  lista.innerHTML = '';
  diccionarioDatos.forEach(d => {
    const item = document.createElement('div');
    item.className = 'diccionario-item';
    item.innerHTML = `
      <div class="term">${d.termino}</div>
      <div class="desc">${d.definicion}</div>
      <div class="actions">
        <button class="btn edit-btn" title="Editar">
          <img src="icons/edit_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Editar" />
        </button>
        <button class="btn delete-btn" title="Eliminar">
          <img src="icons/cancel_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Eliminar" />
        </button>
      </div>
    `;
    lista.appendChild(item);
  });
}
