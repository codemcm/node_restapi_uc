var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//PERSONA
const persona = require("../models/persona");
router.get("/v1/personas", persona.getPersona);

module.exports = router;
