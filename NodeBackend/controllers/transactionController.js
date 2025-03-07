const hive = require("@hiveio/dhive");

const client = new hive.Client(["https://api.hive.blog"]);

// Fetch transactions for HIVE, HBD, and HP
exports.fetchUserTransactions = async (req, res) => {
    try {
        const { username } = req.params;

        if (!username) {
            return res.status(400).json({ success: false, error: "Username is required" });
        }

        // Fetch transaction history
        const history = await client.database.call("get_account_history", [username, -1, 100]);

        // Filter transactions related to HIVE, HBD, and HP
        const filteredTransactions = history
            .map(([_, tx]) => tx)
            .filter(tx => tx.op[0] === "transfer") // Get only transfer operations
            .map(tx => {
                const [type, data] = tx.op;

                return {
                    token: data.amount.includes("HIVE") ? "HIVE" : data.amount.includes("HBD") ? "HBD" : "HP",
                    amount: data.amount,
                    from: data.from,
                    to: data.to,
                    memo: data.memo || "",
                    timestamp: new Date(tx.timestamp * 1000).toLocaleString(),
                };
            });

        res.json({ success: true, transactions: filteredTransactions });
    } catch (error) {
        console.error("Transaction Fetch Error:", error);
        res.status(500).json({ success: false, error: "Failed to fetch transactions" });
    }
};
