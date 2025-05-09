import React from "react";
import { Movie } from "../types";
import { Star, Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import { useAppContext } from "../context/appContext";
interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const {
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
    addToCart,
    isInCart,
    getCartItemQuantity,
    updateCartItemQuantity,
  } = useAppContext();

  const handleFavoriteToggle = () => {
    if (isInFavorites(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  const cartQuantity = getCartItemQuantity(movie.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-64">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <button
            onClick={handleFavoriteToggle}
            className={`p-2 rounded-full ${
              isInFavorites(movie.id)
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <Heart
              size={20}
              className={isInFavorites(movie.id) ? "fill-current" : ""}
            />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="ml-1 text-sm">{movie.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {movie.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-lg">${movie.price.toFixed(2)}</span>

          {!isInCart(movie.id) ? (
            <button
              onClick={() => addToCart(movie.id)}
              className="bg-blue-600 text-white px-3 py-1 rounded-md flex items-center"
            >
              <ShoppingCart size={16} className="mr-1" />
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center">
              <button
                onClick={() =>
                  updateCartItemQuantity(movie.id, cartQuantity - 1)
                }
                className="bg-gray-200 p-1 rounded-l-md"
              >
                <Minus size={16} />
              </button>
              <span className="px-3 py-1 bg-gray-100">{cartQuantity}</span>
              <button
                onClick={() => addToCart(movie.id)}
                className="bg-gray-200 p-1 rounded-r-md"
              >
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
