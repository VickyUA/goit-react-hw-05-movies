import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from '../api/api';
// import styled from 'styled-components';

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getActors = async () => {
      try {
        const actors = await getCast(movieId);
        setCast([...actors.cast]);
      } catch (error) {
        console.log(error);
      }
    };
    getActors();
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      {cast.map(cast => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            width={100}
            alt="poster"
          />
          <p>{cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </div>
  );
}
