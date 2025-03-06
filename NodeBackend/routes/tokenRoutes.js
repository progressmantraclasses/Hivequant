const express = require("express");
const router = express.Router();
const tokenController = require("../controllers/tokenController");

// Routes for Hive token management
router.get("/auto-invest/settings", tokenController.getAutoInvestSettings);
router.post("/auto-invest/update", tokenController.updateAutoInvestSettings);
router.post("/stake", tokenController.stakeHive);
router.get("/prices", tokenController.getHiveTokenPrices);

module.exports = router;