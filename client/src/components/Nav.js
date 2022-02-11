import React from "react";
import Logo from "./Logo";
import { NavContainer } from "./styled/nav.styled";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  let navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <NavContainer>
      <Logo onClick={handleGoHome} label='Mooovies' size='1.2rem' />
      <Search />
    </NavContainer>
  );
};

export default Nav;
