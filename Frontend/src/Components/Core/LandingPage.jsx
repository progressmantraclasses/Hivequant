import React from 'react';
import TypeWritingEffect from '../../TypeWritingEffect';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="flex flex-col justify-center text-left space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="text-cyan-400">HiveQuant </span><br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Auto-Investing Bot
              </span>
            </h1>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              <TypeWritingEffect />
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Leverage AI-powered insights to automatically invest in promising Web3 tokens on the Hive blockchain. 
              Get real-time analysis and automated investment execution.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold hover:from-cyan-600 hover:to-blue-600 transition-all">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-500 rounded-full font-bold hover:bg-cyan-500 hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right side */}
          <div className="relative animate-fadeIn">
            <div className="w-full h-[500px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-3xl p-8">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Feature Cards */}
                <FeatureCard 
                  icon="🤖"
                  title="AI-Powered"
                  description="Self-learning bot that analyzes blockchain data"
                />
                <FeatureCard 
                  icon="📈"
                  title="Auto-Investing"
                  description="Automated investment based on market conditions"
                />
                <FeatureCard 
                  icon="🔐"
                  title="Secure Auth"
                  description="Hive Keychain integration for secure login"
                />
                <FeatureCard 
                  icon="💎"
                  title="Premium Features"
                  description="Stake 50 HIVE for advanced features"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="20+" text="Minutes Update" />
          <StatCard number="100%" text="Automated" />
          <StatCard number="24/7" text="Monitoring" />
          <StatCard number="50+" text="HIVE Staking" />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
      <span className="text-4xl mb-4">{icon}</span>
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

const StatCard = ({ number, text }) => {
  return (
    <div className="text-center transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-4xl font-bold text-cyan-400 mb-2">{number}</h2>
      <p className="text-gray-300">{text}</p>
    </div>
  );
};

export default LandingPage;
