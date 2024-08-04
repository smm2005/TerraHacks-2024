var express = require('express');
var router = express.Router();
const regions = require("../models/regions")


router.post('/region',
  regions.predictFertility
)

router.get("/rainfall", 
  regions.getRainfall
)

router.get("/temperature", 
  regions.getTemperature
)

router.get("/soil", 
  regions.getSoil
)


router.get("/country-data", 
  regions.getCountryData
)

router.post("/hugging-face", 
  regions.huggingFaceResponse
)

module.exports = router;
