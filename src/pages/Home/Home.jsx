import { getTrendingMovies } from '../../api/api';
import { useState, useEffect } from 'react';
import { StyledDiv } from './Home.styled';
import Searchmovie from 'components/Searchmovie/Searchmovie';

export default function Home() {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const moviesFetched = await getTrendingMovies();
        setTrendingMovie([...moviesFetched.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getTrending();
  }, []);

  return (
    <StyledDiv>
      <h1>Trending movies</h1>
      <Searchmovie movies={trendingMovie} />
    </StyledDiv>
  );
}
