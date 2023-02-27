// Semana 06
const express = require('express');
const router = express.Router();

//Semana 07
const controlador = require('../controladores/usuarios'); // Requerir controlador

// Crear
router.post('',  controlador.crear);
// Editar (eliminar)
router.put('/:id', controlador.editar);
// Ver todas
router.get('', controlador.verTodas);
// Ver una
router.get('/:id', controlador.verUna);

module.exports = router; // Es un middleware