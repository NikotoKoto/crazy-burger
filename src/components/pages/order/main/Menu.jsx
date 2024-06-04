import { useState } from "react";
import styled from 'styled-components'
import Cards from "../../../reusable-ui/Cards";
import {fakeMenu2} from "../../../../fakeData/fakeMenu"
import { formatPrice } from "../../../../utils/math";
export default function Menu() {

  //state
const [menu] = useState(fakeMenu2)
  //comportement

  //render
  return (
    <MenuStyled>
        {menu.map(
          ({id, title, imageSource,price}) => (
            (
              <Cards
                key={id}
                imageFood={imageSource}
                Title={title}
                leftDescription={formatPrice(price)}
                foodAltImg={title}
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
