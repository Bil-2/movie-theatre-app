import React from "react";

const MovieCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img src={image} alt={title} className="rounded mb-2" />
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default MovieCard;
