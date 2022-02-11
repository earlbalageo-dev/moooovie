import React from "react";
import styled from "styled-components";

const MLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = ({ size, label, onClick }) => {
  return (
    <MLogo>
      <span onClick={onClick} style={{ fontSize: `${size}` }}>
        {label}
      </span>
    </MLogo>
  );
};

export default Logo;
