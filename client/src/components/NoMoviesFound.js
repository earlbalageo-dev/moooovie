import React from "react";
import styled from "styled-components";

const NoContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NoMoviesFound = () => {
  return (
    <NoContainer>
      <h1>No Movies Found ......</h1>
    </NoContainer>
  );
};

export default NoMoviesFound;
