const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Routes
const userRoutes = require("./routes/userRoutes");
const investmentRoutes = require("./routes/autoInvestTradingRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const authRoutes = require("./routes/authRoutes");
const tokenRoutes = require("./routes/tokenRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const hivePriceRoutes = require("./routes/hivePriceRoutes");

app.use("/api/users", userRoutes);
app.use("/api/investments", investmentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tokens", tokenRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/hive", hivePriceRoutes);

// Handle 404 Errors
app.use((req, res) => {
    res.status(404).json({ success: false, error: "Route not found" });
});

// Binance Trading Config
const { initBinance } = require("./services/binanceService");
const { initTradeConfig } = require("./services/tradeConfigService");

const config = {
  BINANCE_API_KEY: process.env.BINANCE_API_KEY,
  BINANCE_API_SECRET: process.env.BINANCE_API_SECRET,
  SYMBOL: "BTCUSDT",
  TRADE_AMOUNT: 0.001,
};

// Initialize Trading Services
initBinance(config.BINANCE_API_KEY, config.BINANCE_API_SECRET);
initTradeConfig(config);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
