
import Header from "@/components/Header";
import TransactionHistory from "@/components/TransactionHistory";

const History = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Transaction History</h1>
          <p className="text-gray-600 mt-2">View all your past trades and transactions</p>
        </div>
        
        <TransactionHistory />
      </main>
    </div>
  );
};

export default History;
