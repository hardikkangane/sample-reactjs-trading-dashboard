
import { TrendingUp, TrendingDown } from "lucide-react";

const Portfolio = () => {
  const portfolioData = {
    totalValue: 125750.80,
    todayChange: 2340.50,
    todayChangePercent: 1.89,
    totalGain: 15750.80,
    totalGainPercent: 14.32,
    cash: 15420.30
  };

  const holdings = [
    { symbol: "AAPL", name: "Apple Inc.", shares: 50, price: 185.20, change: 2.50, changePercent: 1.37 },
    { symbol: "GOOGL", name: "Alphabet Inc.", shares: 25, price: 142.80, change: -1.20, changePercent: -0.83 },
    { symbol: "MSFT", name: "Microsoft Corp.", shares: 40, price: 378.85, change: 4.20, changePercent: 1.12 },
    { symbol: "TSLA", name: "Tesla Inc.", shares: 15, price: 248.50, change: -3.80, changePercent: -1.51 }
  ];

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Portfolio Value</h3>
          <p className="text-3xl font-bold text-gray-900">${portfolioData.totalValue.toLocaleString()}</p>
          <div className="flex items-center mt-2">
            {portfolioData.todayChange >= 0 ? (
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
            )}
            <span className={`text-sm font-medium ${portfolioData.todayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${portfolioData.todayChange.toLocaleString()} ({portfolioData.todayChangePercent}%)
            </span>
            <span className="text-sm text-gray-500 ml-1">today</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Gain/Loss</h3>
          <p className="text-3xl font-bold text-green-600">${portfolioData.totalGain.toLocaleString()}</p>
          <div className="flex items-center mt-2">
            <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-sm font-medium text-green-600">
              +{portfolioData.totalGainPercent}%
            </span>
            <span className="text-sm text-gray-500 ml-1">all time</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Cash Available</h3>
          <p className="text-3xl font-bold text-gray-900">${portfolioData.cash.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-2">Ready to invest</p>
        </div>
      </div>

      {/* Holdings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Your Holdings</h3>
        </div>
        <div className="overflow-hidden">
          {holdings.map((holding) => (
            <div key={holding.symbol} className="flex items-center justify-between p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-semibold text-gray-600">{holding.symbol.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{holding.symbol}</h4>
                    <p className="text-sm text-gray-500">{holding.name}</p>
                  </div>
                </div>
              </div>
              
              <div className="text-right mr-8">
                <p className="text-sm font-medium text-gray-900">{holding.shares} shares</p>
                <p className="text-sm text-gray-500">${(holding.shares * holding.price).toLocaleString()}</p>
              </div>

              <div className="text-right mr-8">
                <p className="text-sm font-medium text-gray-900">${holding.price}</p>
                <div className="flex items-center justify-end">
                  {holding.change >= 0 ? (
                    <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600 mr-1" />
                  )}
                  <span className={`text-sm ${holding.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {holding.change >= 0 ? '+' : ''}{holding.changePercent}%
                  </span>
                </div>
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Trade
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
