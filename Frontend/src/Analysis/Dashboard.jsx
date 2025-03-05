import React, { useState } from 'react';

const Dashboard = () => {
  // Sample data
  const [cryptoHoldings] = useState({
    BTC: 0.5,
    ETH: 125,
    BNB: 86
  });
  
  const [profit] = useState({
    total: 1029.37,
    growth: 8.43,
    months: [
      { month: 'Jan', value: 320 },
      { month: 'Feb', value: 580 },
      { month: 'Mar', value: 420 },
      { month: 'Apr', value: 680 },
      { month: 'May', value: 380 },
      { month: 'Jun', value: 520 }
    ]
  });
  
  const [transactions] = useState([
    { crypto: 'Ethereum', action: 'buy', amount: '+5.00 ETH', percentage: '+0.89%' },
    { crypto: 'Monero', action: 'buy', amount: '+0.90 XMR', percentage: '+0.16%' },
    { crypto: 'Tether', action: 'buy', amount: '+2500.00 USDT', percentage: '+3.09%' },
    { crypto: 'Solana', action: 'sell', amount: '-2.70 SOL', percentage: '-0.08%' }
  ]);
  
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  
  // Menu items
  const menuItems = [
    { name: 'Dashboard', icon: '□' },
    { name: 'Overview', icon: '◫' },
    { name: 'Orders', icon: '☰' },
    { name: 'Transactions', icon: '⇄' },
    { name: 'Markets', icon: '◎' },
    { name: 'Payment', icon: '💳' },
    { name: 'Information', icon: 'ℹ' },
    { name: 'Notifications', icon: '🔔' }
  ];
  
  // Mock data for the chart
  const chartHeight = 200;
  const generateChartPath = (baseline, variance) => {
    let path = '';
    const points = 20;
    for (let i = 0; i < points; i++) {
      const x = (i / (points - 1)) * 100;
      const randomVariance = Math.random() * variance;
      const y = baseline - (i * 3) - randomVariance;
      path += `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }
    return path;
  };

  return (
    <div className="flex h-screen w-full bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 p-4">
        <div className="flex items-center mb-8">
          <div className="bg-white p-2 rounded">
            <div className="text-black font-bold">◆ ProfitWave</div>
          </div>
        </div>
        
        <div className="px-2 py-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-gray-800 rounded-md py-2 px-4 pl-10 text-sm"
            />
            <span className="absolute left-3 top-2">🔍</span>
          </div>
        </div>
        
        <div className="mt-6">
          {menuItems.map(item => (
            <div 
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`flex items-center p-3 mb-2 rounded-md cursor-pointer ${
                activeMenu === item.name ? 'bg-gray-800' : 'hover:bg-gray-800'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.name}</span>
              {item.name === 'Notifications' && (
                <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-md">4</span>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-auto pt-8 flex items-center">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">S</div>
          <span className="ml-3">Sebastian</span>
          <span className="ml-auto">⚙️</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              <div className="text-gray-400">Dashboard/</div>
              <div>Overview</div>
            </div>
            
            <div className="flex space-x-4">
              <div className="px-3 py-1 bg-gray-800 rounded-md">BTC: {cryptoHoldings.BTC}</div>
              <div className="px-3 py-1 bg-gray-800 rounded-md">ETH: {cryptoHoldings.ETH}</div>
              <div className="px-3 py-1 bg-gray-800 rounded-md">BNB: {cryptoHoldings.BNB}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Profit Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg">Profit</h2>
                <div className="flex items-center text-sm text-gray-400">
                  <span>6 month</span>
                  <span className="ml-2">□</span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-3xl font-bold">${profit.total.toFixed(2)}</div>
              </div>
              
              <div className="mt-6 h-40 flex items-end space-x-2">
                {profit.months.map((data, index) => (
                  <div key={data.month} className="flex flex-col items-center flex-1">
                    <div className="w-full rounded-sm bg-purple-700 hover:bg-purple-600" style={{ height: `${data.value / 7}%` }}>
                      {index === 3 && (
                        <div className="text-xs text-center mt-2 text-purple-200">
                          Apr: {profit.growth}%
                        </div>
                      )}
                    </div>
                    <div className="text-xs mt-2 text-gray-400">{data.month}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Transactions Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg">Transactions</h2>
                <div className="px-2 py-1 text-xs rounded bg-gray-700">All</div>
              </div>
              
              <div className="mt-4 space-y-4">
                {transactions.map((tx, index) => (
                  <div key={index} className="flex items-center p-2 hover:bg-gray-700 rounded">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      {tx.crypto === 'Ethereum' && '⬨'}
                      {tx.crypto === 'Monero' && '◎'}
                      {tx.crypto === 'Tether' && '₮'}
                      {tx.crypto === 'Solana' && '≡'}
                    </div>
                    <div>
                      <div>{tx.crypto}</div>
                      <div className="text-xs text-gray-400">{tx.action}</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className={tx.action === 'buy' ? 'text-green-400' : 'text-red-400'}>
                        {tx.amount}
                      </div>
                      <div className="text-xs text-gray-400">{tx.percentage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sales Chart */}
            <div className="bg-gray-800 rounded-lg p-6 col-span-2">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg">Sales chart</h2>
                <div className="flex items-center text-sm text-gray-400">
                  <span>08.08.2024</span>
                  <span className="ml-2">□</span>
                </div>
              </div>
              
              <div className="mt-2 flex space-x-4 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                  <span>BTC</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  <span>ETH</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  <span>BNB</span>
                </div>
              </div>
              
              <div className="mt-4 h-64 w-full relative">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d={generateChartPath(90, 10)} stroke="#FF4136" fill="none" strokeWidth="0.5" />
                  <path d={generateChartPath(70, 15)} stroke="#0074D9" fill="none" strokeWidth="0.5" />
                  <path d={generateChartPath(50, 12)} stroke="#2ECC40" fill="none" strokeWidth="0.5" />
                  
                  {/* Highlight point */}
                  <circle cx="65" cy="25" r="1.5" fill="#0074D9" />
                  <circle cx="65" cy="25" r="0.8" fill="white" />
                  
                  {/* Value callout */}
                  <text x="68" y="20" fontSize="2.5" fill="white">$53,450</text>
                  
                  <circle cx="55" cy="40" r="1.5" fill="#FF4136" />
                  <circle cx="55" cy="40" r="0.8" fill="white" />
                  
                  <text x="49" y="36" fontSize="2.5" fill="white">$487.40</text>
                </svg>
                
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div key={i}>{`${(i * 2).toString()}.00PM`}</div>
                  ))}
                </div>
                
                <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between text-xs text-gray-400">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i}>{`${((5-i) * 1000) + 2000}`}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




