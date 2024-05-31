import { useState } from "react";
import styled from 'styled-components'
import Cards from "../../../reusable-ui/Cards";
import {fakeMenu2} from "../../../../fakeData/fakeMenu"
export default function Menu() {

  //state
const [products, setProducts] = useState(fakeMenu2)
  //comportement

  //render
  return (
    <MenuStyled>
        {products.map(
          (Menu) => (
            (
              <Cards
                key={Menu.id}
                imageFood={Menu.imageSource}
                Title={Menu.title}
                Price={Menu.price}
              />
            )
          )
        )}

      
      </MenuStyled>
  )
}

const MenuStyled = styled.div`
    display: grid;
    width: 100%;
    grid-column-gap: 20px;
    grid-row-gap: 60px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    justify-items: center;
  
`
