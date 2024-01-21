import { getSearch } from '../../api/api';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { StyledUl, StyledLink, StyledLi } from './Movies.styled';
import Searchbar from '../../components/Searchbar/Searchbar';

export default function Movies() {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get('name');

  const location = useLocation();

  const handleFormSubmit = searchInput => {
    setSearchedMovie(searchInput);
    const query = searchInput;
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ name: query });
  };

  useEffect(() => {
    if (searchedMovie === '') {
      return;
    }

    const getMovie = async () => {
      try {
        const gotMovie = await getSearch(searchedMovie);
        setSearchList([...gotMovie.results]);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [searchedMovie]);

  return (
    <div>
      <Searchbar submit={handleFormSubmit} />
      <StyledUl>
        {searchList.map(movie => (
          <StyledLi key={movie.id}>
            <StyledLink to={`${movie.id}`} state={{ from2: location }}>
              {movie.title}
              {movie.name}
            </StyledLink>
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
}
