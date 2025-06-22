import { usuario } from './data.js';

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

// QUITAR 
console.log(JSON.parse(localStorage.getItem('usuarios') || '[]'));  

function existeUsuario(username, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return usuarios.some(usuario => usuario.username == username && usuario.password == password);
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!existeUsuario(usuario.username, usuario.password)) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log(usuario.username, usuario.password);
    console.log(username, password);
    console.log(existeUsuario(username, password));
    if (existeUsuario(username, password)) {
        localStorage.setItem('loggeded', JSON.stringify(usuario));
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
