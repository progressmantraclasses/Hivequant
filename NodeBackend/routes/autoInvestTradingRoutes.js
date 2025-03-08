const express = require("express");
const { autoTradeHive, stopAutoTrading } = require("../controllers/autoInvestTradingController");
const router = express.Router();

// Trade frequency options
const validFrequencies = ["Every Second", "5 minutes", "10 minutes", "15 minutes", "20 minutes", "25 minutes", "30 minutes"];

router.post("/trade", async (req, res) => {
    try {
        const { user, asset, frequency } = req.body;

        // Validate asset type
        const validAssets = ["HIVE", "HBD", "HP"];
        if (!asset || !validAssets.includes(asset.toUpperCase())) {
            return res.status(400).json({ 
                success: false, 
                error: "Invalid or missing asset type. Choose HIVE, HBD, or HP." 
            });
        }

        // Validate frequency
        if (!validFrequencies.includes(frequency)) {
            return res.status(400).json({ 
                success: false, 
                error: `Invalid frequency. Choose from: ${validFrequencies.join(", ")}.` 
            });
        }

        // Start auto-trading
        const decision = await autoTradeHive(user, frequency);
        
        return res.json({ success: true, asset: asset.toUpperCase(), ...decision });
    } catch (error) {
        console.error(`🚨 Error processing ${req.body.asset} trade:`, error);
        return res.status(500).json({ 
            success: false, 
            error: "Internal server error while processing trade." 
        });
    }
});

// Stop Auto-Trading
router.post("/stop", (req, res) => {
    try {
        stopAutoTrading();
        return res.json({ success: true, message: "Auto-trading stopped successfully." });
    } catch (error) {
        console.error(`🚨 Error stopping auto-trading:`, error);
        return res.status(500).json({ 
            success: false, 
            error: "Internal server error while stopping auto-trading." 
        });
    }
});

module.exports = router;
