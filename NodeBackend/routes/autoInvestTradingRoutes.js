const express = require("express");
const { makeTradingDecision } = require("../controllers/autoInvestTradingController");
const router = express.Router();

router.post("/trade", async (req, res) => {
    const { user, asset } = req.body; // Accept asset type (HIVE, HBD, HP)

    if (!asset || !["HIVE", "HBD", "HP"].includes(asset.toUpperCase())) {
        return res.status(400).json({ success: false, error: "Invalid or missing asset type. Choose HIVE, HBD, or HP." });
    }

    try {
        const decision = await makeTradingDecision(user, asset.toUpperCase());
        res.json({ success: true, asset: asset.toUpperCase(), ...decision });
    } catch (error) {
        console.error(`Error processing ${asset} trade:`, error);
        res.status(500).json({ success: false, error: `Internal server error while trading ${asset}.` });
    }
});

module.exports = router;
