// client/src/data/MovieDataService.js

import MoviesData from './MoviesData';

export const genreData = [
  'Action',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Thriller',
  'Western',
  'Sci-Fi',
];

export const languageData = [
  'English',
  'Hindi',
  'Nepali',
  'French',
  'Spanish',
  'Korean',
  'Japanese',
];

const MovieDataService = {
  getAllMovies: () => {
    return Promise.resolve(MoviesData); // fake API
  },
};

export default MovieDataService;
