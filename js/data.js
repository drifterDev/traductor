/*
Este archivo define el único usuario administrador predefinido del sistema.
Las credenciales aquí establecidas permiten el acceso a funcionalidades exclusivas del rol administrador,
como editar y eliminar palabras del diccionario. Cualquier otro usuario registrado
a través de la interfaz tendrá el rol de "Usuario" y acceso limitado.
*/

export const usuario = {
  name: 'Diomedes Díaz Maestre',
  username: 'ElCacique',
  email: 'elcacique@gmail.com',
  rol: 'Administrador',
  password: '123456'
};