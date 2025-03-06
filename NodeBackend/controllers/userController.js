const { getUserStakedTokens } = require("../utils/subscriptionUtils");

// Temporary in-memory storage (Replace with database in production)
const userSubDB = {};

// 🔹 Staking 50 HIVE Tokens for premium subscription
exports.stakeHiveTokens = async (req, res) => {
    try {
        const { username } = req.user; // Extracted from JWT
        const { amount } = req.body;

        if (!amount || amount < 50) {
            return res.status(400).json({ error: "Minimum 50 HIVE tokens required for premium." });
        }

        // Save subscription details in DB (Replace with real DB storage)
        userSubDB[username] = {
            subscribed: true,
            expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days validity
        };

        return res.json({ success: true, message: "Premium subscription activated!", expiresAt: userSubDB[username].expiresAt });

    } catch (error) {
        console.error("Subscription Error:", error);
        res.status(500).json({ error: "Subscription failed" });
    }
};

// 🔹 Check if user has an active premium subscription based on Hive stake
exports.checkSubscriptionStatus = async (req, res) => {
    try {
        const { username } = req.user; // Extracted from JWT

        // 🔹 Get staked HIVE tokens from Hive Blockchain
        const stakedTokens = await getUserStakedTokens(username);

        // 🔹 Check if user has at least 50 HIVE staked
        if (stakedTokens < 50) {
            return res.json({ subscribed: false, stakedTokens });
        }

        return res.json({ subscribed: true, stakedTokens });

    } catch (error) {
        console.error("Check Subscription Error:", error);
        res.status(500).json({ error: "Error checking subscription status" });
    }
};

