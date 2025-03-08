const Binance = require("node-binance-api");

let binance = null;  // Global Binance instance

const DUMMY_MODE = process.env.DUMMY_MODE === "true"; // Enable Dummy Mode via ENV

const initBinance = (apiKey, apiSecret) => {
  if (!apiKey || !apiSecret) {
    console.warn("⚠️ Binance API key/secret is missing! Running in Dummy Mode.");
    return;
  }

  binance = new Binance().options({
    APIKEY: apiKey,
    APISECRET: apiSecret,
  });

  console.log("✅ Binance API Initialized");
};

const getCryptoPrice = async (symbol) => {
  try {
    console.log(`🔍 Fetching price for: ${symbol}`);

    if (!binance) {
      console.warn("⚠️ Binance API is NOT initialized! Returning Dummy Price.");
      return { success: false, price: (Math.random() * 100).toFixed(2), dummy: true };
    }

    const response = await binance.prices();
    console.log("📊 Binance Prices:", response);

    if (!response || !response[symbol]) {
      console.error(`⚠️ Price data missing for ${symbol}`);
      return { success: false, error: "Price data unavailable" };
    }

    return { success: true, price: parseFloat(response[symbol]) };
  } catch (error) {
    console.error(`🚨 Error fetching price for ${symbol}:`, error.body || error);
    return { success: false, error: error.message || "Unknown error" };
  }
};

// Fetch Prices for HIVE & HBD
const getHivePrice = async () => getCryptoPrice("HIVEUSDT");
const getHbdPrice = async () => getCryptoPrice("HBDUSDT");

// Execute Market Order with Dummy Mode Support
const executeTrade = async (symbol, side, quantity) => {
  try {
    console.log(`🔄 Processing ${side} order for ${symbol} - Quantity: ${quantity}`);

    if (DUMMY_MODE) {
      console.warn(`⚠️ DUMMY MODE: No actual trade executed for ${symbol}.`);
      return {
        success: true,
        dummy: true,
        action: side,
        symbol,
        quantity,
        price: (Math.random() * 100).toFixed(2),
      };
    }

    if (!binance) {
      console.error("❌ Binance API is NOT initialized!");
      return { success: false, error: "Binance API not initialized" };
    }

    let order;
    if (side.toUpperCase() === "BUY") {
      order = await binance.marketBuy(symbol, quantity);
    } else if (side.toUpperCase() === "SELL") {
      order = await binance.marketSell(symbol, quantity);
    } else {
      console.error("🚨 Invalid trade side! Use 'BUY' or 'SELL'.");
      return { success: false, error: "Invalid trade side" };
    }

    console.log(`✅ Trade executed: ${side} ${quantity} ${symbol}`, order);
    return { success: true, order };
  } catch (error) {
    console.error(`🚨 Error executing ${side} order for ${symbol}:`, error.body || error);
    return { success: false, error: error.message || "Unknown error" };
  }
};

// Trade Functions for HIVE & HBD
const tradeHive = async (side, quantity) => executeTrade("HIVEUSDT", side, quantity);
const tradeHbd = async (side, quantity) => executeTrade("HBDUSDT", side, quantity);

module.exports = { initBinance, getHivePrice, getHbdPrice, tradeHive, tradeHbd };
