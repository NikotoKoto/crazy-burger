import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Basket from "./Basket";
import Admin from "../admin/Admin";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";

export default function Main() {
  //state
  const { isModeAdmin } = useContext(OrderContext);
  //comportement

  //render
  return (
    <MainStyled>
      <Basket /> 
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
   background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-columns: 25% 1fr;

  //Cacher la scrollbar pour tous les navigateurs
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* cacher la scrollbar pour IE, Edge et Firefox */
  -ms-overflow-style: none; /* IE et Edge */
  scrollbar-width: none; /* Firefox */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`;
