const hiveService = require("../services/hiveService");

const handleRequest = async (serviceFunction, req, res) => {
    try {
        const data = await serviceFunction(req);
        res.json({ success: true, data });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, error: "Operation failed" });
    }
};

exports.getBalance = (req, res) => handleRequest(hiveService.fetchHiveBalance, req, res);
exports.getTransactions = (req, res) => handleRequest(hiveService.fetchTransactions, req, res);
exports.getAutoInvestSettings = (req, res) => handleRequest(hiveService.fetchAutoInvestSettings, req, res);
exports.toggleAutoInvest = (req, res) => handleRequest(hiveService.updateAutoInvest, req, res);
exports.stakeForPremium = (req, res) => handleRequest(hiveService.stakeHiveTokens, req, res);
exports.checkSubscriptionStatus = (req, res) => handleRequest(hiveService.checkSubscription, req, res);
