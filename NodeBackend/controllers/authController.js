const dhive = require("@hiveio/dhive");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";  // Store in .env

const hiveLogin = async (req, res) => {
  try {
    const { username, message, signature } = req.body;

    if (!username || !message || !signature) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const client = new dhive.Client("https://api.hive.blog");
    const accounts = await client.database.getAccounts([username]);

    if (!accounts || accounts.length === 0) {
      return res.status(404).json({ success: false, error: "Hive user not found" });
    }

    const publicKey = accounts[0].posting.key_auths[0][0]; // Get user's Posting Key

    // 🔹 Hash the message using SHA-256 before verifying
    const hashedMessage = crypto.createHash("sha256").update(message, "utf8").digest();

    // Convert signature to dhive Signature object
    const sig = dhive.Signature.fromString(signature);

    // Recover public key from hashed message
    const recoveredKey = sig.recover(hashedMessage).toString();

    if (recoveredKey !== publicKey) {
      return res.status(401).json({ success: false, error: "Invalid signature" });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "30d" });

    res.json({ success: true, username, token });
  } catch (error) {
    console.error("Hive Login Error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = { hiveLogin };
