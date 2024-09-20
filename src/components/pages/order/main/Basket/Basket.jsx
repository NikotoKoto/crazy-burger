import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import { useContext } from "react";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";
import { isEmpty } from "../../../../../utils/array";
import Loader from "../MainRightSide/Menu/Loader";

export default function Basket() {
  

  //state
  const { basket,menu } = useContext(OrderContext);
  


  // Comportement 


 //render 
  return (
    <BasketStyled>
      <Total/>
      {isEmpty(basket) ? <EmptyBasket isLoading={menu === undefined}/> : <BasketProducts/>}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head{
    position: sticky;
    top: 0;
  }

  .footer{
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;
