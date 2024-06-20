import { useState } from "react";
import styled from "styled-components";
import Cards from "../../../reusable-ui/Cards";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/math";
import { theme } from "../../../../theme";
export default function Menu() {
  //state
  const [menu] = useState(fakeMenu2);
  //comportement

  //render
  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Cards
          key={id}
          imageFood={imageSource}
          Title={title}
          leftDescription={formatPrice(price)}
          foodAltImg={title}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
   grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  display: grid;
  grid-row-gap: 60px;
  padding: 50px 50px 50px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;

  //Cacher la scrollbar pour tous les navigateurs
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* cacher la scrollbar pour IE, Edge et Firefox */
  -ms-overflow-style: none; /* IE et Edge */
  scrollbar-width: none; /* Firefox */
`;
