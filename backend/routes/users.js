var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', user.findAll);
router.get('/small',user.findHouseSmall);
router.get('/medium',user.findHouseMedium);
router.get('/big',user.findHouseBig);

module.exports = router;
