const { getHivePrice, tradeHive } = require("../services/binanceService");
const { predictMarketTrend } = require("../services/aiTradingService");
const { initTradeConfig } = require("../services/tradeConfigService");

const DUMMY_MODE = process.env.DUMMY_MODE === "true"; // Enable Dummy Mode

const tradeConfig = {
    tradeAmount: 10,
    stopLossPercentage: 5,
    takeProfitPercentage: 10,
    autoInvestPercentage: 50 
};

initTradeConfig(tradeConfig);

let tradeIntervals = {}; // Store user-specific intervals

const frequencyToMs = {
    "Every Second": 1000,
    "5 minutes": 5 * 60 * 1000,
    "10 minutes": 10 * 60 * 1000,
    "15 minutes": 15 * 60 * 1000,
    "20 minutes": 20 * 60 * 1000,
    "25 minutes": 25 * 60 * 1000,
    "30 minutes": 30 * 60 * 1000
};

const autoTradeHive = async (user, frequency) => {
    try {
        if (!frequencyToMs[frequency]) {
            console.error(`❌ Invalid frequency: ${frequency}`);
            return { action: "hold", reason: "Invalid frequency selected" };
        }

        // Clear previous interval if exists
        if (tradeIntervals[user.username]) {
            clearInterval(tradeIntervals[user.username]);
            console.log(`🛑 Stopping previous trading session for ${user.username}`);
        }

        console.log(`🔵 Starting auto-trading for ${user.username} every ${frequency}`);

        // Set new interval for trading
        tradeIntervals[user.username] = setInterval(async () => {
            console.log(`⏳ Executing trade for ${user.username}`);

            const hivePrice = await getHivePrice();
            if (!hivePrice) return console.log(`⚠️ HIVE price unavailable`);

            console.log(`📈 Current HIVE Price: $${hivePrice}`);

            let simulatedBalance = Math.floor(Math.random() * 500) + 100;
            let autoInvestAmount = (tradeConfig.autoInvestPercentage / 100) * simulatedBalance;

            let prediction = await predictMarketTrend("HIVE", hivePrice);
            let tradeAction = "hold";
            let reason = "Market stable";

            if (DUMMY_MODE) {
                console.log(`⚠️ Running in DUMMY MODE: No actual trades executed!`);
                tradeAction = Math.random() > 0.5 ? "buy" : "sell";
                reason = "Simulated trade in dummy mode";
            } else {
                if (prediction === "BUY") {
                    tradeAction = "buy";
                    reason = `AI suggests buying HIVE`;
                    await tradeHive("BUY", autoInvestAmount);
                } else if (prediction === "SELL") {
                    tradeAction = "sell";
                    reason = `AI suggests selling HIVE`;
                    await tradeHive("SELL", autoInvestAmount);
                }
            }

            console.log(`✅ Trade executed: ${tradeAction} ${autoInvestAmount} HIVE at $${hivePrice}`);
        }, frequencyToMs[frequency]);

        return { action: "started", reason: `Trading every ${frequency}` };

    } catch (error) {
        console.error(`🚨 HIVE Trading AI Error:`, error);
        return { action: "hold", reason: "Error in HIVE AI trading logic" };
    }
};

// Stop auto-trading for a user
const stopAutoTrade = (user) => {
    if (tradeIntervals[user.username]) {
        clearInterval(tradeIntervals[user.username]);
        delete tradeIntervals[user.username];
        console.log(`🛑 Auto-trading stopped for ${user.username}`);
        return { success: true, message: "Auto-trading stopped" };
    } else {
        return { success: false, message: "No active trading session found" };
    }
};

module.exports = { autoTradeHive, stopAutoTrade };
