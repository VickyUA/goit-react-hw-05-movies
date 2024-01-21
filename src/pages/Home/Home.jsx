import { getTrendingMovies } from '../../api/api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledDiv, StyledLink } from './Home.styled';

export default function Home() {
  const [trendingMovie, setTrendingMovie] = useState([]);

  const location = useLocation();

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
      <ul>
        {trendingMovie.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
              {movie.name}
            </StyledLink>
          </li>
        ))}
      </ul>
    </StyledDiv>
  );
}
