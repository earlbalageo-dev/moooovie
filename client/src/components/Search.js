import React, { useState } from "react";
import { SearchBar } from "./styled/search.styled";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`, { replace: true });
  };
  return (
    <SearchBar>
      <i className='fas fa-search'></i>
      <span>|</span>
      <form action='submit' onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='search movies'
          required
        />
      </form>
    </SearchBar>
  );
};

export default Search;
