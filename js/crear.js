import { crearPalabra, isLoggedIn, existePalabraEspanol, existePalabraAho } from './funciones.js';

if (!isLoggedIn()) {
    window.location.href = 'login.html';
}

const crearForm = document.getElementById('crearForm');
    
crearForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const termino = document.getElementById('termino').value.trim();
    const definicion = document.getElementById('definicion').value.trim();
    const traduccion = document.getElementById('traduccion').value.trim();

    if (existePalabraEspanol(termino) || existePalabraAho(traduccion)) {
        showErrorMessage('La palabra ya existe');
        return;
    }   

    if (!termino || !definicion || !traduccion) {
        showErrorMessage('Por favor completa todos los campos');
        return;
    }

    const nuevaPalabra = {
        termino: termino,
        definicion: definicion,
        traduccion: traduccion
    };

    crearPalabra(nuevaPalabra);
    showSuccessMessage('Palabra creada exitosamente. Redirigiendo...');
    crearForm.reset();
    
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