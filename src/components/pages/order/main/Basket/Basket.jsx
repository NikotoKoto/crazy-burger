import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/math";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import { useContext } from "react";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";

export default function Basket() {
  

  //state
  const { basket, isModeAdmin } = useContext(OrderContext);
  const isBasketEmpty = basket.length === 0;

  const totalToPay = basket.reduce((total, basketProduct) => {
    
     total += basketProduct.price * basketProduct.quantity
     return total
  },0)

  // Comportement 


 //render 
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(totalToPay)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} isModeAdmin={isModeAdmin} />}
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
