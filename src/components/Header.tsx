import { useState } from "react";
import { Film, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useAppContext } from "../context/appContext";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { cart, favorites } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { name: "Home", key: "home" },
    { name: "Favorites", key: "favorites", count: favorites.length },
    { name: "Cart", key: "cart", count: totalItems },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-evenly items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <Film size={28} className="mr-2" />
            <h1 className="text-xl font-bold">MovieHub</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`flex items-center cursor-pointer hover:text-blue-200 transition-colors ${
                  currentPage === item.key ? "border-b-2 border-white" : ""
                }`}
              >
                {item.key === "favorites" && (
                  <Heart size={20} className="mr-1" />
                )}
                {item.key === "cart" && (
                  <ShoppingCart size={20} className="mr-1" />
                )}
                <span>{item.name}</span>
                {item.count !== undefined && item.count > 0 && (
                  <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                    {item.count}
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            {navItems.map((item) => (
              <div
                key={item.key}
                onClick={() => {
                  onNavigate(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center py-2 cursor-pointer hover:bg-blue-600 px-2 rounded ${
                  currentPage === item.key ? "bg-blue-600" : ""
                }`}
              >
                {item.key === "favorites" && (
                  <Heart size={20} className="mr-2" />
                )}
                {item.key === "cart" && (
                  <ShoppingCart size={20} className="mr-2" />
                )}
                <span>{item.name}</span>
                {item.count !== undefined && item.count > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                    {item.count}
                  </span>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
