import { Check, Lock } from "lucide-react"
import AiIconImage from '../../Images/AiRoboIcon.png'

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Experience Premium AI Features
          </h1>
          <div className="relative w-full max-w-xl mx-auto mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gray-900 text-gray-400 text-lg">Unlock Advanced Features</span>
            </div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unlock advanced AI algorithms, priority insights, and exclusive tools to maximize your investment potential.
          </p>
        </div>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan Card */}
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gray-900 text-gray-400 px-4 py-1 rounded-full text-sm">
                Basic
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="bg-gray-700/50 rounded-full p-4 w-20 h-20 flex items-center justify-center">
                <Lock className="w-10 h-10 text-gray-400" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-8">Free Plan</h2>

            <div className="space-y-6 mb-8">
              <FeatureItem available={true} text="Basic market analysis" />
              <FeatureItem available={true} text="Limited investment recommendations" />
              <FeatureItem available={true} text="Standard portfolio tracking" />
              <FeatureItem available={false} text="AI-powered insights" />
              <FeatureItem available={false} text="Priority support" />
            </div>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold mb-2">$0</div>
              <div className="text-gray-400">Forever Free</div>
            </div>

            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl font-medium transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Premium Plan Card */}
          <div className="relative bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-8 border border-cyan-700/50 hover:border-cyan-600/50 transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm">
                Recommended
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-4 w-20 h-20 flex items-center justify-center">
                <img
                  src={AiIconImage}
                  alt="AI Icon"
                  className="w-12 h-12 text-white"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-8">Premium Plan</h2>

            <div className="space-y-6 mb-8">
              <FeatureItem available={true} text="Advanced AI-powered analysis" highlight={true} />
              <FeatureItem available={true} text="Unlimited investment insights" highlight={true} />
              <FeatureItem available={true} text="Real-time portfolio optimization" highlight={true} />
              <FeatureItem available={true} text="Priority customer support" highlight={true} />
              <FeatureItem available={true} text="Exclusive investment opportunities" highlight={true} />
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-400 mb-1">Special Offer</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                  50 HIVE Tokens
                </div>
                <div className="text-cyan-400 font-semibold mt-1">per month</div>
              </div>
              
              <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Annual Plan</div>
                  <div className="text-2xl font-bold text-cyan-400">99 HIVE Tokens</div>
                  <div className="text-sm text-gray-400">Save up to 50%</div>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const FeatureItem = ({ available, text, highlight }) => (
  <div className="flex items-start gap-3">
    {available ? (
      <Check className={`w-5 h-5 mt-1 flex-shrink-0 ${highlight ? 'text-cyan-400' : 'text-gray-400'}`} />
    ) : (
      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border border-gray-600" />
    )}
    <span className={highlight ? 'text-cyan-50' : 'text-gray-400'}>{text}</span>
  </div>
);






// import React from 'react'

// const SubscriptionPlan = () => {
//   return (
//     <div>SubscriptionPlan</div>
//   )
// }

// export default SubscriptionPlan



// import { useState, useEffect } from "react";


// const SubscriptionPlans = () => {
//   const [selectedPlan, setSelectedPlan] = useState("free");
//   const [timeLeft, setTimeLeft] = useState(30); // Dummy time left for premium plan in days

//   useEffect(() => {
//     if (selectedPlan === "premium") {
//       const timer = setInterval(() => {
//         setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//       }, 86400000); // Decrease by 1 day (milliseconds)
//       return () => clearInterval(timer);
//     }
//   }, [selectedPlan]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Free Plan */}
//         <div
//           whileHover={{ scale: 1.05 }}
//           className={`p-6 rounded-2xl shadow-xl border-2 border-gray-600 bg-gray-800 text-center w-80 transition-all duration-300 ${selectedPlan === "free" ? "ring-2 ring-green-500" : ""}`}
//         >
//           <h2 className="text-3xl font-bold">Free Plan</h2>
//           <p className="text-gray-400 mt-2">Basic investment tracking.</p>
//           <ul className="mt-4 space-y-2">
//             <li>✅ View portfolio summary</li>
//             <li>❌ No AI recommendations</li>
//             <li>❌ No tax-saving reports</li>
//             <li>❌ No priority support</li>
//           </ul>
//           <p className="mt-6 text-2xl font-bold">$0/month</p>
//           <button
//             className={`mt-4 px-6 py-2 rounded-lg font-semibold w-full transition-all duration-300 ${selectedPlan === "free" ? "bg-green-500" : "bg-gray-600 hover:bg-gray-500"}`}
//             onClick={() => setSelectedPlan("free")}
//           >
//             Selected
//           </button>
//         </div>

//         {/* Premium Plan */}
//         <div
//           whileHover={{ scale: 1.08 }}
//           className={`relative p-8 rounded-2xl shadow-xl border-2 border-yellow-500 bg-gradient-to-b from-yellow-600 to-yellow-400 text-center w-96 transition-all duration-300 ${selectedPlan === "premium" ? "ring-4 ring-yellow-300" : ""}`}
//         >
//           <h2 className="text-4xl font-extrabold text-black">Premium Plan</h2>
//           <p className="text-black mt-2 font-semibold">Advanced AI-powered investment tracking.</p>
//           <ul className="mt-4 space-y-2 text-black font-medium">
//             <li>✅ AI-driven portfolio insights</li>
//             <li>✅ Automated investment strategies</li>
//             <li>✅ Tax-saving & wealth growth reports</li>
//             <li>✅ Priority customer support</li>
//           </ul>
//           <p className="mt-6 text-2xl font-extrabold text-black">50 Hive Tokens/month</p>
//           {selectedPlan === "premium" && (
//             <p className="mt-2 text-sm font-semibold text-black bg-white px-3 py-1 rounded-full inline-block">
//               Renewal in: {timeLeft} days
//             </p>
//           )}
//           <button
//             className={`mt-4 px-6 py-2 rounded-lg font-semibold w-full transition-all duration-300 ${selectedPlan === "premium" ? "bg-black text-yellow-400" : "bg-gray-900 text-yellow-400 hover:bg-yellow-500 hover:text-black"}`}
//             onClick={() => setSelectedPlan("premium")}
//           >
//             {selectedPlan === "premium" ? "Selected" : "Upgrade Now"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionPlans;

