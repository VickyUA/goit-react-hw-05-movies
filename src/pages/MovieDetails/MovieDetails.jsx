import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovie } from '../../api/api';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, StyledDiv } from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state?.from || location.state?.from2 || '/');

  const [movie, setMovie] = useState({});
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const getFilm = async () => {
      try {
        const chosenMovie = await getMovie(movieId);
        setMovie({ ...chosenMovie });
        setGenre([...chosenMovie.genres]);
      } catch (error) {
        console.log(error);
      }
    };
    getFilm();
  }, [movieId]);

  const release = String(movie.release_date).substring(0, 4);
  const score = Math.trunc(Number(movie.vote_average) * 10);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <StyledLink to={goBack.current}>Go back</StyledLink>
      <StyledDiv>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        </div>
        <div>
          <h1>
            {movie.original_title} ({release})
          </h1>
          <p>User score: {score}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {genre.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </div>
      </StyledDiv>
      <h3>Additional information</h3>

      <ul>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
