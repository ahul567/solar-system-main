const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");
const connectDB = require("./config/db");
const app = express();
app.use(cors());
app.use(express.json());

connectDB().catch(err => {
    console.error("Database connection failed:", err.message);
});

app.use("/api", weatherRoutes);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
    console.log("Seed data: http://localhost:5000/api/insert");
});