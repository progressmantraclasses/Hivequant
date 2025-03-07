const express = require("express");
const router = express.Router();
const hiveController = require("../controllers/dashboardController");

// ✅ Fetch Hive balance
router.get("/balance", hiveController.getBalance);

// ✅ Fetch Hive transactions
router.get("/transactions", hiveController.getTransactions);

// ✅ Fetch auto-invest settings
router.get("/auto-invest", hiveController.getAutoInvestSettings);

// ✅ Toggle auto-invest settings (Use PUT instead of POST)
router.put("/auto-invest/toggle", hiveController.toggleAutoInvest);

// ✅ Stake for premium membership (POST is fine)
router.post("/stake-premium", hiveController.stakeForPremium);

// ✅ Check user subscription status
router.get("/subscription-status", hiveController.checkSubscriptionStatus);

module.exports = router;
