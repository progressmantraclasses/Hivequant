const hiveService = require("../services/hiveService");

exports.fetchUserTransactions = async (req, res) => {
    try {
        const { username } = req.params;
        const transactions = await hiveService.getUserTransactions(username);
        res.json({ success: true, transactions });
    } catch (error) {
        res.status(500).json({ success: false, error: "Failed to retrieve transactions." });
    }
};
