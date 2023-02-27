// Semana 06
const express = require('express');
const router = express.Router();

// Crear
router.post('', express.json(), function(req,res) {
    console.log(req.body);
    res.send('Tarea creada');
});
// Editar (eliminar)
router.put('/:id', function(req,res) {
    res.send('Tarea actualizada correctamente');
});
// Ver todas
router.get('', function(req,res) {
    //res.send('Lista de tareas');
    const tareas = [
        {titulo: 'Tarea 1', status: 'Nueva'},
        {titulo: 'Tarea 2', status: 'Nueva'},
        {titulo: 'Tarea 3', status: 'En progreso'},
        {titulo: 'Tarea 4', status: 'En progreso'},
        {titulo: 'Tarea 5', status: 'Terminada'},
        {titulo: 'Tarea 6', status: 'Terminada'}
    ]
    res.render('tareas', {
        tareas
    });
})
// Ver una
router.get('/:id', function(req,res) {
    const id = req.params.id;
    res.send('Detalles de la tarea ' + id);
});
module.exports = router; // Es un middleware