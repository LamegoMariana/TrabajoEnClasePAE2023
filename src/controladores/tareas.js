//Semana 07
const { response } = require('express');
const modelo = require('./../modelos/tarea'); // Requerir modelo

// Objeto
const controlador = {

    // Crear
    crear: (req,res) => {
        console.log(req.body);
        res.send('Tarea creada');
    },
    
    // Editar (eliminar)
    editar: (req,res) => {
        res.send('Tarea actualizada correctamente');
    },
    // Ver todas
    verTodas: (req,res)=> {
        // Se consideran los dos posibles escenarios que da la promesa
        modelo.find({/*inserte filtro aquí*/})
        .then(response => {
            console.log('Respuesta: ', response);
            //res.response(response); Así es normal, pero como tenemos el handlebars...}
            res.render('tareas', { tareas: response });
        })
        .catch(error => {
            res.status(400).send('Oops, algo salío mal');
        });
        
    },
    // Ver una
    verUna: (req,res) => {
        const id = req.params.id;
        res.send('Detalles de la tarea ' + id);
    }

}

// Exportar
module.exports = controlador;
