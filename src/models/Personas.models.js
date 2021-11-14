const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VacunadoSchema = new Schema({
    nombres: { type: String, required: [true, 'Nombre obligatorio'] },
    apellidos: String,
    cedula: String,
    fechaNacimiento: String,
    ciudad: String,
    correo: String,
    telefono: Number,
    eps: String,
    estadoVacuna: String,
    dosisAplicadas: String,
    direccion: String,
    ciudadNombre: String,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

// Convertir a modelo

module.exports = mongoose.model('vacunados', VacunadoSchema)
