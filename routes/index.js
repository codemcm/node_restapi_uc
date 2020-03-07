var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//PERSONA
const persona = require("../models/persona");
router.get("/v1/personas", persona.getPersonas);
router.get("/v1/personas/:personaId", persona.getPersona);
router.post("/v1/personas/", persona.insertarPersona);
router.put("/v1/personas/", persona.editarPersona);
router.delete("/v1/personas/:personaId", persona.eliminarPersona)
module.exports = router;
