import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  return <div>Now showing product with id - {movieId}</div>;
}
