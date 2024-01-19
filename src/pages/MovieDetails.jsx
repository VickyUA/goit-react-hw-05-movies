import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from '../api/api';
import styled from 'styled-components';

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

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
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
  );
}
