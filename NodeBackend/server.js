const express = require("express");
const cors = require("cors");
const cron = require("node-cron");
const hiveClient = require("@hiveio/dhive");
const jwt = require("jsonwebtoken");
const authRoutes = require("./routes/authRoutes");
const investmentRoutes = require("./routes/investmentRoutes");
const userRoutes = require("./routes/userRoutes"); // New route for user subscriptions
const { checkPremiumUsers } = require("./utils/subscriptionUtils");

const app = express();
app.use(express.json());
app.use(cors());

// Authentication Route
app.use("/api/auth", authRoutes);

// Hive Configuration (Previously in config file)
const client = new hiveClient.Client(["https://api.hive.blog"]);
const HIVE_ENGINE_API = "https://api.hive-engine.com/rpc/contracts";
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Attach Hive config to app (so controllers can access it)
app.locals.hiveClient = client;
app.locals.hiveEngineApi = HIVE_ENGINE_API;
app.locals.jwtSecret = JWT_SECRET;

// Investment Routes
app.use("/api/invest", investmentRoutes);

// User-related Routes (for managing subscriptions)
app.use("/api/users", userRoutes);

// 🔹 Auto-invest every 20 minutes for eligible users
cron.schedule("*/20 * * * *", async () => {
    console.log("Checking premium users for auto-investment...");
    
    const premiumUsers = await checkPremiumUsers();
    
    if (premiumUsers.length > 0) {
        console.log(`Auto-investing for ${premiumUsers.length} premium users...`);
        const investmentController = require("./controllers/investmentController");
        for (const user of premiumUsers) {
            await investmentController.autoInvest(user, app.locals);
        }
    } else {
        console.log("No premium users found for auto-investment.");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
