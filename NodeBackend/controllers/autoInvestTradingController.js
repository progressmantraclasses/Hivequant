const { getHivePrice, getHbdPrice, getHpPrice, executeHiveTrade, executeHbdTrade, executeHpTrade } = require("../services/binanceService");
const { predictMarketTrend } = require("../services/aiTradingService");
const TradeModel = require("../models/tradeModel");
const { updateAutoInvest, checkSubscription } = require("../services/hiveService");
const { initTradeConfig } = require("../services/tradeConfigService");

// Initialize trade configuration
const tradeConfig = {
    tradeAmount: 10, // Example: Set trade amount
    stopLossPercentage: 5, // Example: 5% stop-loss
    takeProfitPercentage: 10, // Example: 10% take-profit
    autoInvestPercentage: 50 // Example: 50% reinvestment
};
initTradeConfig(tradeConfig);

const makeTradingDecision = async (user, asset) => {
    try {
        let price, executeTrade;
        
        // Determine the asset type and corresponding functions
        if (asset === "HIVE") {
            price = await getHivePrice();
            executeTrade = executeHiveTrade;
        } else if (asset === "HBD") {
            price = await getHbdPrice();
            executeTrade = executeHbdTrade;
        } else if (asset === "HP") {
            price = await getHpPrice();
            executeTrade = executeHpTrade;
        } else {
            return { action: "hold", reason: "Invalid asset type" };
        }

        if (!price) return { action: "hold", reason: `${asset} price data unavailable` };

        const prediction = await predictMarketTrend(asset, price);
        const isPremium = await checkSubscription(user);

        let tradeAction = "hold";
        let reason = "Market stable";
        let entryPrice = price;

        if (prediction === "BUY") {
            tradeAction = "buy";
            reason = `AI suggests buying ${asset}`;
            const trade = await executeTrade("BUY", TradeModel.tradeAmount);
            entryPrice = trade?.fills?.[0]?.price || price;
        }
        else if (prediction === "SELL") {
            tradeAction = "sell";
            reason = `AI suggests selling ${asset}`;
            await executeTrade("SELL", TradeModel.tradeAmount);
        }

        // Implement Stop-Loss & Take-Profit
        if (tradeAction !== "hold") {
            setTimeout(async () => {
                let currentPrice;
                
                if (asset === "HIVE") currentPrice = await getHivePrice();
                else if (asset === "HBD") currentPrice = await getHbdPrice();
                else if (asset === "HP") currentPrice = await getHpPrice();

                const stopLossPrice = entryPrice * (1 - TradeModel.stopLossPercentage / 100);
                const takeProfitPrice = entryPrice * (1 + TradeModel.takeProfitPercentage / 100);

                if (currentPrice <= stopLossPrice) {
                    await executeTrade("SELL", TradeModel.tradeAmount);
                    console.log(`Stop-loss triggered for ${asset}. Selling at`, currentPrice);
                } else if (currentPrice >= takeProfitPrice) {
                    await executeTrade("SELL", TradeModel.tradeAmount);
                    console.log(`Take-profit reached for ${asset}. Selling at`, currentPrice);
                    
                    // Auto-invest profits based on premium status
                    const profit = (takeProfitPrice - entryPrice) * TradeModel.tradeAmount;
                    const autoInvestAmount = profit * (TradeModel.autoInvestPercentage / 100);
                    
                    if (autoInvestAmount > 0) {
                        const autoInvestFrequency = isPremium ? "every second" : "20 min";
                        await updateAutoInvest(true, autoInvestFrequency);
                        console.log(`Auto-investing ${autoInvestAmount} ${asset} at ${autoInvestFrequency} frequency`);
                    }
                }
            }, 60000); // Check after 1 minute
        }

        return { action: tradeAction, reason, price };
    } catch (error) {
        console.error(`${asset} Trading AI Error:`, error);
        return { action: "hold", reason: `Error in ${asset} AI trading logic` };
    }
};

module.exports = { makeTradingDecision };
