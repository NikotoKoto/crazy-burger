import React from "react";
import Logo from "../Logo";
import styled from "styled-components";
export default function LeftSide() {
  return (
    <LeftSideStyled>
      <Logo  />
    </LeftSideStyled>
  );
}

const LeftSideStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    

    
    
    `;
