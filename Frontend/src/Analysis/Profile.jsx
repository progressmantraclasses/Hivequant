import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Profile Page Components
const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3500/api/profile/john.smith');
        if (response.data.success) {
          setProfileData(response.data.data);
        }
      } catch (error) {
        setError('Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="min-h-screen bg-gray-900 text-white p-6">Loading...</div>;
  if (error) return <div className="min-h-screen bg-gray-900 text-white p-6">{error}</div>;
  if (!profileData) return <div className="min-h-screen bg-gray-900 text-white p-6">No data found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{profileData.username}</h1>
          <p className="text-gray-400">{profileData.email}</p>
          <p className="text-gray-400">Member since: {new Date(profileData.memberSince).toLocaleDateString()}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400">{profileData.phoneNumber}</p>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Portfolio Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400">Total Value</p>
              <p className="text-2xl font-bold">${profileData.portfolio.totalValue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-400">Invested</p>
              <p className="text-2xl font-bold">${profileData.portfolio.invested.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-400">Returns</p>
              <p className="text-2xl font-bold text-green-500">
                ${profileData.portfolio.returns.toLocaleString()} ({profileData.portfolio.returnsPercentage}%)
              </p>
            </div>
            <div>
              <p className="text-gray-400">YTD Performance</p>
              <p className="text-2xl font-bold">{profileData.portfolio.ytdPerformance}%</p>
            </div>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Portfolio Distribution</h2>
          <div className="space-y-2">
            {profileData.portfolio.distribution.map((item) => (
              <div key={item._id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span>{item.name}</span>
                </div>
                <span>{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {profileData.transactions.map((transaction) => (
            <div key={transaction._id} className="flex items-center justify-between border-b border-gray-700 pb-2">
              <div className="flex items-center">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: transaction.iconBg }}
                >
                  {transaction.icon}
                </div>
                <div>
                  <p className="font-semibold">{transaction.type}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p style={{ color: transaction.textColor }}>{transaction.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Goals & Security Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Investment Goals</h2>
          <div className="flex flex-wrap gap-2">
            {profileData.investmentGoals.map((goal, index) => (
              <span 
                key={index}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Security Settings</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Two Factor Authentication</span>
              <span className={profileData.securitySettings.twoFactorEnabled ? "text-green-500" : "text-red-500"}>
                {profileData.securitySettings.twoFactorEnabled ? "Enabled" : "Disabled"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>KYC Verification</span>
              <span className={profileData.securitySettings.kycVerified ? "text-green-500" : "text-red-500"}>
                {profileData.securitySettings.kycVerified ? "Verified" : "Unverified"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">AI Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileData.aiInsights.map((insight) => (
            <div key={insight._id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{insight.icon}</span>
                <h3 className="font-bold">{insight.title}</h3>
              </div>
              <p className="text-gray-300">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;