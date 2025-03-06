const express = require("express");
const router = express.Router();
const investmentController = require("../controllers/investmentController");

// Routes for Auto-Invest functionality
router.get("/auto-invest/settings", investmentController.getAutoInvestSettings);
router.post("/auto-invest/toggle", investmentController.toggleAutoInvest);

module.exports = router;