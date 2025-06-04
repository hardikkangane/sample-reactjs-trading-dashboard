
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import MarketData from "@/components/MarketData";
import TradingPanel from "@/components/TradingPanel";
import TransactionHistory from "@/components/TransactionHistory";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Portfolio & Market Data */}
          <div className="lg:col-span-2 space-y-8">
            <Portfolio />
            <MarketData />
            <TransactionHistory />
          </div>
          
          {/* Right Column - Trading Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <TradingPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
