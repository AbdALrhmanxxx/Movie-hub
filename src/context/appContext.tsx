import React, { createContext, useContext, useState, ReactNode } from "react";
import { Movie, CartItem } from "../types";
import { movies } from "../data/movies";

interface AppContextType {
  movies: Movie[];
  favorites: Movie[];
  cart: CartItem[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  addToCart: (movieId: number) => void;
  removeFromCart: (movieId: number) => void;
  updateCartItemQuantity: (movieId: number, quantity: number) => void;
  isInFavorites: (movieId: number) => boolean;
  isInCart: (movieId: number) => boolean;
  getCartItemQuantity: (movieId: number) => number;
  getCartTotal: () => number;
  rateMovie: (movieId: number, rating: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export  const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [moviesList, setMoviesList] = useState<Movie[]>(movies);
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === movie.id)
        ? prevFavorites
        : [...prevFavorites, movie]
    );
  };

  const removeFromFavorites = (movieId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId)
    );
  };

  const isInFavorites = (movieId: number) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const addToCart = (movieId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.movieId === movieId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.movieId === movieId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { movieId, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (movieId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.movieId !== movieId));
  };

  const updateCartItemQuantity = (movieId: number, quantity: number) => {
    setCart((prevCart) =>
      quantity > 0
        ? prevCart.map((item) =>
            item.movieId === movieId ? { ...item, quantity } : item
          )
        : prevCart.filter((item) => item.movieId !== movieId)
    );
  };

  const isInCart = (movieId: number) => {
    return cart.some((item) => item.movieId === movieId);
  };

  const getCartItemQuantity = (movieId: number) => {
    return cart.find((item) => item.movieId === movieId)?.quantity || 0;
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const movie = moviesList.find((m) => m.id === item.movieId);
      return total + (movie ? movie.price * item.quantity : 0);
    }, 0);
  };

  const rateMovie = (movieId: number, rating: number) => {
    setMoviesList((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, rating } : movie
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        movies: moviesList,
        favorites,
        cart,
        addToFavorites,
        removeFromFavorites,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        isInFavorites,
        isInCart,
        getCartItemQuantity,
        getCartTotal,
        rateMovie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
