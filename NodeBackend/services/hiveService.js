const axios = require("axios");

// 📌 Fetch user Hive balance (from Hive blockchain)
const fetchHiveBalance = async (req) => {
    const { username } = req.body;
    if (!username) throw new Error("Username is required");

    const response = await axios.post("https://api.hive.blog", {
        jsonrpc: "2.0",
        method: "condenser_api.get_accounts",
        params: [[username]],
        id: 1
    });

    if (!response.data || !response.data.result || response.data.result.length === 0) {
        throw new Error("User not found on Hive blockchain");
    }

    const account = response.data.result[0];

    return {
        balance: parseFloat(account.balance.split(" ")[0]), // HIVE balance
        staked: parseFloat(account.vesting_shares.split(" ")[0]) // Staked HIVE (VESTS)
    };
};

// 📌 Fetch transaction history (from Hive Keychain)
const fetchTransactions = async (req) => {
    const username = req.query.username;  // Extract from query params for GET request
    if (!username) throw new Error("Username is required");

    const response = await axios.post("https://api.hive.blog", {
        jsonrpc: "2.0",
        method: "account_history_api.get_account_history",
        params: { 
            account: username, 
            start: -1, 
            limit: 10, // Fetch latest 10 transactions
            operations_filter_low: 0, 
            operations_filter_high: 0
        },
        id: 1
    });

    // Check if result exists and is an array
    if (!response.data || !response.data.result || !Array.isArray(response.data.result.history)) {
        throw new Error("Could not fetch transactions");
    }

    return response.data.result.history.map((tx) => ({
        trx_id: tx[1]?.trx_id || "N/A",
        type: tx[1]?.op?.[0] || "Unknown",
        details: tx[1]?.op?.[1] || {},
        timestamp: tx[1]?.timestamp || "Unknown"
    }));
};


// 📌 Fetch auto-invest settings (stored locally in JSON or a simple DB)
const fetchAutoInvestSettings = async (req) => {
    // This should be fetched from your app’s database
    return { enabled: false, frequency: "None" };
};

// 📌 Toggle auto-invest (store in a local DB)
const updateAutoInvest = async (req) => {
    const { username, enabled, frequency } = req.body;
    if (!username || enabled === undefined || !frequency) throw new Error("Invalid request");

    // Store this in your database
    return { message: "Auto-invest settings updated", settings: { enabled, frequency } };
};

// 📌 Stake HIVE tokens using Hive Keychain (requires user signature)
const stakeHiveTokens = async (req) => {
    const { username, amount } = req.body;
    if (!username || !amount || amount <= 0) throw new Error("Invalid stake request");

    return {
        message: `Please approve the staking of ${amount} HIVE using Hive Keychain.`,
        success: true
    };
};

// 📌 Check subscription status (based on staked HIVE)
const checkSubscription = async (req) => {
    const { username } = req.body;
    if (!username) throw new Error("Username is required");

    const response = await axios.post("https://api.hive.blog", {
        jsonrpc: "2.0",
        method: "condenser_api.get_accounts",
        params: [[username]],
        id: 1
    });

    if (!response.data || !response.data.result || response.data.result.length === 0) {
        throw new Error("User not found on Hive blockchain");
    }

    const account = response.data.result[0];
    const stakedHive = parseFloat(account.vesting_shares.split(" ")[0]);

    return { isPremium: stakedHive >= 100 }; // Premium if staked HIVE is 100 or more
};

module.exports = {
    fetchHiveBalance,
    fetchTransactions,
    fetchAutoInvestSettings,
    updateAutoInvest,
    stakeHiveTokens,
    checkSubscription
};
