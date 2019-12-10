var express = require('express');
var router = express.Router();
var sensor = require('../controllers/sensor.controller');

/* GET users listing. */
router.get('/', sensor.findAll);
router.get('/location/:location',sensor.findSensorType);
router.get('/location/a',sensor.findSensorUserID);


module.exports = router;