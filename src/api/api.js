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

export { getTrendingMovies, getSearch };

// const response = await axios.get(
//     `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}`
//   );
