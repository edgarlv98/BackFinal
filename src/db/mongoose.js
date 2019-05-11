const mongoose = require('mongoose')
const connectionUrl = 'mongodb+srv://Admin:soccer1998@cluster0-ltic7.mongodb.net/ProyectoFinal?retryWrites=true'

//Coneccion a la base de datos
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
}, function(error){
    if(error){
        console.log('No se pudo conectar')
    } else {
        console.log('Base de datos conectada')
    }
})

module.exports = mongoose