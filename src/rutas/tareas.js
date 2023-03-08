// Semana 06
const express = require('express');
const router = express.Router();

// Semana 07
const controlador = require('../controladores/tareas'); // Requerir controlador

/**
 * @swagger
 * /tareas:
 *  post:
 *   description: Para insertar o crear una nueva tarea.
 *   parameters:
 *     - in: body
 *       name: titulo
 *       description: el titulo de la tarea
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: lista de tareas del usuario (todo bien)
 */

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