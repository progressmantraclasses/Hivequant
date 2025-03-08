import React from 'react';
import { 
  FaRobot, 
  FaChartLine, 
  FaShieldAlt, 
  FaCogs 
} from 'react-icons/fa';

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            About HiveQuant  Auto-Investor
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Revolutionizing Web3 investments through AI-powered automation. Our platform combines 
            advanced artificial intelligence with blockchain technology to deliver smart, efficient, 
            and secure trading solutions.
          </p>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FaRobot className="text-cyan-400" size={40} />}
            title="AI-Powered Analysis"
            description="Advanced machine learning algorithms analyze market trends and blockchain data in real-time for optimal investment decisions."
          />
          <FeatureCard 
            icon={<FaChartLine className="text-green-400" size={40} />}
            title="Automated Trading"
            description="Seamless execution of trades based on AI predictions and market conditions, operating 24/7 without human intervention."
          />
          <FeatureCard 
            icon={<FaShieldAlt className="text-blue-400" size={40} />}
            title="Enhanced Security"
            description="State-of-the-art security measures including Hive Keychain integration and multi-factor authentication."
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-800/50 py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="20+" text="Minutes Update Frequency" />
            <StatCard number="24/7" text="Automated Trading" />
            <StatCard number="50+" text="HIVE Tokens Staked" />
            <StatCard number="99.9%" text="System Uptime" />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessCard 
            number="01"
            title="Connect Your Wallet"
            description="Securely connect your Hive wallet using Hive Keychain for seamless integration."
          />
          <ProcessCard 
            number="02"
            title="Configure AI Bot"
            description="Set your investment preferences and risk tolerance levels for automated trading."
          />
          <ProcessCard 
            number="03"
            title="Start Auto-Investing"
            description="Let our AI bot handle your investments while you monitor performance in real-time."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const StatCard = ({ number, text }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{number}</div>
    <div className="text-sm text-gray-400">{text}</div>
  </div>
);

const ProcessCard = ({ number, title, description }) => (
  <div className="relative">
    <div className="text-6xl font-bold text-gray-700/20 absolute -top-8 left-0">{number}</div>
    <div className="pt-8">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default AboutSection;
 