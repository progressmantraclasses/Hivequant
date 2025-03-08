const { initBinance, tradeHive, tradeHbd } = require("./services/binanceService");

const API_KEY = process.env.BINANCE_API_KEY;
const API_SECRET = process.env.BINANCE_API_SECRET;

async function testTrade() {
  // Initialize Binance API
  initBinance(API_KEY, API_SECRET);

  // Small delay to allow Binance API to initialize
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test Buying HIVE
  const hiveBuyOrder = await tradeHive("BUY", 10);
  console.log("HIVE Buy Order:", hiveBuyOrder);

  // Test Selling HBD
  const hbdSellOrder = await tradeHbd("SELL", 5);
  console.log("HBD Sell Order:", hbdSellOrder);
}

testTrade();
