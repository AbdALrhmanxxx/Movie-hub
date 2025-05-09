import React from "react";
import { useAppContext } from "../context/appContext";
import MovieCard from "../components/MovieCard";
import { Heart } from "lucide-react";

const FavoritesPage: React.FC = () => {
  const { favorites } = useAppContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Heart size={24} className="text-red-500 mr-2" />
        <h2 className="text-2xl font-bold">Your Favorites</h2>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Heart size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg mb-2">
            Your favorites list is empty
          </p>
          <p className="text-gray-400">
            Add movies to your favorites to see them here
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
