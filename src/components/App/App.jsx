import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { StyledLink, StyledApp, StyledHeader } from './App.styled';

const Home = lazy(() => import('../../pages/Home/Home'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const NotFound = lazy(() => import('../NotFound/NotFound'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StyledApp>
        <StyledHeader>
          <nav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
        </StyledHeader>
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
    </Suspense>
  );
}
