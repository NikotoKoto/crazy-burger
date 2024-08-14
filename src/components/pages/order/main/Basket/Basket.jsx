import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/math";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import FooterBasket from "./FooterBasket";
import HeaderBasket from "./HeaderBasket";
import ContainerBasket from "../../../../reusable-ui/ContainerBasket";
import BodyBasket from "./BodyBasket";

export default function Basket() {
  const { menu } = useContext(OrderContext);
  //state

  //comportement

  //render
  return (
    <BasketStyled>
      <ContainerBasket>
        <HeaderBasket amountToPay={formatPrice(0)} />
      </ContainerBasket>
      <BodyBasket />
      <ContainerBasket>
        <FooterBasket />
      </ContainerBasket>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
