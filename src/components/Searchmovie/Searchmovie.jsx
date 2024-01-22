import { useLocation } from 'react-router-dom';
import {
  StyledUl,
  StyledLink,
  StyledLi,
} from 'components/Searchmovie/Searchmovie.styled';

export default function Searchmovie({ movies }) {
  const location = useLocation();

  return (
    <div>
      <StyledUl>
        {movies.map(movie => (
          <StyledLi key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
              {movie.name}
            </StyledLink>
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
}
