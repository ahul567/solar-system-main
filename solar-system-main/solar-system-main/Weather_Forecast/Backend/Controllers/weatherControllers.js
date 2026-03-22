const Weather = require("../models/Weather");
const dummyData = require("../data/WeatherData");
exports.insertWeatherData = async (req, res) => {
    try {
        await Weather.deleteMany({});
        await Weather.insertMany(dummyData);

        res.json({
            message: "Dummy data inserted successfully",
            count: dummyData.length
        });
    } catch (error) {
        console.error("Insert error:", error.message);
        res.status(500).json({ error: error.message });
    }
};

exports.getWeatherdata = async (req, res) => {
    try {
        const data = await Weather.find();
        if (data.length === 0) {
            console.warn("No weather data found. Visit /api/insert to seed data.");
        }
        res.json({
            data: data,
            count: data.length
        });
    } catch (err) {
        console.error("Fetch error:", err.message);
        res.status(500).json({ error: err.message });
    }
};