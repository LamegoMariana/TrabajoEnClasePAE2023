module.exports = {
    swaggerDefinition: {
        swagger:"2.0",
        info: {
            "title": "API Semana 08",
            "description": "API para probar el funcionamiento de Swagger",
            "version": "1.0.0",
            "servers": ["http://localhost:3001"] //Este podría leerse desde el .env
            /* Habría que poner  hasta arriba un const port = process.env.PORT || 3001; y concatenarlo como sigue
                "servers": ["http://localhost:" + port]
            */
        }
    },
    apis: ["src/rutas/*.js"]
}