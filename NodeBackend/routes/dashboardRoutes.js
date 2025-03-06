const express = require("express");
const {
    getBalance,
    getTransactions,
    getAutoInvestSettings,
    toggleAutoInvest,
    stakeForPremium,
    checkSubscriptionStatus
} = require("../controllers/dashboardController");

const router = express.Router();

router.get("/balance", getBalance);
router.get("/transactions", getTransactions);
router.get("/autoinvest-settings", getAutoInvestSettings);
router.post("/toggle-autoinvest", toggleAutoInvest);
router.post("/stake-premium", stakeForPremium);
router.get("/check-subscription", checkSubscriptionStatus);

module.exports = router;
