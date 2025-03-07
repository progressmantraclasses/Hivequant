let tradeSettings = {};

const initTradeConfig = (config) => {
    tradeSettings = { ...config };
    console.log("Trade Config Initialized:", tradeSettings);
};

module.exports = { initTradeConfig };
