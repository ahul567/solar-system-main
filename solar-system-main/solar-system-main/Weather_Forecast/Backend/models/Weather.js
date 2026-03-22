const mongoose = require("mongoose");
const WeatherSchema = new mongoose.Schema({
    date: String,
    temperature: Number,
    windSpeed:Number,
    windDirection:Number
});
module.exports=mongoose.model("Weather",WeatherSchema);