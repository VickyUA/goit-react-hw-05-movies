import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from '../api/api';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [genre, setGenre] = useState([]);

  useEffect(() => {
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
  const score = Number(movie.vote_average) * 10;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <button type="button">Go back</button>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
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
      <p>Additional information</p>

      <ul>
        <li>
          <Link to="/movies/:movieId/cast">Cast</Link>
        </li>
        <li>
          <Link to="/movies/:movieId/reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
