// Navegación entre secciones
document.querySelectorAll('#sidebar li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('#sidebar li').forEach(li => li.classList.remove('active'));
    item.classList.add('active');
    // Mostrar sección correspondiente
    const sectionId = item.getAttribute('data-section');
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  });
});

// Renderizado de datos
document.addEventListener('DOMContentLoaded', () => {
  renderPerfil();
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

function renderPerfil() {
  document.getElementById('perfil-nombre').textContent = usuario.nombre;
  document.getElementById('perfil-usuario').textContent = usuario.usuario;
  document.getElementById('perfil-email').textContent = usuario.email;
  document.getElementById('perfil-rol').textContent = usuario.rol;
}
