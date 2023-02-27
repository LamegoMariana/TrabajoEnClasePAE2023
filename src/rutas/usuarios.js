// Semana 06
const express = require('express');
const router = express.Router();

// Crear
router.post('', function(req,res) {
    res.send('Usuaria creada');
});
// Editar (eliminar)
router.put('/:id', function(req,res) {
    res.send('Usuaria actualizada correctamente');
});
// Ver todas
router.get('', function(req,res) {
    res.send('Lista de usuarios');
})
// Ver una
router.get('/:id', function(req,res) {
    const id = req.params.id;
    res.send('Detalles de la usuaria ' + id);
});
module.exports = router; // Es un middleware