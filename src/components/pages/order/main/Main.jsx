import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Basket from "./Basket";
import Admin from "../admin/AdminPanel";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";

export default function Main() {
  //state
  const { isModeAdmin } = useContext(OrderContext);
  //comportement

  //render
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: 1fr;
  height: calc(95vh - 10vh);
  border-radius: 0 0 ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  overflow: scroll;

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
