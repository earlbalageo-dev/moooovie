import styled from "styled-components";

const Card = styled.div`
  height: 160px;
  display: flex;
  margin: 1.5rem 1rem;
  background-color: #303134;
  border-radius: 10px;
  @media (min-width: 600px) {
    flex-direction: column;
    width: 300px;
    height: 550px;
  }
`;

const MoviePoster = styled.img`
  display: block;
  border-radius: 10px;
  width: 35%;
  @media (min-width: 600px) {
    width: 100%;
    height: 400px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  strong {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
  }
  p {
    color: grey;
  }
`;

const CardFooter = styled.div`
  margin-top: auto;

  @media (min-width: 600px) {
    margin-top: 2rem;
  }
`;

export { Card, MoviePoster, Content, CardFooter };
