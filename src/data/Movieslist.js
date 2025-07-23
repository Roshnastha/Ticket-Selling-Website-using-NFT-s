// client/src/data/MovieList.jsx (or wherever you are rendering the movie list)

import React, { useEffect, useState } from 'react';
import MovieDataService from './MovieDataService';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieDataService.getAllMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img src={movie.poster} alt={movie.title} className="w-full h-60 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-sm text-gray-500">{movie.genre}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
