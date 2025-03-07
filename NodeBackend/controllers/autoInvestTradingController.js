const { getHivePrice, executeHiveTrade } = require("../services/binanceService");
const { predictMarketTrend } = require("../services/aiTradingService");
const TradeModel = require("../models/tradeModel");
const { updateAutoInvest, checkSubscription } = require("../services/hiveService");
const { initTradeConfig } = require("../services/tradeConfigService"); // ✅ Import initTradeConfig

// Initialize trade configuration
const tradeConfig = {
    tradeAmount: 10, // Example: Set trade amount
    stopLossPercentage: 5, // Example: 5% stop-loss
    takeProfitPercentage: 10, // Example: 10% take-profit
    autoInvestPercentage: 50 // Example: 50% reinvestment
};
initTradeConfig(tradeConfig); // ✅ Initialize trade configuration

const makeTradingDecision = async (user) => {
    try {
        const price = await getHivePrice();
        if (!price) return { action: "hold", reason: "Price data unavailable" };

        const prediction = await predictMarketTrend("HIVE", price);
        const isPremium = await checkSubscription(user);

        let tradeAction = "hold";
        let reason = "Market stable";
        let entryPrice = price;

        if (prediction === "BUY") {
            tradeAction = "buy";
            reason = "AI suggests buying";
            const trade = await executeHiveTrade("BUY", TradeModel.tradeAmount);
            entryPrice = trade?.fills?.[0]?.price || price;
        }
        else if (prediction === "SELL") {
            tradeAction = "sell";
            reason = "AI suggests selling";
            await executeHiveTrade("SELL", TradeModel.tradeAmount);
        }

        // Implement Stop-Loss & Take-Profit
        if (tradeAction !== "hold") {
            setTimeout(async () => {
                const currentPrice = await getHivePrice();
                const stopLossPrice = entryPrice * (1 - TradeModel.stopLossPercentage / 100);
                const takeProfitPrice = entryPrice * (1 + TradeModel.takeProfitPercentage / 100);

                if (currentPrice <= stopLossPrice) {
                    await executeHiveTrade("SELL", TradeModel.tradeAmount);
                    console.log("Stop-loss triggered. Selling at", currentPrice);
                } else if (currentPrice >= takeProfitPrice) {
                    await executeHiveTrade("SELL", TradeModel.tradeAmount);
                    console.log("Take-profit reached. Selling at", currentPrice);
                    
                    // Auto-invest profits based on premium status
                    const profit = (takeProfitPrice - entryPrice) * TradeModel.tradeAmount;
                    const autoInvestAmount = profit * (TradeModel.autoInvestPercentage / 100);
                    
                    if (autoInvestAmount > 0) {
                        const autoInvestFrequency = isPremium ? "every second" : "20 min";
                        await updateAutoInvest(true, autoInvestFrequency);
                        console.log(`Auto-investing ${autoInvestAmount} HIVE at ${autoInvestFrequency} frequency`);
                    }
                }
            }, 60000); // Check after 1 minute
        }

        return { action: tradeAction, reason, price };
    } catch (error) {
        console.error("Hive Trading AI Error:", error);
        return { action: "hold", reason: "Error in AI trading logic" };
    }
};

module.exports = { makeTradingDecision };
