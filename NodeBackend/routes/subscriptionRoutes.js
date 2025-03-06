const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscriptionController");

// Routes for subscription management
router.post("/subscribe", subscriptionController.stakeHiveTokens);
router.get("/subscription-status", subscriptionController.checkSubscriptionStatus);

module.exports = router;