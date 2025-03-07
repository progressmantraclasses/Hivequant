const axios = require("axios");
const MINIMUM_STAKE_REQUIRED = 10; // Premium requires 10 HIVE staked
const HIVE_API_URL = "https://api.hive.blog";
const BINANCE_API_URL = "https://api.binance.com/api/v3/ticker/price?symbol=HIVEUSDT";

// Fetch user staked tokens from Hive blockchain
async function getUserStakedTokens(username) {
    try {
        const response = await axios.post(HIVE_API_URL, {
            jsonrpc: "2.0",
            method: "condenser_api.get_account",
            params: [username],
            id: 1,
        });
        
        const stakedTokens = parseFloat(response.data.result.vesting_shares);
        return stakedTokens;
    } catch (error) {
        console.error("Error fetching staked tokens:", error);
        return 0;
    }
}

// Check if user has premium subscription
async function checkSubscription(username) {
    const stakedTokens = await getUserStakedTokens(username);
    return stakedTokens >= MINIMUM_STAKE_REQUIRED;
}

// Fetch real-time Hive price from Binance
async function getHivePrice() {
    try {
        const response = await axios.get(BINANCE_API_URL);
        return parseFloat(response.data.price);
    } catch (error) {
        console.error("Error fetching Hive price:", error);
        return null;
    }
}

// Execute Buy/Sell trade (Placeholder - Replace with actual trading API integration)
async function executeHiveTrade(action, amount) {
    try {
        console.log(`${action} ${amount} HIVE executed.`);
        return { success: true, action, amount };
    } catch (error) {
        console.error("Error executing trade:", error);
        return { success: false, error: error.message };
    }
}

// Auto-investment handler based on subscription
async function updateAutoInvest(username, profit) {
    const isPremium = await checkSubscription(username);
    const frequencies = isPremium ? [1, 5, 10, 15] : [20, 25, 30];
    const investFrequency = frequencies[Math.floor(Math.random() * frequencies.length)];
    const autoInvestAmount = profit * 0.5;
    
    console.log(`Auto-investing ${autoInvestAmount} HIVE every ${investFrequency} minutes.`);
    return { success: true, autoInvestAmount, investFrequency };
}

module.exports = { getUserStakedTokens, checkSubscription, getHivePrice, executeHiveTrade, updateAutoInvest };