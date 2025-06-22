const diccionarioDatos = [
{ termino: 'hola',      definicion: 'saludo informal' , traduccion: 'aloh', id: 1},
{ termino: 'mundo',     definicion: 'tierra, planeta' , traduccion: 'odnum', id: 2},
{ termino: 'amor',      definicion: 'sentimiento de afecto profundo' , traduccion: 'omra', id: 3},
{ termino: 'paz',       definicion: 'ausencia de conflicto o tranquilidad' , traduccion: 'zap', id: 4},
{ termino: 'sol',       definicion: 'estrella luminosa alrededor de la Tierra' , traduccion: 'los', id: 5},
{ termino: 'luna',      definicion: 'satélite natural de la Tierra' , traduccion: 'anul', id: 6},
{ termino: 'agua',      definicion: 'líquido vital, transparente, incoloro e inodoro' , traduccion: 'auga', id: 7},
{ termino: 'fuego',     definicion: 'combustión que produce calor y luz' , traduccion: 'goefu', id: 8},
{ termino: 'tierra',    definicion: 'planeta en que vivimos o suelo' , traduccion: 'arriet', id: 9},
{ termino: 'viento',    definicion: 'movimiento de aire en la atmósfera' , traduccion: 'ovent', id: 10},
{ termino: 'casa',      definicion: 'lugar de residencia o edificación para vivir' , traduccion: 'asac', id: 11},
{ termino: 'escuela',   definicion: 'institución educativa para la enseñanza' , traduccion: 'aleus', id: 12},
{ termino: 'libro',     definicion: 'conjunto de hojas impresas encuadernadas' , traduccion: 'orbil', id: 13},
{ termino: 'amigo',     definicion: 'persona con la que se mantiene una relación de afecto y confianza' , traduccion: 'ogima', id: 14},
{ termino: 'comida',    definicion: 'alimento o conjunto de alimentos consumidos en una comida' , traduccion: 'adimoc', id: 15},
{ termino: 'trabajo',   definicion: 'actividad realizada a cambio de una remuneración' , traduccion: 'ojbart', id: 16},
{ termino: 'tiempo',    definicion: 'duración en la que suceden los acontecimientos' , traduccion: 'opmet', id: 17},
{ termino: 'noche',     definicion: 'parte del día en que no hay luz solar' , traduccion: 'ehcon', id: 18},
{ termino: 'día',       definicion: 'periodo de 24 horas o tiempo con luz solar' , traduccion: 'aid', id: 19},
{ termino: 'estrella',  definicion: 'cuerpo celeste visible por su propia luz' , traduccion: 'allettsre', id: 20}
];

export function cargarDiccionario() {
    for (const palabra of diccionarioDatos) {
        crearPalabra(palabra);
    }
}
  
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

export function isAdmin() {
    return obtenerUsuarioLoggeado().rol === 'Administrador';
}

export function logout() {
    localStorage.removeItem('loggeded');
}

export function isLoggedIn() {
    return localStorage.getItem('loggeded') !== null;
}

export function obtenerUsuarioLoggeado() {   
    if (localStorage.getItem('loggeded') == null) {
        return null;
    } else {
        return JSON.parse(localStorage.getItem('loggeded'));
    }
}

export function obtenerPalabras(){
    const palabras = JSON.parse(localStorage.getItem('palabras') || '[]');
    return palabras;
}

export function crearPalabra(palabra) {
    if (existePalabraEspanol(palabra.termino) || existePalabraAho(palabra.traduccion)){
        return;
    }
    if(palabra?.id && obtenerPalabra(palabra.id)){
        return;
    }
    const palabras = obtenerPalabras();
    palabra.id = palabras.length > 0 ? palabras[palabras.length - 1].id + 1 : 1;
    palabras.push(palabra);
    localStorage.setItem('palabras', JSON.stringify(palabras));
}

export function existePalabraEspanol(termino) {
    const palabras = obtenerPalabras();
    return palabras.some(palabra => palabra.termino == termino);
}

export function existePalabraAho(termino) {
    const palabras = obtenerPalabras();
    return palabras.some(palabra => palabra.traduccion == termino);
}

export function obtenerPalabraEspanol(termino) {
    const palabras = obtenerPalabras();
    return palabras.find(palabra => palabra.termino == termino);
}

export function obtenerPalabraAho(termino) {
    const palabras = obtenerPalabras();
    return palabras.find(palabra => palabra.traduccion == termino);
}

export function obtenerPalabra(id) {
    const palabras = obtenerPalabras();
    return palabras.find(palabra => palabra.id == id);
}

export function actualizarPalabra(id, palabra) {
    const palabras = obtenerPalabras();
    const index = palabras.findIndex(p => p.id == id);
    if (index !== -1) {
        palabras[index] = palabra;
        localStorage.setItem('palabras', JSON.stringify(palabras));
    }
}

export function eliminarPalabra(id) {
    const palabras = obtenerPalabras();
    const index = palabras.findIndex(palabra => palabra.id == id);
    palabras.splice(index, 1);
    localStorage.setItem('palabras', JSON.stringify(palabras));
}