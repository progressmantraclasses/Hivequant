const predictMarketTrend = async (symbol, currentPrice) => {
    try {
        console.log(`Analyzing market for ${symbol} at price: ${currentPrice}`);
        
        // 🔹 Example logic: If price increased >2% in the last 24h → SELL, else BUY
        const randomFactor = Math.random(); // Simulating AI-based prediction
        return randomFactor > 0.5 ? "BUY" : "SELL"; 
    } catch (error) {
        console.error("Market prediction error:", error);
        return "HOLD";
    }
};

module.exports = { predictMarketTrend };
