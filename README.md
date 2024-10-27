# Todo API con WebSockets

Esta es una API de gestión de tareas (To-Do) implementada con Node.js, Express, MongoDB y Socket.IO. La API permite crear, leer, actualizar y eliminar tareas, así como gestionar usuarios y establecer una comunicación en tiempo real con WebSockets.

## Requisitos Previos

- **Node.js** (v14 o superior)
- **MongoDB** (debe estar en funcionamiento)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd todo-api
   ```

## Ejecución de la API

Para iniciar la API, usa el siguiente comando:

   ```bash
   npm start
   ```

La API estará corriendo en ```http://localhost:3000```.

## Rutas de la API

### **1. Usuarios**
- **Registrar Usuario**
  - **Endpoint** ```POST /api/users/register```
  - **Body**
  
    ```json
    {
     "name": "Juan Perez",
     "email": "juan@example.com",
     "password": "tu_contraseña"
    }
    ```
    
- **Iniciar Sesión**
  - **Endpoint** ```POST /api/users/login```
  - **Body**
  
    ```json
    {
     "email": "juan@example.com",
     "password": "tu_contraseña"
    }
    ```

### **2. Tareas**
- **Crear Tarea**
  - **Endpoint** ```POST /api/tasks```
  - **Headers**
    - ```Authorization: Bearer <TOKEN_JWT>```
   - **Body** 

       ```json
       {
        "title": "Nueva Tarea",
        "completed": false
       }
       ```

- **Obtener Tareas**
  - **Endpoint** ```GET /api/tasks```
  - **Headers**
    - ```Authorization: Bearer <TOKEN_JWT>```

- **Actualizar Tarea**
  - **Endpoint** ```PUT /api/tasks/:id```
  - **Headers**
    - ```Authorization: Bearer <TOKEN_JWT>```
   - **Body**

       ```json
       {
        "title": "Tarea Actualizada",
        "completed": true
       }
       ```

- **Eliminar Tarea**
  - **Endpoint** ```DELETE /api/tasks/:id```
  - **Headers**
    - ```Authorization: Bearer <TOKEN_JWT>```

## Prueba de WebSockets

Para probar la funcionalidad de WebSockets:

1. Abre el archivo ```index.html``` en tu navegador.
2. Escribe un mensaje en el campo de entrada y haz clic en "Enviar".
3. Deberías ver que el mensaje aparece en todas las pestañas o ventanas abiertas, lo que confirma que la comunicación en tiempo real está funcionando correctamente.

## Pruebas

Puedes utilizar herramientas como **Postman** para probar la API. Asegúrate de enviar los encabezados de autorización correctamente con el token JWT al hacer solicitudes a las rutas de tareas.


### Personalización
Recuerda reemplazar ```<URL_DEL_REPOSITORIO>``` con la URL real de tu repositorio si es necesario.
