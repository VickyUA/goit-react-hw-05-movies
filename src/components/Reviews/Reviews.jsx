import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from '../../api/api';

export default function Reviews(id) {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const getReview = async () => {
      try {
        const review = await getReviews(movieId);
        setReviews([...review.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>Sorry, no information found...</p>
      ) : (
        <div>
          {reviews.map(reviews => (
            <li key={reviews.id}>
              <h3>Author: {reviews.author_details.name}</h3>
              <p>{reviews.content}</p>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
