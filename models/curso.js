const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cursoSchema = new Schema({
    codigo: String,
    nombre: String,
    cedula_docente: String,
},{
    timestamps: true,
    versionKey:false
});

const model = mongoose.model('Curso',cursoSchema);
module.exports = model