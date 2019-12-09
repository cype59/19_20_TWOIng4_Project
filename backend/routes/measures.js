var express = require('express');
var router = express.Router();
var measure = require('../controllers/measure.controller');

/* GET users listing. */
router.get('/', measure.findAll);
router.get('/type/:type', measure.findType);
router.get('/date/:creationDate', measure.findCreation);

module.exports = router;
