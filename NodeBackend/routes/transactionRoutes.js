const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

// Route for fetching user transactions
router.get("/:username", transactionController.fetchUserTransactions);

module.exports = router;