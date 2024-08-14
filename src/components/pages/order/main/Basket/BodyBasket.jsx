import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function BodyBasket() {
  return (
    <BodyBasketStyled>
        <span className='empty-message'>Votre commande est vide.</span>
    </BodyBasketStyled>
  )
}

const BodyBasketStyled = styled.div`
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    
    
    .empty-message{
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    text-align: center;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyDark};
    font-size: ${theme.fonts.size.P4};
    }
`