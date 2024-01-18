import { getSearch } from '../api/api';
import { useState, useEffect } from 'react';

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
      // finally {
      //   setIsLoading(false);
      // }
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
      <ul>
        {searchList.map(movie => (
          <li key={movie.id}>
            {movie.title}
            {movie.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
