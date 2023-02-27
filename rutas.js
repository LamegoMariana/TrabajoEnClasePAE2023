// Librería path para concatenar directorios
const path = require('path');
// Requerir express
const express = require('express');
// S06 - exportar función
const {auth} = require('./src/middlewares');

// El primer parámetro que recibe es el parámetro de petición y el segundo es el de respuesta
function cargarHome(req,res) {
    //const paginado = req.query.paginado === 'false' ? false : true;
        console.log('El API funciona');
        //res.send('API funcionando para ' + req.nombreU);
        // Abre el html de la carpeta views, si no tuvieramos la librería path habría que poner un __dirname + '[dirección]'
        //res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
        res.render('home', {
            nombre: 'Terrícola Mugroso'
        });
}


// Rutas - recibe la app y ejecuta todas las subfunciones en una misma función.
module.exports = function(app) {
    // Middleware para ingresar a la carpeta de assets y que busque archivos ahí
    app.use('/assets', express.static(path.join(__dirname, 'assets')));
    // Definir endpoint, recibe por lo menos la ruta y la función a la que manda a llamar 
        // (Se ejecuta cuando el usuario abre la página)
        // Se está usando un "guardia" para asegurar la condición que el guardia pide.
    app.get('/', auth, cargarHome);
    // Lee los parámetros del query y lee el dato que se ingreso al request en el guardia
    /*
    app.get('/usuarios', middleware, function(req, res) {
        console.log(req.query);
        res.send('Lista de usuarios para ' + req.nombreU);
    })
    */
    // En caso de que el usuario la cajetee hay que darle alguna respuesta
        // Se usa un wildcard/comodín (*) porque no podemos saber la ruta que el usuario pondrá
        // Va al final para que solo entren aquí si no hubieron coincidencias previas
    app.get('*', function(req, res) {
        res.status(404).send('Página no encontrada');
    });
}

