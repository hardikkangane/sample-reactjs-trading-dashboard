
import { useState } from "react";

const TradingPanel = () => {
  const [tradeType, setTradeType] = useState("buy");
  const [symbol, setSymbol] = useState("AAPL");
  const [quantity, setQuantity] = useState("");
  const [orderType, setOrderType] = useState("market");
  const [limitPrice, setLimitPrice] = useState("");

  const currentPrice = 185.20;
  const estimatedCost = quantity ? (parseFloat(quantity) * currentPrice).toFixed(2) : "0.00";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Trade submitted:", { tradeType, symbol, quantity, orderType, limitPrice });
    // Here you would typically send the trade to your backend
    alert(`${tradeType.toUpperCase()} order submitted for ${quantity} shares of ${symbol}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Place Order</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Buy/Sell Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setTradeType("buy")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              tradeType === "buy" ? "bg-green-600 text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => setTradeType("sell")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              tradeType === "sell" ? "bg-red-600 text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Sell
          </button>
        </div>

        {/* Symbol Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Symbol</label>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter symbol"
          />
          <p className="text-sm text-gray-500 mt-1">Current price: ${currentPrice}</p>
        </div>

        {/* Quantity Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Number of shares"
            min="1"
          />
        </div>

        {/* Order Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Order Type</label>
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="market">Market Order</option>
            <option value="limit">Limit Order</option>
            <option value="stop">Stop Order</option>
          </select>
        </div>

        {/* Limit Price (conditional) */}
        {orderType === "limit" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Limit Price</label>
            <input
              type="number"
              value={limitPrice}
              onChange={(e) => setLimitPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter limit price"
              step="0.01"
            />
          </div>
        )}

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Order Summary</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Action:</span>
              <span className="font-medium">{tradeType.toUpperCase()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Symbol:</span>
              <span className="font-medium">{symbol}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Quantity:</span>
              <span className="font-medium">{quantity || "0"} shares</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated {tradeType === "buy" ? "Cost" : "Proceeds"}:</span>
              <span className="font-medium">${estimatedCost}</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!symbol || !quantity}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${
            tradeType === "buy"
              ? "bg-green-600 hover:bg-green-700 disabled:bg-gray-400"
              : "bg-red-600 hover:bg-red-700 disabled:bg-gray-400"
          }`}
        >
          {tradeType === "buy" ? "Place Buy Order" : "Place Sell Order"}
        </button>
      </form>
    </div>
  );
};

export default TradingPanel;
