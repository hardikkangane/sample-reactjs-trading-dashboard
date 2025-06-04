
import Header from "@/components/Header";
import TradingPanel from "@/components/TradingPanel";
import MarketData from "@/components/MarketData";

const Trade = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Trading</h1>
          <p className="text-gray-600 mt-2">Execute trades and manage your positions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <MarketData />
          </div>
          <div>
            <TradingPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Trade;
