var express = require('express');
var router = express.Router();
var measure = require('../controllers/measure.controller');

let Measure = require('../models/measure.model.js');


/* GET users listing. */
router.get('/', measure.findAll);
router.get('/type/:type', measure.findType);
router.get('/date/:creationDate', measure.findCreation);
//router.get('/sensorID/:sensorID', measure.findSensorID);

router.get("/getAvg", measure.findAvg);



module.exports = router;
