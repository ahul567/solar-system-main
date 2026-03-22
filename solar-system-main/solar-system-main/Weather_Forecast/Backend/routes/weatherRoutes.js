const express = require("express");
const router = express.Router();

const {insertWeatherData,getWeatherdata} = require("../Controllers/weatherControllers");
router.get("/insert",insertWeatherData)
router.get("/weather", getWeatherdata);

module.exports = router;