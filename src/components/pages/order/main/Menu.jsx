
import styled from 'styled-components'
import Cards from "../../../reusable-ui/Cards";
import {fakeMenu2} from "../../../../fakeData/fakeMenu"
export default function Menu() {
  return (
    <MenuStyled>
        {fakeMenu2.map(
          (fakeMenu) => (
            (
              <Cards
                key={fakeMenu.id}
                imageFood={fakeMenu.imageSource}
                Title={fakeMenu.title}
                Price={fakeMenu.price}
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
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin-left: 75px;
  
`
