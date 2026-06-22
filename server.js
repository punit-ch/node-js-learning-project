require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const expenseRoutes = require("./routes/expenseRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/expenses", expenseRoutes);
app.use("/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("API Running");
});

// Start Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});