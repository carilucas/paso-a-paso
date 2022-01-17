# ¿Cómo levantar la aplicación en local?

Instalar Node 
Instalar React
Instalar Create React App

Cambiar al directorio en el que se ha descargado la aplicación
Correr el comando npm i para instalar las dependencias y módulos de Node

## Scripts disponibles

En la carpeta del proyecto puede correr los comandos:

### `npm start`

Levanta la app en modo de prueba.\
Abra [http://localhost:3000](http://localhost:3000) Para visualizar en su navegador.

La página se recargarrá cuando haga cambios.\
También verá cualquier error lint en consola.

### `npm test`

Lanza el modo de pruebas.\
Mire la sección [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye el proyecto para modo de producción en la carpeta `build` .\
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.\
¡Su aplicación está lista para ser implementada!

Si requiere mayor información visite [deployment](https://facebook.github.io/create-react-app/docs/deployment)


### Despliegue

En el archivo url.js cambie el string de la constante url por la url del dominio en el cual va a realizar el despliegue de su aplicación.

Puede realizar el despliegue en un servidor Apache subiendo la carpeta `build` a su directorio.

