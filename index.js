// Semana 06 -> Entry point (va a requerir los módulos iniciales)

// Requerir la clase express
const express = require('express');
// Requerir handlebars
const { engine } = require('express-handlebars');
// Lo que está en el archivo de rutas.js es lo que se pide aquí, en semana 06 se quita para poner las de la carpeta
const rutas = require('./rutas');
const rutasM = require('./src/rutas');
// Path
const path = require('path');

// Pedir funciones
const app = express();
// Llamar a handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
// Puerto con el que se va a conectar
const port = 3001;

// 
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Ahora se va a hacer a través del router
app.use('', rutasM);

// Se exportó desde una función
rutas(app);

// Va por las tortillas y avisa cuando ya llegó
app.listen(port, function() {
    console.log('La app está corriendo en el puerto: ' + port);
});
