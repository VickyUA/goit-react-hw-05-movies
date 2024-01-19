import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import About from './About';
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
        {/* <StyledLink to="/about">About</StyledLink> */}
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/blog/:postId" element={<BlogPost />} /> */}
      </Routes>
    </StyledApp>
  );
}

{
  /* <Route path="/about" element={<About />}>
  <Route path="mission" element={<Mission />} />
  <Route path="team" element={<Team />} />
  <Route path="reviews" element={<Reviews />} />
</Route> */
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
