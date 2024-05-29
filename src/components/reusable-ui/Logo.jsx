import React from "react";
import styled from "styled-components";
import LogoImg from "../pages/login/assetsLogin/logo-orange.png"
import { theme } from "../../theme";
export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src={LogoImg} alt="logo_CrazeeBurger"/>
      <h1> BURGER</h1>
    </LogoStyled>
  );
}
const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);


  h1 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: center;
    color:${theme.colors.primary};
  }

  img{
    object-fit: contain;
    object-position: center;
    height: 50px;
    width: 80px;
    margin: 0 ${theme.gridUnit /2};

  }
`;
