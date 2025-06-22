import { usuario } from './data.js';
import { existeUsuario, crearUsuario, isLoggedIn } from './funciones.js';

const registroForm = document.getElementById('registroForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');

if (isLoggedIn()) {
    window.location.href = 'index.html';
}

if (!existeUsuario(usuario.username, usuario.email)) {
    crearUsuario(usuario);
}

// QUITAR
console.log(JSON.parse(localStorage.getItem('usuarios')));

registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const email = emailInput.value;
    const name = nameInput.value;
    const rol = 'Usuario';

    if (password !== confirmPassword) {
        showErrorMessage('Las contraseñas no coinciden');
        return;
    }

    if (existeUsuario(username, email)) {
        showErrorMessage('El usuario o el correo electrónico ya existen');
        return;
    }

    const nuevoUsuario = {
        username,
        password,
        email,
        name,
        rol
    };

    crearUsuario(nuevoUsuario);
    limpiarFormulario();
    showSuccessMessage('Usuario creado correctamente');
});

function limpiarFormulario() {
    usernameInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    emailInput.value = '';
    nameInput.value = '';
}

function limpiarErrores() {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    const existingSuccess = document.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }
}   

function showErrorMessage(message) {
    limpiarErrores();
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;

    const formActions = document.querySelector('.form-actions');
    formActions.parentNode.insertBefore(errorDiv, formActions);
}

function showSuccessMessage(message) {
    limpiarErrores();
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;

    const formActions = document.querySelector('.form-actions');
    formActions.parentNode.insertBefore(successDiv, formActions);
}