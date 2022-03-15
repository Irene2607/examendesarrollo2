const mongoose = require('mongoose')
const Schema = mongoose.Schema

const docenteSchema = new Schema({
    cedula: String,
    nombre: String,
    apellido: String,
    telefono: String,
    correo: String
},{
    timestamps: true,
    versionKey:false
});

const model = mongoose.model('Docente',docenteSchema);
module.exports = model