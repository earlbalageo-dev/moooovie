import React from "react";
import Logo from "../components/Logo";
import Search from "../components/Search";
import { LandingContainer } from "./styled/landing.styled";

const Landing = () => {
  return (
    <LandingContainer>
      <Logo size='3rem' label='OMDb Moooovies' />
      <Search />
    </LandingContainer>
  );
};

export default Landing;
