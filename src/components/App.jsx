import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Cast from './Cast';
import Reviews from './Reviews';
import Movies from '../pages/Movies';
import NotFound from './NotFound';
import styled from 'styled-components';
import MovieDetails from '../pages/MovieDetails';

export default function App() {
  return (
    <StyledApp>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StyledApp>
  );
}

const StyledLink = styled(NavLink)`
  color: #4c0369;
  padding: 10px;
  text-decoration: none;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  &.active {
    color: #14855f;
  }
`;

const StyledApp = styled('div')`
  padding: 50px 200px;
`;
