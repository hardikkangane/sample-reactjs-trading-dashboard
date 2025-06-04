
const TransactionHistory = () => {
  const transactions = [
    {
      id: "1",
      symbol: "AAPL",
      type: "buy",
      quantity: 10,
      price: 182.50,
      total: 1825.00,
      date: "2024-01-15",
      time: "09:30:15",
      status: "completed"
    },
    {
      id: "2",
      symbol: "GOOGL",
      type: "sell",
      quantity: 5,
      price: 145.20,
      total: 726.00,
      date: "2024-01-14",
      time: "14:22:30",
      status: "completed"
    },
    {
      id: "3",
      symbol: "MSFT",
      type: "buy",
      quantity: 15,
      price: 375.80,
      total: 5637.00,
      date: "2024-01-12",
      time: "11:45:22",
      status: "completed"
    },
    {
      id: "4",
      symbol: "TSLA",
      type: "buy",
      quantity: 8,
      price: 252.30,
      total: 2018.40,
      date: "2024-01-10",
      time: "16:15:45",
      status: "completed"
    },
    {
      id: "5",
      symbol: "NVDA",
      type: "sell",
      quantity: 3,
      price: 860.15,
      total: 2580.45,
      date: "2024-01-08",
      time: "10:20:18",
      status: "completed"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Symbol
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{transaction.date}</div>
                  <div className="text-sm text-gray-500">{transaction.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs font-semibold text-gray-600">
                        {transaction.symbol.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{transaction.symbol}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    transaction.type === "buy" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {transaction.type.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.quantity} shares
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${transaction.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  ${transaction.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {transaction.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
