import styled from "styled-components";
import { theme } from "../../theme";
import Cards from "./Cards";
import { fakeMenu2 } from "../../fakeData/fakeMenu";

export default function Main() {
  return (
    <MainStyled>
      {<div className="basketMenu">toto</div>}
      <div className="menu">
        {fakeMenu2.map(
          (fakeMenu) => (
            (
              <Cards
                key={fakeMenu.id}
                imageFood={fakeMenu.imageSource}
                Title={fakeMenu.title}
                Price={fakeMenu.price}
              />
            )
          )
        )}

      
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding-top: 25px;
  display: grid;
  grid-template-columns: 25% 75%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1; // permet d'utiliser toute la page de flex
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  overflow-y:auto;


  .basketMenu {
    
    background-color: blue;
  }
  .menu {
    display: grid;
    width: 100%;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin-left: 75px;
  }
`
