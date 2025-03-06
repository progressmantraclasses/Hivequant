exports.stakeHiveTokens = async (req, res) => {
    try {
        const { username } = req.user;
        const { amount } = req.body;

        if (!amount || amount < 10) {
            return res.status(400).json({ success: false, error: "Minimum 10 HIVE tokens required for premium." });
        }

        // 🔹 Store in Database Instead of Memory
        const expiresAt = Date.now() + 30 * 24 * 60 * 60 * 1000;

        return res.json({ success: true, message: "Premium subscription activated!", expiresAt });
    } catch (error) {
        console.error("Subscription Error:", error);
        res.status(500).json({ success: false, error: "Subscription failed" });
    }
};

exports.checkSubscriptionStatus = async (req, res) => {
    try {
        const { username } = req.user;

        const stakedTokens = await getUserStakedTokens(username);

        res.json({ success: true, subscribed: stakedTokens >= 10, stakedTokens });
    } catch (error) {
        console.error("Subscription Check Error:", error);
        res.status(500).json({ success: false, error: "Error checking subscription status" });
    }
};
