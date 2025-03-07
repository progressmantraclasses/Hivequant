    const hiveService = require("../services/hiveService");

    exports.getAutoInvestSettings = async (req, res) => {
        try {
            const settings = await hiveService.fetchAutoInvestSettings();
            res.json({ success: true, settings });
        } catch (error) {
            res.status(500).json({ success: false, error: "Failed to fetch settings." });
        }
    };

    exports.updateAutoInvestSettings = async (req, res) => {
        try {
            const { enable, frequency } = req.body;
            const updatedSettings = await hiveService.updateAutoInvest(enable, frequency);
            res.json({ success: true, updatedSettings });
        } catch (error) {
            res.status(500).json({ success: false, error: "Failed to update settings." });
        }
    };

    exports.stakeHive = async (req, res) => {
        try {
            const { user } = req.body;
            const result = await hiveService.stakeHiveTokens(user);
            res.json({ success: true, result });
        } catch (error) {
            res.status(500).json({ success: false, error: "Failed to stake HIVE." });
        }
    };

    exports.getHiveTokenPrices = async (req, res) => {
        try {
            const prices = await hiveService.getHiveTokenPrices();
            res.json({ success: true, prices });
        } catch (error) {
            res.status(500).json({ success: false, error: "Failed to retrieve token prices." });
        }
    };
