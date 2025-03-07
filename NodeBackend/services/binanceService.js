const Binance = require('node-binance-api');

let binance; // Will be initialized in server.js

const initBinance = (apiKey, apiSecret) => {
  binance = new Binance().options({
    APIKEY: apiKey,
    APISECRET: apiSecret
  });
};

const getCryptoPrice = async (symbol) => {
  try {
    const { price } = await binance.prices(symbol);
    return parseFloat(price);
  } catch (error) {
    console.error('Error fetching price:', error);
    return null;
  }
};

const executeTrade = async (symbol, side, quantity) => {
  try {
    const order = await binance.marketOrder(symbol, side, quantity);
    console.log(`Executed ${side} order:`, order);
    return order;
  } catch (error) {
    console.error(`Error executing ${side} order:`, error.body);
    return null;
  }
};

module.exports = { initBinance, getCryptoPrice, executeTrade };
