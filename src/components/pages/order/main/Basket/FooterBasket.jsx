import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function FooterBasket() {
  return (
    <FooterBasketStyled>Codé avec 💘 et react.JS</FooterBasketStyled>
  )
}

const FooterBasketStyled = styled.span`
    background: ${theme.colors.dark};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P2};
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    border-radius: 0 0 0 ${theme.borderRadius.extraRound};
`