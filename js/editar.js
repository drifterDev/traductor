import { obtenerPalabra, obtenerPalabras, actualizarPalabra, isLoggedIn, existePalabraEspanol, existePalabraAho } from './funciones.js';

if (!isLoggedIn()) {
    window.location.href = 'login.html';
}

const urlParams = new URLSearchParams(window.location.search);
const palabraId = urlParams.get('idx');

if (!palabraId) {
    window.location.href = 'index.html';
}

const palabra = obtenerPalabra(palabraId);
if (!palabra) {
    window.location.href = 'index.html';
}

document.getElementById('palabraId').value = palabraId;
document.getElementById('termino').value = palabra.termino || '';
document.getElementById('definicion').value = palabra.definicion || '';
document.getElementById('traduccion').value = palabra.traduccion || '';

const editarForm = document.getElementById('editarForm');

editarForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const termino = document.getElementById('termino').value.trim();
    const definicion = document.getElementById('definicion').value.trim();
    const traduccion = document.getElementById('traduccion').value.trim();

    let palabraExiste = false;
    const palabras = obtenerPalabras();
    palabras.forEach(p => {
        if (p.termino === termino && p.id != palabra.id) {
            palabraExiste = true;
        }
        if (p.traduccion === traduccion && p.id != palabra.id) {
            palabraExiste = true;
        }
    });

    if (palabraExiste) {
        showErrorMessage('La palabra ya existe');
        return;
    }

    if (!termino || !definicion || !traduccion) {
        showErrorMessage('Por favor completa todos los campos');
        return;
    }

    const palabraActualizada = {
        ...palabra,
        termino: termino,
        definicion: definicion,
        traduccion: traduccion
    };

    actualizarPalabra(palabraId, palabraActualizada);
    showSuccessMessage('Palabra actualizada exitosamente. Redirigiendo...');
    
    setTimeout(() => {
        window.location.href = 'diccionario.html';
    }, 1500);
});

function eliminarMensaje() {
    const existingError = document.querySelector('.error-message');
    const existingSuccess = document.querySelector('.success-message');
    
    if (existingError) existingError.remove();
    if (existingSuccess) existingSuccess.remove();
}

function showErrorMessage(message) {
    eliminarMensaje();
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;

    const formActions = document.querySelector('.form-actions');
    formActions.parentNode.insertBefore(errorDiv, formActions);
}

function showSuccessMessage(message) {
    eliminarMensaje();
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;

    const formActions = document.querySelector('.form-actions');
    formActions.parentNode.insertBefore(successDiv, formActions);
} 