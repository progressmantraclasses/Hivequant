const {
    fetchAutoInvestSettings,
    updateAutoInvest,
    stakeHiveTokens,
    checkSubscription
} = require("../services/hiveService");

exports.getAutoInvestSettings = async (req, res) => {
    try {
        const settings = await fetchAutoInvestSettings();
        res.json({ success: true, settings });
    } catch (error) {
        console.error("Auto-Invest Settings Fetch Error:", error);
        res.status(500).json({ success: false, error: "Failed to fetch auto-invest settings" });
    }
};

exports.toggleAutoInvest = async (req, res) => {
    try {
        const { enable, frequency, user } = req.body; // "5 min", "10 min", "continuous"
        
        // Check if premium is required
        if (["continuous", "5 min", "10 min", "15 min"].includes(frequency)) {
            const isPremium = await checkSubscription(user);
            if (!isPremium) {
                return res.status(403).json({ success: false, error: "Premium subscription required" });
            }
        }

        const updatedSettings = await updateAutoInvest(enable, frequency);
        res.json({ success: true, updatedSettings });
    } catch (error) {
        console.error("Auto-Invest Toggle Error:", error);
        res.status(500).json({ success: false, error: "Failed to update auto-invest settings" });
    }
};

exports.stakeForPremium = async (req, res) => {
    try {
        const { user } = req.body; // Hive username
        const result = await stakeHiveTokens(user);
        res.json({ success: true, result });
    } catch (error) {
        console.error("Staking Error:", error);
        res.status(500).json({ success: false, error: "Failed to stake tokens for premium" });
    }
};

exports.checkSubscriptionStatus = async (req, res) => {
    try {
        const { user } = req.query; // Hive username
        const isPremium = await checkSubscription(user);
        res.json({ success: true, isPremium });
    } catch (error) {
        console.error("Subscription Check Error:", error);
        res.status(500).json({ success: false, error: "Failed to check subscription status" });
    }
};

// Auto-Invest Logic (Runs Every 20 Minutes)
exports.autoInvest = async (locals) => {
    try {
        console.log("Running Auto-Invest Logic...");
        // Here, fetch users who have auto-invest enabled and execute trades
    } catch (error) {
        console.error("Auto-Invest Error:", error);
    }
};
