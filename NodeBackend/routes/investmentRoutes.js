const express = require("express");
const {
    getAutoInvestSettings,
    toggleAutoInvest,
    stakeForPremium,
    checkSubscriptionStatus
} = require("../controllers/investmentController");

const router = express.Router();

router.get("/autoinvest-settings", getAutoInvestSettings);
router.post("/toggle-autoinvest", toggleAutoInvest);
router.post("/stake-premium", stakeForPremium);
router.get("/check-subscription", checkSubscriptionStatus);

module.exports = router;
