import styled from "styled-components";
import { theme } from "../../theme";
import Cards from "./Cards";

export default function Main() {
  return (
    <MainStyled>
    {/*<div className="basketMenu">toto</div>*/} 
      <div className="menu">
        <Cards 
        Title="Burger Smoke BBQ"
        Price="5,65€"/>
        <Cards />
        <Cards />
        <Cards 
        />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding-top: 25px;
  display: flex;
  flex-direction: row;
  flex: 1; // permet d'utiliser toute la page de flex
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};


  .basketMenu{
    width: 550px;
    height: 250px;
    background-color: blue;
  }
  .menu {
    display: grid;
    padding: 50px 0 50px 0;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;
