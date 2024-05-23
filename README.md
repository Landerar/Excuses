# Generador de Excusas

Este proyecto es un generador de excusas que utiliza diferentes modelos y funciones para crear, leer, actualizar y eliminar excusas. También incluye funcionalidades para gestionar usuarios, como registro y login.

## Estructura del Proyecto

### Modelos

- **excuseModel**: Modelo para las excusas.
- **userModel**: Modelo para los usuarios.

### Funciones

#### Excusas

- **generate**: Genera una excusa aleatoria combinando diferentes partes (introducción, sujeto, verbo, objeto, justificación).
- **getAll**: Obtiene todas las excusas.
- **getById**: Obtiene una excusa por su ID.
- **getByProperty**: Obtiene excusas basadas en una propiedad específica.
- **create**: Crea una nueva excusa.
- **verify**: Marca una excusa como verificada.
- **update**: Actualiza una excusa por su ID.
- **remove**: Elimina una excusa por su ID.

#### Usuarios

- **getAll**: Obtiene todos los usuarios.
- **getById**: Obtiene un usuario por su ID.
- **getByProperty**: Obtiene usuarios basados en una propiedad específica.
- **login**: Autentica a un usuario y devuelve un token JWT.
- **register**: Registra un nuevo usuario.
- **create**: Crea un nuevo usuario.
- **update**: Actualiza un usuario por su ID.
- **remove**: Elimina un usuario por su ID.

## Implementación

### Generar Excusas

La función `generate` combina diferentes partes de una excusa (introducción, sujeto, verbo, objeto, justificación) obtenidas desde la base de datos para crear una excusa completa.

### Gestión de Excusas

Las funciones para gestionar excusas permiten obtener todas las excusas, obtener una excusa por su ID, obtener excusas por una propiedad específica, crear una nueva excusa, marcar una excusa como verificada, actualizar una excusa y eliminar una excusa.

### Gestión de Usuarios

Las funciones para gestionar usuarios permiten obtener todos los usuarios, obtener un usuario por su ID, obtener usuarios por una propiedad específica, autenticar a un usuario y devolver un token JWT, registrar un nuevo usuario, crear un nuevo usuario, actualizar un usuario y eliminar un usuario.

## Exportación de Funciones

Las funciones relacionadas con las excusas y los usuarios se exportan para ser utilizadas en otras partes de la aplicación.

## Instalación y Uso

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Configura las variables de entorno en un archivo `.env`.
4. Ejecuta el servidor con `npm start`.

## Dependencias

- **bcryptjs**: Para el hash de contraseñas.
- **jsonwebtoken**: Para la generación de tokens JWT.
- **mongoose**: Para la gestión de la base de datos MongoDB.
- **dotenv**: Para la lectura de variables de entorno.
- **express**: Para la creación del servidor.
- **nodemon**: Para la detección de cambios en el servidor.
- **jest**: Para la prueba automatizada.


## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o un pull request para mejorar este proyecto.
