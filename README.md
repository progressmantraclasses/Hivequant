# Hive_Hackathon_MVP
this repo contains  code for basic prototype/MVP for hive hackathon

[Hive_track_requirements_google_drive](https://drive.google.com/file/d/16jqJHlONuIHzg9o5fkA4x5TV1-h1tulK/view?usp=drive_link)

[Hive_auth_documentation](https://docs.hiveauth.com/)

🚀 Hive AI-Based Auto-Investing Bot for Web3 Tokens

Idea

A self-learning AI bot that analyzes Hive Blockchain transactions and automatically invests in the most promising Web3 tokens.

Why This Sounds Hard?

AI-based predictive model for investments

Real-time blockchain analysis

Automated smart contract execution

# Milestone 1: 6/3/2024 (Thursday)

## 🔑 Authentication (Hive Keychain Integration)
Users log in via Hive Keychain instead of manually entering private keys.

### Implemented Features:
✅ JWT authentication for session management
✅ Refresh tokens for extended sessions
✅ User dashboard upon login

## 💰 Automated Investment & Staking
The bot automatically invests HIVE tokens based on market conditions.

### Workflow:
1️⃣ User logs in via Hive Keychain
2️⃣ Bot setup for automated investments
3️⃣ Investment logic triggers based on Hive token prices
4️⃣ Transaction executed using Hive Blockchain
5️⃣ Staking & rewards tracking through Hive Engine

### Implemented Features:
✅ Scheduled investments using node-cron (every 20 minutes)
✅ Hive transactions executed programmatically
✅ Dynamic investment amounts

## 🏆 Premium Subscription System
Users stake 50 HIVE tokens to access premium features.

### Implemented Features:
✅ Subscription Tracking using Hive transactions
✅ Auto-renewal system (coming soon)
✅ Database-less approach – Uses Hive transactions for verification

## 🔗 Hive Blockchain Integration
### Implemented:
✅ Hive Engine API for token interactions
✅ DHive library for blockchain transactions
✅ Real-time tracking of user stakes
