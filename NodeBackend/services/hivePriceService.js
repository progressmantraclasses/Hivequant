const axios = require("axios");

async function fetchHiveTokensPrices() {
    try {
        const url = "https://api.coingecko.com/api/v3/coins/markets";
        const params = {
            vs_currency: "usd",
            ids: "hive,hive_dollar,leo-token,decentralized-ecosystem,swap-hive,dlux",
            order: "market_cap_desc",
            per_page: 100,
            page: 1,
            sparkline: false
        };

        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching Hive token prices:", error);
        throw new Error("Failed to fetch Hive token prices");
    }
}

module.exports = { fetchHiveTokensPrices };
