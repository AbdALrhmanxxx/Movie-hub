import { Movie } from "../types";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterUrl:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    price: 12.99,
    genre: ["Sci-Fi", "Action", "Thriller"],
    releaseYear: 2010,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    price: 9.99,
    genre: ["Drama"],
    releaseYear: 1994,
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterUrl:
      "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    price: 11.99,
    genre: ["Action", "Crime", "Drama"],
    releaseYear: 2008,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterUrl:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    price: 10.99,
    genre: ["Crime", "Drama"],
    releaseYear: 1994,
  },
  {
    id: 5,
    title: "The Lord of the Rings: The Return of the King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    posterUrl:
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    price: 14.99,
    genre: ["Action", "Adventure", "Drama"],
    releaseYear: 2003,
  },
  {
    id: 6,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    posterUrl:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    price: 9.99,
    genre: ["Drama", "Romance"],
    releaseYear: 1994,
  },
];
