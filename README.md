# Front-end de la prueba para Factoría 5

Para este proyecto se ha usado la version de Angular 13.2.2.

## Para probar la aplicación, ejecutar los siguientes comandos en una máquina con Git, Node y Angular instalado:

```console
git clone https://github.com/nachosdt/f5-front
```

```console
cd f5-front
```

```console
npm install
```

```console
ng serve
```

Y a continuación abrir un navegador en la URL http://localhost:4200

El back-end (Node.js) está desplegado en Heroku, por lo que no es necesario descargarlo. El código se puede consultar [aquí](https://github.com/nachosdt/f5-back).

## Proceso de desarrollo

Aunque la aplicación es bastante simple, he intentado organizarla en una estructura ordenada, distribuyendo los componentes y las funcionalidades en
las carpetas /components, /pages, /models y /services.

Siempre intento que el código sea limpio y "se comente sólo", dando a las variables y a las funciones los nombres más aclarativos posible.

En el back-end he seguido los mismos principios, distribuyendo el código en las carpetas /controllers, /models y /routes. El servidor está alojado en Heroku y la base de datos en AWS.
