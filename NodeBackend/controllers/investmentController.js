const { fetchAutoInvestSettings, updateAutoInvest, stakeHiveTokens, checkSubscription } = require("../services/hiveService");

exports.getAutoInvestSettings = async (req, res) => {
    try {
        const settings = await fetchAutoInvestSettings();
        res.json({ success: true, settings });
    } catch (error) {
        console.error("Auto-Invest Fetch Error:", error);
        res.status(500).json({ success: false, error: "Failed to fetch auto-invest settings" });
    }
};

exports.toggleAutoInvest = async (req, res) => {
    try {
        const { enable, frequency, user } = req.body;

        if (["continuous", "5 min", "10 min", "15 min"].includes(frequency)) {
            const isPremium = await checkSubscription(user);
            if (!isPremium) {
                return res.status(403).json({ success: false, error: "Premium subscription requires at least 10 HIVE tokens." });
            }
        }

        const updatedSettings = await updateAutoInvest(enable, frequency);
        res.json({ success: true, updatedSettings });
    } catch (error) {
        console.error("Auto-Invest Toggle Error:", error);
        res.status(500).json({ success: false, error: "Failed to update auto-invest settings" });
    }
};


exports.autoInvest = async () => {
    try {
        console.log("Running Auto-Invest Logic...");
    } catch (error) {
        console.error("Auto-Invest Error:", error);
    }
};
