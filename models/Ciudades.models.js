const mongoose = require('mongoose')
const { Schema } = mongoose

const CiudadSchema = new Schema({
    nombre: String,
    correo: String,
    contrasena: String,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }

})
// Convertir a modelo
module.exports = mongoose.model('ciudad', CiudadSchema)