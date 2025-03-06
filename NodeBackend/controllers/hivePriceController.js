const { fetchHiveTokensPrices } = require("../services/hivePriceService");

exports.getHiveTokensPrices = async (req, res) => {
    try {
        const tokens = await fetchHiveTokensPrices();
        res.json({ success: true, tokens });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
