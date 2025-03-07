require('dotenv').config();

module.exports = {
  BINANCE_API_KEY: process.env.BINANCE_API_KEY,
  BINANCE_API_SECRET: process.env.BINANCE_API_SECRET,
  SYMBOL: "BTCUSDT", // Default trading pair
  TRADE_AMOUNT: 0.001 // Amount to buy/sell per trade
};
