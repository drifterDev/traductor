import { isLoggedIn, isAdmin,obtenerPalabra, obtenerPalabras, eliminarPalabra, actualizarPalabra} from './funciones.js';

// Espera a que el DOM se cargue antes de renderizar el listado
document.addEventListener('DOMContentLoaded', () => {
  if(!isLoggedIn()) {
    window.location.href = 'login.html';
  } else {
    renderDiccionario();
  }
});

// Se obtiene el modal para mostrar errores y el contenedor del mensaje de error
const alertError = document.querySelector(".container-modal");
const contError = document.getElementById("msg-error");

function renderDiccionario() {
  const palabras = obtenerPalabras();
  const lista = document.getElementById('lista-diccionario');
  lista.innerHTML = '';  // Limpiamos cualquier contenido previo

  const admin = isAdmin();

  // Recorremos cada entrada del diccionario
  palabras.forEach((palabra) => {
    const { termino, definicion, traduccion } = palabra;

    // Si es admin, preparamos los botones; si no, omitimos la sección
    const actionsHtml = admin
      ? `
      <div class="actions">
        <button class="btn edit-btn" title="Editar" data-index="${palabra.id}">
          <img src="icons/edit_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Editar">
        </button>
        <button class="btn delete-btn" data-index="${palabra.id}" title="Eliminar">
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
      btn.addEventListener('click', async () => {
        
        const idx = Number(btn.dataset.index);
        const termino = obtenerPalabra(idx).termino;
        const traduccion = obtenerPalabra(idx).traduccion;

        let texto = `¿Eliminar <strong>${termino}</strong>, su significado y su traducción?`;

        const ans = await mostrarConfirmacion(texto);

        if (!ans) {
          return;
        }

        eliminarPalabra(idx);

        renderDiccionario();
      });
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.index);
        window.location.href = `editar.html?idx=${idx}`;
      });
    });
  }
}


const btnCerrarModal = document.querySelector(".btn-cerrar");
const btnAceptarModal = document.querySelector(".btn-aceptar");

function mostrarConfirmacion(texto) {
  return new Promise((res) => {
    contError.innerHTML = texto;
    alertError.style.display = "flex";

    // eliminar
    btnAceptarModal.onclick = () => {
      alertError.style.display = "none";
      res(true);
    };
    
    // mantener
    btnCerrarModal.onclick = () => {
      alertError.style.display = "none";
      res(false);
    };
  });
}

const addWordBtn = document.getElementById('add-word-btn');
addWordBtn.addEventListener('click', () => {
  window.location.href = 'crear.html';
});