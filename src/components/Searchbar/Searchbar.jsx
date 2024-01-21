import { useState } from 'react';
import { StyledInput, StyledBtn } from './Searchbar.styled';

export default function Searchbar({ submit }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = e => {
    setSearchInput(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchInput.trim() === '') {
      alert('Type your search...');
      return;
    }
    submit(searchInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="searchInput"
        autoComplete="off"
        autoFocus
        value={searchInput}
        onChange={handleSearchChange}
      />
      <StyledBtn type="submit">
        <span>Search</span>
      </StyledBtn>
    </form>
  );
}
