const Curso = require('../models/curso')

const createCurso = async (req,res)=>{

    const {codigo, nombre, cedula_docente} = req.body

    const newCurso = new Curso({codigo, nombre, cedula_docente});

    const CursoSaved = await newCurso.save();
    
    res.status(200).json(CursoSaved)
}
const getCurso = async (req,res)=>{
   const curso = await Curso.find();
   res.json(curso);
}
module.exports = {
    createCurso,getCurso
    
}