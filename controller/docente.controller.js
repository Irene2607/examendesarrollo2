const Docente = require('../models/docente')

const createDocente = async (req,res)=>{

    const {cedula, nombre, apellido, telefono, correo} = req.body

    const newDocente = new Docente({cedula, nombre, apellido, telefono, correo});

    const DocenteSaved = await newDocente.save();
    
    res.status(200).json(DocenteSaved)
}
const getDocente = async (req,res)=>{
   const docente = await Docente.find();
   res.json(docente);
}
module.exports = {
    getDocente,createDocente
    
}