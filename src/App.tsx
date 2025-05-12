import { useState } from "react";
import { AppProvider } from "./context/appContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "favorites":
        return <FavoritesPage />;
      case "cart":
        return <CartPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
        <main className="flex-grow">{renderPage()}</main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">MovieHub</h3>
                <p className="text-sm text-gray-400">
                  Your ultimate movie shopping destination
                </p>
              </div>
              <div className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} MovieHub. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
