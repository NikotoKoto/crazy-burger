import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";


export default function BasketProducts({ basket, isModeAdmin, onDelete}) {
  //state
  const {handleDeleteBasket } = useContext(OrderContext)

//Comportement
  const handleCardBasketDelete = (event,idProductToDelete) => {
    event.stopPropagation()
    handleDeleteBasket(idProductToDelete)
    
  
    }
    //render
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div key={basketProduct.id} className="basket-card">
          <BasketCard
            {...basketProduct}
            imageSource={
              basketProduct.imageSource
                ? basketProduct.imageSource
                : IMAGE_COMING_SOON
            }
            isModeAdmin={isModeAdmin}
            onDelete={(event) => handleCardBasketDelete(event, basketProduct.id)}

          />
        </div>
      ))}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
  }
`;
