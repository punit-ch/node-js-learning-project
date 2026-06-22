const Expense = require("../models/Expense");

const getExpenses = async (req, res) => {

    try {

        const expenses = await Expense.find({
            user: req.user.userId
        });

        res.json(expenses);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const createExpense = async (req, res) => {

    try {

        const expense = await Expense.create({
            title: req.body.title,
            amount: req.body.amount,
            user: req.user.userId
        });

        res.status(201).json(expense);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const updateExpense = async (req, res) => {

    try {

        const expense = await Expense.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.userId
            },
            {
                title: req.body.title,
                amount: req.body.amount
            },
            {
                new: true
            }
        );

        if (!expense) {

            return res.status(404).json({
                message: "Expense not found"
            });

        }

        res.json(expense);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const deleteExpense = async (req, res) => {

    try {

        const expense = await Expense.findOneAndDelete({
            _id: req.params.id,
            user: req.user.userId
        });

        if (!expense) {

            return res.status(404).json({
                message: "Expense not found"
            });

        }

        res.json({
            message: "Expense deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense
};