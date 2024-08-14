import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/math";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Footer from "./Footer";
import Total from "./Total";
import Container from "../../../../reusable-ui/Container";

export default function Basket() {
  const { menu } = useContext(OrderContext);
  //state

  //comportement

  //render
  return (
    <BasketStyled>
      <Container>
        <Total
        amountToPay={formatPrice(0)} />
      </Container>
      <div className="body">
        <span>Votre commande est vide </span>
      </div>
      <Container>
        <Footer />
      </Container>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;

  .body {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.background_white};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyDark};
    font-size: ${theme.fonts.size.P4};
    box-shadow: ${theme.shadows.basket};
  }
`;
