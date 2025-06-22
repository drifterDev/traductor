export function existeUsuario(username, email) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return usuarios.some(usuario => usuario.username == username || usuario.email == email);
}

export function crearUsuario(usuario) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

export function login(username, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find(usuario => usuario.username == username && usuario.password == password);
    localStorage.setItem('loggeded', JSON.stringify(usuario));
}

export function obtenerUsuarioLoggeado() {   
    if (localStorage.getItem('loggeded') == null) {
        return false;
    } else {
        return JSON.parse(localStorage.getItem('loggeded'));
    }
}

export function obtenerPalabras(){
    const palabras = JSON.parse(localStorage.getItem('palabras') || '[]');
    return palabras;
}

export function crearPalabra(palabra) {
    const palabras = JSON.parse(localStorage.getItem('palabras') || '[]');
    palabra.id = palabras.length + 1;
    palabras.push(palabra);
    localStorage.setItem('palabras', JSON.stringify(palabras));
}

export function obtenerPalabra(id) {
    const palabras = JSON.parse(localStorage.getItem('palabras') || '[]');
    return palabras.find(palabra => palabra.id == id);
}

export function actualizarPalabra(id, palabra) {
    const palabras = JSON.parse(localStorage.getItem('palabras') || '[]');
    const index = palabras.findIndex(palabra => palabra.id == id);
    palabras[index] = palabra;
}

export function eliminarPalabra(id) {
    const palabras = JSON.parse(localStorage.getItem('palabras') || '[]');
    const index = palabras.findIndex(palabra => palabra.id == id);
    palabras.splice(index, 1);
    localStorage.setItem('palabras', JSON.stringify(palabras));
}