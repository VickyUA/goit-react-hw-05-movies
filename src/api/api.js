import axios from 'axios';

const getTrendingMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=bc2265aa30ecd1392b8b84679bff4db4'
  );

  return response.data;
};

const getSearch = async search => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&api_key=bc2265aa30ecd1392b8b84679bff4db4`
  );

  return response.data;
};

const getMovie = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=bc2265aa30ecd1392b8b84679bff4db4`
  );

  return response.data;
};

const getCast = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=bc2265aa30ecd1392b8b84679bff4db4`
  );
  return response.data;
};

const getReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=bc2265aa30ecd1392b8b84679bff4db4`
  );
  return response.data;
};

export { getTrendingMovies, getSearch, getMovie, getCast, getReviews };
