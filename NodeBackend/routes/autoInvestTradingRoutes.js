const express = require("express");
const { makeTradingDecision } = require("../controllers/autoInvestTradingController");
const router = express.Router();

router.post("/trade", async (req, res) => {
    const { user } = req.body;
    const decision = await makeTradingDecision(user);
    res.json(decision);
});

module.exports = router;