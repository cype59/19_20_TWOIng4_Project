var express = require('express');
var router = express.Router();
var measure = require('../controllers/measure.controller');

/* GET users listing. */
router.get('/', measure.findAll);
router.get('/getAvg', measure.findAvg);
router.get('/type/:type', measure.findType);
router.get('/date/:creationDate', measure.findCreation);
//router.get('/sensorID/:sensorID', measure.findSensorID);

module.exports = router;
