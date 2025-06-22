/*
Este archivo maneja la lógica para el inicio de sesión del usuario.
Verifica si el usuario ya ha iniciado sesión; si es así, lo redirige a la página de diccionario.
Crea un usuario administrador predefinido si no existe, y gestiona el formulario de inicio de sesión.
Valida las credenciales ingresadas y muestra mensajes de error o éxito.
Al completar correctamente el formulario, inicia sesión usando `login` y redirige al usuario al diccionario.
*/

import { existeUsuario, crearUsuario, login, isLoggedIn, cargarDiccionario } from './funciones.js';
import { usuario } from './data.js';

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

if (isLoggedIn()) {
    window.location.href = 'index.html';
}

if (!existeUsuario(usuario.username, usuario.email)) {
    crearUsuario(usuario);
}

// QUITAR
console.log(JSON.parse(localStorage.getItem('usuarios')));

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (existeUsuario(username, password)) {
        cargarDiccionario();
        login(username, password);
        window.location.href = 'index.html';
    } else {
        showErrorMessage('Usuario o contraseña incorrectos');
    }
});

function showErrorMessage(message) {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;

    const formActions = document.querySelector('.form-actions');
    formActions.parentNode.insertBefore(errorDiv, formActions);
}
