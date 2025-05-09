export interface Movie {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  rating: number;
  price: number;
  genre: string[];
  releaseYear: number;
}

export interface CartItem {
  movieId: number;
  quantity: number;
}
