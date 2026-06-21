require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const Expense = require("./models/Expense");
const expenseRoutes = require("./routes/expenseRoutes");
app.use("/expenses", expenseRoutes);
const app = express();

connectDB();

app.use(express.json());

app.post("/expenses", async (req, res) => {
    try {
        const expense = await Expense.create({
            title: req.body.title,
            amount: req.body.amount
        });

        res.status(201).json(expense);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
app.get("/expenses", async (req, res) => {
    try {

        const expenses = await Expense.find();

        res.json(expenses);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});