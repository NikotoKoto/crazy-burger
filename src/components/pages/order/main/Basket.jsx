import styled from "styled-components"
import { theme } from "../../../../theme"
import { formatPrice } from "../../../../utils/math"
import { useContext } from "react"
import OrderContext from "../../../../context/OrderContext"

export default function Basket() {

  const {menu} = useContext(OrderContext)
  //state 

  //comportement 

  //render
  return (
    <BasketStyled>
      <div className="head">
        <span>Total</span>
        
        <div className="price">0.00 €</div>
        </div>
      <div className="body"><span>Votre commande est vide </span></div>
      <div className="footer">Codé avec 💘 et react.JS</div>
    </BasketStyled>

  )
}


const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.shadows.strong};
    

    
  .head{
    
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px 0 15px ;

    background: ${theme.colors.dark};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};

    .price{
      color: ${theme.colors.primary};

    }
  }

  .body{
    
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.background_white};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyDark};
    font-size: ${theme.fonts.size.P4};
  }

  .footer{
    background: ${theme.colors.dark};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P2};
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 0 ${theme.borderRadius.extraRound};
  }
`
