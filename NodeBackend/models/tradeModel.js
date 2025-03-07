const TradeModel = {
    tradeAmount: 10,
    stopLossPercentage: 5, // Stop-loss at 5%
    takeProfitPercentage: 10, // Take profit at 10%
    autoInvestPercentage: 50, // Auto-invest 50% of profits
    premiumFrequencies: ["every second", "5 min", "10 min", "15 min"],
    basicFrequencies: ["20 min", "25 min", "30 min"]
};

module.exports = TradeModel;