import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from '../../api/api';

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

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

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {cast.length === 0 ? (
        <p>Sorry, no information found...</p>
      ) : (
        <div>
          <h3>Cast</h3>
          {cast.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                    : defaultImg
                }
                width={100}
                alt="poster"
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
