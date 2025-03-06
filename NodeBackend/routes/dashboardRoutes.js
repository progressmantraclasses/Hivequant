const express = require("express");
const router = express.Router();
const hiveController = require("../controllers/dashboardController");

// Define routes for Hive-related operations
router.get("/balance", hiveController.getBalance);
router.get("/transactions", hiveController.getTransactions);
router.get("/auto-invest", hiveController.getAutoInvestSettings);
router.post("/auto-invest/toggle", hiveController.toggleAutoInvest);
router.post("/stake-premium", hiveController.stakeForPremium);
router.get("/subscription-status", hiveController.checkSubscriptionStatus);

module.exports = router;