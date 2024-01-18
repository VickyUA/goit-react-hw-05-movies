import { getTrendingMovies } from '../api/api';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled('div')`
  h1 {
    margin-left: 20px;
    color: #36034b;
  }

  li {
    list-style-type: circle;
    font-size: 18px;
    color: #20012c;
    font-weight: 400;
    padding: 2px;
  }

  &.active {
    color: #14855f;
  }
`;

export default function Home() {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const moviesFetched = await getTrendingMovies();
        setTrendingMovie([...moviesFetched.results]);
      } catch (error) {
        console.log(error);
        // } finally {
        //   setIsLoading(false);
        // }
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
            {movie.title}
            {movie.name}
          </li>
        ))}
      </ul>
    </StyledDiv>
  );
}
