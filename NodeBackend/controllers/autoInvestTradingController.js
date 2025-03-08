const { getHivePrice, getHbdPrice, getHpPrice, tradeHive, tradeHbd, tradeHp } = require("../services/binanceService");
const { predictMarketTrend } = require("../services/aiTradingService");
const TradeModel = require("../models/tradeModel");
const { updateAutoInvest, checkSubscription } = require("../services/hiveService");
const { initTradeConfig } = require("../services/tradeConfigService");

const DUMMY_MODE = process.env.DUMMY_MODE === "true"; // Enable Dummy Mode via ENV

// Initialize trade configuration
const tradeConfig = {
    tradeAmount: 10, 
    stopLossPercentage: 5, 
    takeProfitPercentage: 10, 
    autoInvestPercentage: 50
};
initTradeConfig(tradeConfig);

const makeTradingDecision = async (user, asset) => {
    try {
        console.log(`🟢 Processing trade decision for ${asset} (User: ${user?.username || "Unknown"})`);

        // DUMMY MODE: Return a fake response without executing real trades
        if (DUMMY_MODE) {
            console.log(`⚠️ Running in DUMMY MODE: No actual trades executed!`);
            return {
                action: Math.random() > 0.5 ? "buy" : "sell",  // Randomly simulate buy/sell
                reason: "Simulated trade in dummy mode",
                price: (Math.random() * 100).toFixed(2), // Generate a fake price
            };
        }

        let price, executeTrade;
        
        if (asset === "HIVE") {
            price = await getHivePrice();
            executeTrade = tradeHive;
        } else if (asset === "HBD") {
            price = await getHbdPrice();
            executeTrade = tradeHbd;
        } else if (asset === "HP") {
            price = await getHpPrice();
            executeTrade = tradeHp;
        } else {
            return { action: "hold", reason: "Invalid asset type" };
        }

        if (!price) return { action: "hold", reason: `${asset} price data unavailable` };

        let prediction = await predictMarketTrend(asset, price);
        let tradeAction = "hold";
        let reason = "Market stable";

        if (prediction === "BUY") {
            tradeAction = "buy";
            reason = `AI suggests buying ${asset}`;
            await executeTrade("BUY", tradeConfig.tradeAmount);
        } else if (prediction === "SELL") {
            tradeAction = "sell";
            reason = `AI suggests selling ${asset}`;
            await executeTrade("SELL", tradeConfig.tradeAmount);
        }

        return { action: tradeAction, reason, price };
    } catch (error) {
        console.error(`${asset} Trading AI Error:`, error);
        return { action: "hold", reason: `Error in ${asset} AI trading logic` };
    }
};

module.exports = { makeTradingDecision };
