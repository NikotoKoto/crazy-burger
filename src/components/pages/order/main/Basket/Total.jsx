import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function Total({amountToPay}) {
  return (
    <TotalStyled>
        <span>Total</span>
        <span>{amountToPay}</span></TotalStyled>
  )
}

const TotalStyled = styled.div`
justify-content: space-between;
height: 100%;
align-items: center;
display: flex;
padding: 0 16px;

letter-spacing: 2px;
font-family: ${theme.fonts.family.stylish};
color: ${theme.colors.primary};
font-size: ${theme.fonts.size.P4};
`