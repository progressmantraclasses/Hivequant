import { useState } from 'react';
import Single from '../../Images/Single.png'
 import Triple from '../../Images/Triple.png'
 
const FeatureSection = () => {
   return (
    <div className="min-h-screen bg-gray-900 pt-16 px-4 md:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center py-16 space-y-8">
        <div className="inline-block animate-float">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              Investment Prediction
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Engine
            </span>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-75 animate-ping"></div>
            </h1>
        </div>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Advanced AI-powered analysis and automated investment strategies for the Hive blockchain,
          delivering real-time insights and automated execution.
        </p>
        <div className="flex justify-center gap-4">
          <StatsCard number="99.9%" label="Accuracy" />
          <StatsCard number="24/7" label="Monitoring" />
          <StatsCard number="<0.1s" label="Response Time" />
        </div>
         </div>
        
      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 pb-20">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} delay={index * 100} />
        ))}
      </div>
            </div>
  );
};

const StatsCard = ({ number, label }) => (
  <div className="bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
    <div className="text-xl font-bold text-cyan-500">{number}</div>
    <div className="text-sm text-gray-400">{label}</div>
           </div>
);

const FeatureCard = ({ image, title, subtitle, descriptions, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 
        hover:scale-105 duration-300 transition-all shadow-xl hover:shadow-cyan-500/10 group
        animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header */}
      <div className="relative mb-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        <div className="flex items-center justify-center relative">
          <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          <img 
            className="w-20 h-20 rounded-full p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm relative z-10 transition-transform duration-300 group-hover:rotate-12"
            src={image}
            alt={title}
          />
                 </div>
              </div>
 
      {/* Card Content */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
          {title}
                 </h2>
        <h3 className="text-cyan-500 font-medium">
          {subtitle}
        </h3>
        <div className="space-y-4 text-gray-300">
          {descriptions.map((desc, index) => (
            <p key={index} className="py-2 border-b border-gray-700/50 last:border-none hover:text-cyan-400 transition-colors duration-300">
              {desc}
            </p>
          ))}
        </div>

        {/* Action Button */}
        <button className="mt-6 px-8 py-3 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold 
          relative overflow-hidden group-hover:scale-105 duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
          <span className="relative z-10">Learn More</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                 </div>
              </div>
  );
};

// Feature data
const features = [
  {
    image: Single,
    title: "AI Model",
    subtitle: "Investment Prediction Engine",
    descriptions: [
      "An AI-powered model analyzes Hive Blockchain transactions to predict high-potential Web3 tokens.",
      "It uses machine learning techniques like LSTMs for time-series predictions, sentiment analysis, and real-time market data."
    ]
  },
  {
    image: Triple,
    title: "AI Dashboard",
    subtitle: "Real-time Analytics",
    descriptions: [
      "A React.js-based frontend dashboard visualizes AI predictions, real-time blockchain transactions, and investment history.",
      "It includes Web3 wallet integration and interactive graphs to track AI-driven investment decisions."
    ]
  },
  {
    image: Triple,
    title: "Blockchain",
    subtitle: "Hive Smart Contracts",
    descriptions: [
      "The contracts execute transactions when an AI-predicted probability exceeds a threshold, ensuring secure and automated investments.",
      "Hive Smart Contracts automatically invest in tokens based on AI insights."
    ]
  }
];

// Add these animations to your global CSS file
const styles = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

.delay-700 {
  animation-delay: 700ms;
}
`;

export default FeatureSection;