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
        setCast([...actors]);
      } catch (error) {
        console.log(error);
      }
    };
    getActors();
  }, [movieId]);

  console.log(cast);

  return (
    <div>
      <h3>Cast</h3>
      {/* {genre.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
      <p>Additional information</p> */}
    </div>
  );
}
