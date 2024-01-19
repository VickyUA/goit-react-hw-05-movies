import { getSearch } from '../api/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Movies() {
  const [searchInput, setSearchInput] = useState('');
  const [searchedMovie, setSearchedMovie] = useState('');
  const [searchList, setSearchList] = useState([]);

  const handleSearchChange = e => {
    setSearchInput(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchInput.trim() === '') {
      alert('Type your search...');
      return;
    }
    setSearchedMovie(searchInput);
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          value={searchInput}
          onChange={handleSearchChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <StyledUl>
        {searchList.map(movie => (
          <StyledLi key={movie.id}>
            <StyledLink to={`${movie.id}`}>
              {movie.title}
              {movie.name}
            </StyledLink>
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
}

const StyledUl = styled('ul')`
  padding: 0;
`;

const StyledLink = styled(Link)`
  color: #20012c;
  padding: 6px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
`;

const StyledLi = styled('li')`
  list-style-type: none;
  line-height: 1.5em;
  margin-left: 0;
`;
