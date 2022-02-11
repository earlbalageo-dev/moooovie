import styled from "styled-components";

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #202124;
  border-radius: 5px;
  padding: 0 0.5rem;
  color: #e8eaed;
  outline: none;

  span {
    margin: 0 0.5rem;
  }
  form {
    flex: 1;
  }
  input {
    width: 100%;
    padding: 0.5rem 0;
    background-color: transparent;
    flex-grow: 1;
    outline: none;
    border: none;
  }
  max-width: 450px;
`;

export { SearchBar };
