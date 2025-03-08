const express = require("express");
const { makeTradingDecision } = require("../controllers/autoInvestTradingController");
const router = express.Router();

router.post("/trade", async (req, res) => {
    try {
        const { user, asset } = req.body;

        // Validate asset type
        const validAssets = ["HIVE", "HBD", "HP"];
        if (!asset || !validAssets.includes(asset.toUpperCase())) {
            return res.status(400).json({ 
                success: false, 
                error: "Invalid or missing asset type. Choose HIVE, HBD, or HP." 
            });
        }

        // Execute trading decision
        const decision = await makeTradingDecision(user, asset.toUpperCase());

        return res.json({ success: true, asset: asset.toUpperCase(), ...decision });
    } catch (error) {
        console.error(`🚨 Error processing ${req.body.asset} trade:`, error);
        return res.status(500).json({ 
            success: false, 
            error: "Internal server error while processing trade." 
        });
    }
});

module.exports = router;
