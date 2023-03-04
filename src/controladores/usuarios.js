//Semana 07
const modelo = require('./../modelos/tarea'); // Requerir modelo

// Objeto
const controlador = {

    // Crear
    crear: (req,res) => {
        res.send('Usuaria creada');
    },
    
    // Editar (eliminar)
    editar: (req,res) => {
        res.send('Usuaria actualizada correctamente');
    },
    // Ver todas
    verTodas: (req,res)=> {     
        res.send('Lista de usuarios');
    },
    // Ver una
    verUna: (req,res) => {
        const id = req.params.id;
        res.send('Detalles de la usuaria ' + id);
    }

}

// Exportar
module.exports = controlador;
