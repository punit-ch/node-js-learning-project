const express = require("express");

const router = express.Router();

const {
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense
} = require("../controllers/expenseController");

const authMiddleware =
require("../middleware/authMiddleware");

router.get(
    "/",
    authMiddleware,
    getExpenses
);

router.post(
    "/",
    authMiddleware,
    createExpense
);
router.put(
    "/:id",
    authMiddleware,
    updateExpense
);
router.delete(
    "/:id",
    authMiddleware,
    deleteExpense
);
module.exports = router;