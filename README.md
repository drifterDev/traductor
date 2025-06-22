# Traductor Español - Aho-coracick

Una aplicación web para traducir palabras entre español y el idioma Aho-coracick, con sistema de autenticación y gestión de diccionario.

## 🌟 Características

### 🔐 Sistema de Autenticación
- **Registro de usuarios**: Crear cuentas con nombre, usuario, email y contraseña
- **Inicio de sesión**: Autenticación segura con validación de credenciales
- **Gestión de sesiones**: Control de acceso a funcionalidades protegidas
- **Roles de usuario**: Diferenciación entre usuarios normales y administradores

### 📚 Traducción
- **Traducción bidireccional**: Español ↔ Aho-coracick
- **Interfaz intuitiva**: Campos de texto con intercambio de idiomas
- **Definiciones automáticas**: Muestra definiciones de palabras en tiempo real
- **Validación de palabras**: Alerta cuando una palabra no existe en el diccionario

### 📖 Gestión de Diccionario
- **Visualización**: Lista completa de palabras con términos y definiciones
- **Crear palabras**: Formulario para agregar nuevas palabras (solo administradores)
- **Editar palabras**: Modificar términos existentes (solo administradores)
- **Eliminar palabras**: Remover palabras del diccionario (solo administradores)

### 🎨 Interfaz de Usuario
- **Diseño responsivo**: Funciona en dispositivos móviles y de escritorio
- **Tema oscuro**: Interfaz moderna con colores oscuros
- **Navegación intuitiva**: Barra lateral con acceso a todas las funciones
- **Mensajes de feedback**: Notificaciones de éxito y error

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor - funciona completamente en el cliente

### Instalación
1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo para usar!

### Primeros Pasos
1. **Crear cuenta**: Ve a la página de registro y crea tu cuenta
2. **Iniciar sesión**: Accede con tus credenciales
3. **Traducir**: Usa la página principal para traducir palabras
4. **Explorar diccionario**: Revisa todas las palabras disponibles

## 📁 Estructura del Proyecto

```
traductor/
├── index.html              # Página principal de traducción
├── login.html              # Página de inicio de sesión
├── registro.html           # Página de registro
├── cuenta.html             # Perfil de usuario
├── diccionario.html        # Gestión del diccionario
├── crear.html              # Crear nuevas palabras
├── editar.html             # Editar palabras existentes
├── css/
│   ├── stylesTranslate.css # Estilos principales
│   ├── stylesNavbar.css    # Estilos de navegación
│   ├── stylesContent.css   # Estilos de contenido
│   ├── stylesLogin.css     # Estilos de autenticación
│   └── stylesCrear.css     # Estilos de formularios
├── js/
│   ├── funciones.js        # Funciones principales
│   ├── data.js            # Datos del diccionario
│   ├── translate.js       # Lógica de traducción
│   ├── login.js           # Lógica de autenticación
│   ├── registro.js        # Lógica de registro
│   ├── cuenta.js          # Lógica de perfil
│   ├── diccionario.js     # Lógica del diccionario
│   ├── crear.js           # Lógica de crear palabras
│   └── editar.js          # Lógica de editar palabras
└── icons/                 # Iconos SVG
```

## 👥 Usuarios y Permisos

### Usuario Normal
- ✅ Traducir palabras
- ✅ Ver diccionario
- ✅ Acceder a perfil
- ❌ Crear/editar/eliminar palabras

### Administrador
- ✅ Todas las funciones de usuario normal
- ✅ Crear nuevas palabras
- ✅ Editar palabras existentes
- ✅ Eliminar palabras

## 🔧 Funcionalidades Técnicas

### Almacenamiento
- **localStorage**: Todos los datos se almacenan localmente en el navegador
- **Persistencia**: Los datos se mantienen entre sesiones
- **Estructura JSON**: Datos organizados en formato JSON

### Validaciones
- **Formularios**: Validación completa de todos los campos
- **Duplicados**: Prevención de palabras duplicadas
- **Autenticación**: Verificación de credenciales
- **Permisos**: Control de acceso basado en roles

### Interfaz
- **Responsive Design**: Adaptable a diferentes tamaños de pantalla
- **CSS Grid/Flexbox**: Layout moderno y flexible
- **Variables CSS**: Sistema de colores consistente
- **Transiciones**: Animaciones suaves para mejor UX

## 📱 Compatibilidad

### Navegadores Soportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Dispositivos
- 📱 Móviles (Android/iOS)
- 📱 Tablets
- 💻 Computadoras de escritorio
- 💻 Laptops

## 🎯 Casos de Uso

### Para Estudiantes
- Aprender el idioma Aho-coracick
- Consultar definiciones de palabras
- Practicar traducciones

### Para Profesores
- Gestionar el diccionario
- Agregar nuevas palabras
- Mantener contenido actualizado

### Para Investigadores
- Documentar el idioma
- Crear recursos educativos
- Preservar la lengua

## 🔒 Seguridad

- **Autenticación local**: Credenciales almacenadas en localStorage
- **Validación de entrada**: Prevención de datos maliciosos
- **Control de acceso**: Verificación de permisos en cada función
- **Sanitización**: Limpieza de datos de entrada

## 🚧 Limitaciones

- **Almacenamiento local**: Los datos no se sincronizan entre dispositivos
- **Sin servidor**: No hay backup automático de datos
- **Navegador único**: Los datos están limitados a un navegador

## 🔮 Futuras Mejoras

- [ ] Sincronización en la nube
- [ ] Exportar/importar diccionario
- [ ] Búsqueda avanzada
- [ ] Historial de traducciones
- [ ] Ejercicios interactivos
- [ ] Audio de pronunciación
- [ ] Múltiples idiomas

## 📞 Soporte

Para reportar problemas o sugerir mejoras:
1. Revisa la documentación existente
2. Verifica que estés usando un navegador compatible
3. Limpia el localStorage si hay problemas de datos

## 📄 Licencia

Este proyecto es de uso educativo y cultural para la preservación del idioma Aho-coracick.

---

**Desarrollado con ❤️ para la comunidad Aho-coracick**
