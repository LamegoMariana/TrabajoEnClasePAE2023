// Semana 07
    // El controlador no sabe de dónde vienen los datos, el modelo si sabe
const { Schema, model } = require('mongoose');

const tarea_schema = new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    status: {
        type: String,
        default: 'Nueva'}
});

module.exports = model('tareas', tarea_schema);