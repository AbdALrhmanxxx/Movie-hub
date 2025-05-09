import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import { Search} from "lucide-react";
import MovieCard from "../components/MovieCard";

const HomePage: React.FC = () => {
  const { movies } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  // Extract all unique genres
  const allGenres = Array.from(
    new Set(movies.flatMap((movie) => movie.genre))
  ).sort();

  // Filter and sort movies
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "" || movie.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "year") return b.releaseYear - a.releaseYear;
    return 0; // Default: no sorting
  });

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Discover Movies</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search movies..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Genre Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">All Genres</option>
              {allGenres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="w-full md:w-48">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="rating">Highest Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year">Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {sortedMovies.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No movies found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
