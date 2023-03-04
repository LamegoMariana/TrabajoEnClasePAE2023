// Semana 06
const express = require('express');
const router = express.Router();

// Semana 07
const controlador = require('../controladores/tareas'); // Requerir controlador

// Insertar/crear
router.post('/crear', controlador.crear);

// Listado completo
router.get('/', controlador.verTodas);

// Listado específico
router.get('/:id', controlador.verUna);

// Editar/Actualizar
router.put('/actualizar/:id', controlador.editar);

// Eliminar

module.exports = router; // Es un middleware