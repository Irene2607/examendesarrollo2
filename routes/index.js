const express = require('express');
const router = express.Router()
const { createDocente, getDocente } = require('../controller/docente.controller')
const { createCurso, getCurso } = require('../controller/curso.controller')

router.get("/docentes",getDocente);

router.post("/docentes",createDocente);

router.get("/cursos",getCurso);

router.post("/cursos",createCurso);

module.exports = router;