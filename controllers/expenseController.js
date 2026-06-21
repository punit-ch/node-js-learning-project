const Expense = require("../models/Expense");

const getExpenses = async (req, res) => {

    const expenses = await Expense.find();

    res.json(expenses);

};

module.exports = {
    getExpenses
};