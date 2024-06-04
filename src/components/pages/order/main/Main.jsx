import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Basket from "./Basket";

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding-top: 25px;
  display: grid;
  /*Prepare for basket
  grid-template-columns: 25% 1fr;*/
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1; // permet d'utiliser toute la page de flex
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  overflow: scroll;

  //Cacher la scrollbar pour tous les navigateurs
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* cacher la scrollbar pour IE, Edge et Firefox */
  -ms-overflow-style: none; /* IE et Edge */
  scrollbar-width: none; /* Firefox */

  
`;
