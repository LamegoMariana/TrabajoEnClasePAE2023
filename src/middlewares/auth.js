// Función de "guardia"
function middleware(req, res, next) {
    const token = req.query.token;
    if(token === '123') {
        // Agrega un dato al request y lo manda a la siguiente etapa
        req.nombreU = 'Lamego';
        console.log('Permiso concedido');
        next();
    } else {
        res.status(401).send('No autenticado')
    }
}

module.exports = middleware;