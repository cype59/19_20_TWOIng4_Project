var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', user.findAll);
router.get('/houseSize/:houseSize',user.findHouseSize);

router.get("/getCountry", user.findCountry);


module.exports = router;
