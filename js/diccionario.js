// Renderizado de datos
document.addEventListener('DOMContentLoaded', () => {
  renderDiccionario();
});

function renderDiccionario() {
  const lista = document.getElementById('lista-diccionario');
  diccionarioDatos.forEach(d => {
    const item = document.createElement('div');
    item.className = 'diccionario-item';
    item.innerHTML = `<div class="term">${d.termino}</div><div class="desc">${d.definicion}</div>`;
    lista.appendChild(item);
  });
}