const express = require("express");
const router = express.Router();
const { hiveLogin } = require("../controllers/authController");
const authenticateUser = require("../middlewares/authMiddleware");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// 🔹 Hive Login Route
router.post("/hive-login", hiveLogin);

// 🔹 Refresh Token Route
router.get("/refresh-token", authenticateUser, (req, res) => {
    try {
        const newToken = jwt.sign({ username: req.user.username }, JWT_SECRET, { expiresIn: "30d" });
        res.json({ success: true, token: newToken });
    } catch (error) {
        res.status(500).json({ success: false, error: "Token refresh failed" });
    }
});

module.exports = router;
