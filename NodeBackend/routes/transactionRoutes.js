const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

// Route for fetching user transactions
router.get("/transactions/:username", transactionController.fetchUserTransactions);

module.exports = router;