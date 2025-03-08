const axios = require("axios");

async function fetchHiveTokensPrices() {
    try {
        const url = "https://api.coingecko.com/api/v3/simple/price";
        const params = {
            ids: "hive,hive_dollar",
            vs_currencies: "usd"
        };

        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching Hive token prices:", error);
        throw new Error("Failed to fetch Hive token prices");
    }
}

module.exports = { fetchHiveTokensPrices };
