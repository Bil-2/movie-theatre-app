import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((m) => m.id.toString() === id);
        setMovie(selected);
      });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
      <p className="mt-2">{movie.description}</p>
      <p className="mt-2 text-sm text-gray-400">Genre: {movie.genre}</p>
      <Link
        to={`/booking/${movie.id}`}
        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded"
      >
        Book Tickets
      </Link>
    </div>
  );
}

export default MovieDetails;
