const axios = require("axios");
const { subscriptions } = require("../models/subscriptionModel");

const HIVE_ENGINE_API = "https://api.hive-engine.com/rpc/contracts";
const STAKE_AMOUNT = 50; // 50 HIVE for premium

// Fetch Auto-Invest settings (Modify as needed)
exports.fetchAutoInvestSettings = async () => {
    return {
        enabled: true,
        frequency: "5 min",
        premiumRequired: ["continuous", "5 min", "10 min", "15 min"]
    };
};

// Update Auto-Invest settings
exports.updateAutoInvest = async (enable, frequency) => {
    return { enabled: enable, frequency };
};

// Stake 50 HIVE for premium subscription
exports.stakeHiveTokens = async (user) => {
    try {
        subscriptions[user] = { staked: STAKE_AMOUNT, expiry: Date.now() + 30 * 24 * 60 * 60 * 1000 }; // 1-month expiry
        return { success: true, message: `Staked ${STAKE_AMOUNT} HIVE for 1 month premium!` };
    } catch (error) {
        console.error("Error staking HIVE:", error);
        throw error;
    }
};

// Check if user has an active premium subscription
exports.checkSubscription = async (user) => {
    if (subscriptions[user] && subscriptions[user].expiry > Date.now()) {
        return true; // User has an active subscription
    }
    return false;
};
