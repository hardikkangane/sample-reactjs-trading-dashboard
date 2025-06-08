
import { TrendingUp, User, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600" />
{/*               <span className="ml-2 text-xl font-bold text-gray-900">TradePro</span> */}
              <span className="ml-2 text-xl font-bold text-gray-900">TradeMaster</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/") 
                  ? "text-gray-900" 
                  : "text-gray-500 hover:text-green-600"
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/markets" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/markets") 
                  ? "text-gray-900" 
                  : "text-gray-500 hover:text-green-600"
              }`}
            >
              Markets
            </Link>
{/*             <Link 
              to="/trade" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/trade") 
                  ? "text-gray-900" 
                  : "text-gray-500 hover:text-green-600"
              }`}
            >
              Trade
            </Link>
            <Link 
              to="/history" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/history") 
                  ? "text-gray-900" 
                  : "text-gray-500 hover:text-green-600"
              }`}
            >
              History
            </Link> */}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
              <User className="h-4 w-4 mr-2" />
              Account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
