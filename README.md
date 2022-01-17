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

Edite el archivo package.json añadiendo la propiedad "homepage":"url-dominio", url-dominio se refiere al dominio en el cual va a ser desplegada la aplicación.

Si su aplicación va a ser desplegada en una sub carpeta:

1.- Agregue en el archivo DashboardRoutes la propiedad basename='/nombre de sub carpeta' del siguiente modo: <Router basename='/pasoapaso'>

2.- Agregue o edite el archivo .htaccess con los siguientes scripts:
   Options -MultiViews
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.html [QSA,L]


En el archivo url.js cambie el string de la constante url por la url del dominio en el cual va a realizar el despliegue de su aplicación incluyendo las subcarpetas de ser el caso.

Puede realizar el despliegue en un servidor Apache subiendo la carpeta `build` a su directorio.

