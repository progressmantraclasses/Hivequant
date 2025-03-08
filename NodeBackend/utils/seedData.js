const mongoose = require('mongoose');
const User = require('../models/userModel');
require('dotenv').config();

const testUser = {
    username: "john.smith",
    email: "john.smith@example.com",
    phoneNumber: "+1 (555) 123-4567",
    memberSince: new Date("2024-01-15"),
    investmentGoals: ["Long-term Growth", "Moderate Risk", "Retirement", "Passive Income"],
    portfolio: {
        totalValue: 145728.65,
        invested: 125000,
        returns: 20728.65,
        ytdPerformance: 12.5,
        returnsPercentage: 16.6,
        distribution: [
            { name: "Stocks", percentage: 45, color: "#3a86ff" },
            { name: "ETFs", percentage: 25, color: "#8338ec" },
            { name: "Crypto", percentage: 15, color: "#ffbe0b" },
            { name: "Bonds", percentage: 10, color: "#06d6a0" },
            { name: "REITs", percentage: 5, color: "#ef476f" }
        ]
    },
    transactions: [
        {
            type: "Deposit",
            date: new Date("2024-03-04"),
            amount: "+$2,500.00",
            icon: "⬆",
            iconBg: "#06d6a0",
            textColor: "#06d6a0"
        },
        {
            type: "Buy - AAPL",
            date: new Date("2024-03-02"),
            amount: "-$1,745.30",
            icon: "💰",
            iconBg: "#3a86ff",
            textColor: "inherit"
        }
    ],
    aiInsights: [
        {
            title: "Portfolio Rebalancing",
            description: "Consider increasing your bond allocation by 5% to reduce volatility.",
            icon: "📈"
        },
        {
            title: "Timing Suggestion",
            description: "Tech sector showing potential entry points this week.",
            icon: "⏳"
        }
    ],
    securitySettings: {
        twoFactorEnabled: true,
        kycVerified: true,
        priceAlertsEnabled: true,
        apiAccessEnabled: false
    }
};

const seedDatabase = async () => {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Clear existing users
        await User.deleteMany({});
        console.log('Cleared existing users');
        
        // Create test user
        const user = await User.create(testUser);
        console.log('Created test user:', user.username);
        
        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase(); 