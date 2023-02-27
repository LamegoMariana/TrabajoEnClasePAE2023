const router = require('express').Router();

const rutasTareas = require('./tareas');
const rutasUsuarios = require('./usuarios');

// El middleware se usará en todas, así que se pone aquí v:
const auth = require('../middlewares').auth;

router.use('', auth);

router.use('/tareas', rutasTareas);
router.use('/usuarios', rutasUsuarios);

module.exports = router;