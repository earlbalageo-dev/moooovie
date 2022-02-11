import React from "react";
import styled from "styled-components";

const MvButton = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: #482980;
  i {
    padding-right: 0.5rem;
  }
  &:hover {
    filter: brightness(75%);
  }
  &:active {
    filter: brightness(50%);
  }
`;

const Button = ({ onClick, label, color, icon }) => {
  return (
    <MvButton onClick={onClick}>
      {icon && <i className={icon} />}

      <span>{label}</span>
    </MvButton>
  );
};

export default Button;
