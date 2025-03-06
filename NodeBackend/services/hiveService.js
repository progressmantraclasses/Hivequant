const MINIMUM_STAKE_REQUIRED = 10; // Updated from 50 to 10

// Simulating user-staked token retrieval
async function getUserStakedTokens(username) {
    try {
        // 🔹 Replace this with actual blockchain API call to fetch staked tokens
        const stakedTokens = await fakeHiveAPI(username);
        return stakedTokens;
    } catch (error) {
        console.error("Error fetching staked tokens:", error);
        return 0;
    }
}

// Check if a user has enough staked tokens for premium subscription
async function checkSubscription(username) {
    const stakedTokens = await getUserStakedTokens(username);
    return stakedTokens >= MINIMUM_STAKE_REQUIRED;
}

// Fake API call simulation (Replace with actual blockchain call)
async function fakeHiveAPI(username) {
    // Simulated data: Assume every user has at least 15 HIVE (for testing)
    return 15; // Replace with actual API call logic
}

module.exports = { getUserStakedTokens, checkSubscription };
