var express = require('express');
var router = express.Router();
const regions = require("../models/regions")


router.post('/region',
  regions.predictFertility
)

router.get("/country-data", 
  regions.getCountryData
)

module.exports = router;
