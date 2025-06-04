
import { TrendingUp, TrendingDown } from "lucide-react";

const MarketData = () => {
  const marketData = [
    { symbol: "SPY", name: "SPDR S&P 500", price: 454.20, change: 2.80, changePercent: 0.62 },
    { symbol: "QQQ", name: "Invesco QQQ Trust", price: 378.90, change: -1.50, changePercent: -0.39 },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 875.30, change: 15.20, changePercent: 1.77 },
    { symbol: "AMD", name: "Advanced Micro Devices", price: 142.75, change: -2.30, changePercent: -1.59 },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 151.85, change: 3.45, changePercent: 2.33 },
    { symbol: "META", name: "Meta Platforms Inc.", price: 485.20, change: 8.90, changePercent: 1.87 }
  ];

  const indices = [
    { name: "S&P 500", value: "4,547.20", change: "+28.40", changePercent: "+0.63%" },
    { name: "NASDAQ", value: "14,238.90", change: "-15.80", changePercent: "-0.11%" },
    { name: "DOW", value: "36,124.50", change: "+142.30", changePercent: "+0.40%" }
  ];

  return (
    <div className="space-y-6">
      {/* Market Indices */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {indices.map((index) => (
            <div key={index.name} className="text-center p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500">{index.name}</h4>
              <p className="text-xl font-bold text-gray-900 mt-1">{index.value}</p>
              <p className={`text-sm font-medium mt-1 ${index.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {index.change} ({index.changePercent})
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stock Watchlist */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Market Movers</h3>
        </div>
        <div className="overflow-hidden">
          {marketData.map((stock) => (
            <div key={stock.symbol} className="flex items-center justify-between p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center flex-1">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sm font-semibold text-gray-600">{stock.symbol.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{stock.symbol}</h4>
                  <p className="text-sm text-gray-500">{stock.name}</p>
                </div>
              </div>
              
              <div className="text-right mr-6">
                <p className="text-lg font-semibold text-gray-900">${stock.price}</p>
                <div className="flex items-center justify-end">
                  {stock.change >= 0 ? (
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%)
                  </span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                  Buy
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                  Sell
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketData;
