import React from "react";
import styled from "styled-components";
import LogoImg from "../pages/login/assetsLogin/logo-orange.png"
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

  h1 {
    font-family: "Amatic SC", cursive;
    font-size: 75px;
    font-weight: 700;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: center;
    color:#FFA01B;
  }

  img{
    object-fit: contain;
    object-position: center;
    height: 75px;
    width: 75px;
    margin: 0 5px;

  }
`;
