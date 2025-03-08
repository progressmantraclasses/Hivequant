const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: String,
    memberSince: {
        type: Date,
        default: Date.now
    },
    investmentGoals: [String],
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
    transactions: [{
        type: { type: String },
        date: { type: Date },
        amount: { type: String },
        icon: { type: String },
        iconBg: { type: String },
        textColor: { type: String }
    }],
    aiInsights: [{
        title: String,
        description: String,
        icon: String
    }],
    securitySettings: {
        twoFactorEnabled: Boolean,
        kycVerified: Boolean,
        priceAlertsEnabled: Boolean,
        apiAccessEnabled: Boolean
    }
});

module.exports = mongoose.model('User', userSchema); 