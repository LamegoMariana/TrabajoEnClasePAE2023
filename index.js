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
// Mongoose
const mongoose = require('mongoose');

// Pedir funciones
const app = express();
// Para hacerla variable de entorno hay que requerir el archivo para la conexión con MongoDB
require('dotenv').config();
// Cadena de conexión con Mongo (no se debe poner la URL en código porque va a cambiar, se usa .env)
// Los archivos que inician con punto están ocultos
// No se debe subir a repo, pero se puede subir una de ejemplo (de estructura/variables de entorno que se deben usar)
const MongoURL = process.env.MONGO_URL;
// Llamar a handlebars
app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoProperties: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './src/views');
// Puerto con el que se va a conectar
const port = 3001; // Cuando se despliegue en Heroku o similar dará la variable, hay que poner: process.env.PORT || 3000

// Conexión con views
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Ahora se va a hacer a través del router
app.use('', rutasM);

// Se exportó desde una función
rutas(app);

// Conexión con mongoose (base de datos)
mongoose.connect(MongoURL).then(() => {
    console.log('Conexión correcta con la BD c:');
    // Va por las tortillas y avisa cuando ya llegó
    app.listen(port, function() {
        console.log('La app está corriendo en el puerto: ' + port);
    });
}).catch(err => {
    console.log('No se pudo conectar a la BD :c', err);
});

