// Semana 07
    // El controlador no sabe de dónde vienen los datos, el modelo si sabe
const tarea = {
    buscar: (filtros) => {
        const tareas = [
            {titulo: 'Tarea 1', status: 'Nueva'},
            {titulo: 'Tarea 2', status: 'Nueva'},
            {titulo: 'Tarea 3', status: 'En progreso'},
            {titulo: 'Tarea 4', status: 'En progreso'},
            {titulo: 'Tarea 5', status: 'Terminada'},
            {titulo: 'Tarea 6', status: 'Terminada'}
        ]

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(tareas)
            }, 1000);
        })
    }
}

module.exports = tarea;