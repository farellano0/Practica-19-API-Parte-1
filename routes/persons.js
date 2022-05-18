const express = require('express'); //Inyección de la dependencia
const router = express.Router(); //Instanciación del "router" al que asociaremos todas las rutas
const mongoose = require('mongoose') //"Inyección de la dependencia de mongoose"
let Person = require('../models/person') //Inyectamos la dependencia del modelo "person"

router.get('/persons', function (req, res, next) {
    Person.find(function (err, persons) {
        if(err) return next(err);
        res.json(persons)
    });
}); //Ruta /persons por el metodo GET

module.exports = router; //Exportación del ruteador
