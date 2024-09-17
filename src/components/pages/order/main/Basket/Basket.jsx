import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/math";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import { useContext } from "react";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";
import { isEmpty } from "../../../../../utils/array";

export default function Basket() {
  

  //state
  const { basket } = useContext(OrderContext);
  

  // Comportement 


 //render 
  return (
    <BasketStyled>
      <Total/>
      {isEmpty(basket) ? <EmptyBasket /> : <BasketProducts/>}
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
