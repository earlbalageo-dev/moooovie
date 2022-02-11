import React from "react";
import { Card, MoviePoster, Content, CardFooter } from "./styled/movie.styled";
import Button from "./Button";
import noImage from "../images/noImage.png";
const Movie = ({ movie }) => {
  const { Title, Poster, Year } = movie;

  const handleButton = () => {
    console.log("button has been clicked");
  };

  const handleNoImageFound = (e) => {
    e.target.src = noImage;
  };

  return (
    <Card>
      <MoviePoster src={Poster} alt={Title} onError={handleNoImageFound} />
      <Content>
        <strong>{Title}</strong>
        <p>{Year}</p>
        <CardFooter>
          <Button
            label='Button'
            icon='fas fa-mouse'
            onClick={handleButton}
            color='#482980'
          />
        </CardFooter>
      </Content>
    </Card>
  );
};

export default Movie;
