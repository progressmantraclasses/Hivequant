const {
    fetchHiveBalance,
    fetchTransactions,
    fetchAutoInvestSettings,
    updateAutoInvest,
    stakeHiveTokens,
    checkSubscription
} = require("../services/hiveService");

exports.getBalance = async (req, res) => {
    try {
        const balance = await fetchHiveBalance();
        res.json({ success: true, balance });
    } catch (error) {
        console.error("Balance Fetch Error:", error);
        res.status(500).json({ success: false, error: "Failed to fetch balance" });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await fetchTransactions();
        res.json({ success: true, transactions });
    } catch (error) {
        console.error("Transaction Fetch Error:", error);
        res.status(500).json({ success: false, error: "Failed to fetch transactions" });
    }
};

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
        const { enable, frequency } = req.body; // e.g., "5 min", "10 min", "continuous"
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
