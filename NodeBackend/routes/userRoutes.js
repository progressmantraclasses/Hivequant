const express = require("express");
const { checkSubscriptionStatus } = require("../controllers/userController");
const authenticateUser = require("../middlewares/authMiddleware");

const router = express.Router();

// 🔹 Check if the user has an active premium subscription (Based on Hive Staked Tokens)
router.get("/subscription-status", authenticateUser, checkSubscriptionStatus);

module.exports = router;
