const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    memberSince: { type: Date },
    portfolio: {
        totalValue: Number,
        invested: Number,
        returns: Number,
        ytdPerformance: Number,
        returnsPercentage: Number,
        distribution: [{
            name: String,
            percentage: Number,
            color: String
        }]
    },
    securitySettings: {
        twoFactorEnabled: Boolean,
        kycVerified: Boolean,
        priceAlertsEnabled: Boolean,
        apiAccessEnabled: Boolean
    },
    investmentGoals: [String],
    transactions: [{
        type: String,
        date: Date,
        amount: String,
        icon: String,
        iconBg: String,
        textColor: String
    }],
    aiInsights: [{
        title: String,
        description: String,
        icon: String
    }]
});

module.exports = mongoose.model('User', userSchema); 