import { Check, Lock } from "lucide-react"
import AiIconImage from '../../Images/AiRoboIcon.png'


export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-black bg-[linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)) text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-5xl w-full mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-2">
          Experience <span className="text-purple-500">Premium</span>
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          AI <span className="text-purple-500">Features.</span>
        </h1>
        <div className="relative w-full max-w-xl mx-auto mb-6">
          <div className="border-t border-gray-500 w-full absolute top-0"></div>
          <div className="absolute right-0 w-1/2 h-8 border-r border-b border-gray-500 rounded-br-full -top-4"></div>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Unlock advanced AI algorithms, priority insights, and exclusive tools to maximize your investment potential.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Free Plan Card */}
        <div className="bg-gray-900 rounded-3xl p-8 flex flex-col">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-600 rounded-full p-4 w-20 h-20 flex items-center justify-center">
              <Lock className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-10">Free Plan</h2>

          <div className="space-y-6 flex-grow">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full border border-gray-500 mt-1 flex-shrink-0"></div>
              <span>Basic market analysis</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full border border-gray-500 mt-1 flex-shrink-0"></div>
              <span>Limited investment recommendations</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full border border-gray-500 mt-1 flex-shrink-0"></div>
              <span>Standard portfolio tracking</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full border border-gray-500 mt-1 flex-shrink-0"></div>
              <span>Daily market updates</span>
            </div>
          </div>

          <div className="mt-10">
            <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Start Trial
            </button>
          </div>
        </div>

        {/* Pro Plan Card */}
        <div className="bg-purple-950 rounded-3xl p-8 flex flex-col relative">
          <div className="absolute top-4 right-4">
            <div className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">Premium</div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="bg-purple-600 rounded-full p-4 w-20 h-20 flex items-center justify-center">
              <img
                src={AiIconImage}
                alt="AI Icon"
                width={100}
                height={100}
                className="text-white rounded-full"
              />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-10">Pro Plan</h2>

          <div className="space-y-6 flex-grow">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span>AI-powered predictive market analysis</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span>Access to exclusive investment opportunities</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span>Priority insights and personalized strategies</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span>Advanced portfolio optimization tools</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 mb-6">
            <div className="bg-purple-600 rounded-xl p-4 text-center">
              <div className="text-sm mb-1">Monthly Plan</div>
              <div className="text-2xl font-bold">Only 50 Hive Token</div>
              <div className="text-3xl mt-1 text-green-400">(Early bird)</div>
              <div className="text-xl font-bold">45 Hive Tokens</div>
            </div>
            <div className="bg-purple-600 rounded-xl p-4 text-center">
              <div className="text-sm mb-1">Annual Plan</div>
              <div className="text-4xl font-bold">99 Hive Token </div>
              <div className="bg-white text-purple-900 text-sm py-1 px-2 rounded mt-2 font-medium">Get 50% OFF</div>
            </div>
          </div>

          <button className="w-full bg-white text-purple-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Get Premium
          </button>
        </div>
      </div>
    </div>
  )
}




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

