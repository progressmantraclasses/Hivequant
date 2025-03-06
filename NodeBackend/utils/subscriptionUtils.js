const hive = require("@hiveio/dhive");

// 🔹 Hive RPC Node
const client = new hive.Client(["https://api.hive.blog"]);

// 🔹 Get User's Staked Tokens from Hive Blockchain
async function getUserStakedTokens(username) {
    try {
        const account = await client.database.getAccounts([username]);

        if (!account.length) return 0;

        const stakedHive = parseFloat(account[0].vesting_shares); // Staked HIVE
        return stakedHive;
    } catch (error) {
        console.error("Error fetching staked tokens:", error);
        return 0;
    }
}

module.exports = { getUserStakedTokens };
