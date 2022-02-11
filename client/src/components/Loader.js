import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  i {
    padding-bottom: 2rem;
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <i className='fas fa-spinner fa-pulse fa-4x'></i>
      <h3>Loading....</h3>
    </LoaderContainer>
  );
};

export default Loader;
