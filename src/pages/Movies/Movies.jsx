import { getSearch } from '../../api/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';
import Searchmovie from 'components/Searchmovie/Searchmovie';

export default function Movies() {
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = searchInput => {
    if (searchInput === '') {
      return setSearchParams({});
    }
    setSearchParams({ name: searchInput });
  };

  useEffect(() => {
    const searchedMovie = searchParams.get('name');
    if (!searchedMovie) {
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
  }, [searchParams]);

  return (
    <div>
      <Searchbar submit={handleFormSubmit} />
      <Searchmovie movies={searchList} />
    </div>
  );
}
