import { useContext } from "react";
import styled from "styled-components";
import Cards from "../../../reusable-ui/Cards";

import { formatPrice } from "../../../../utils/math";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import Button from "../../../reusable-ui/Button";

const IMAGE_BY_DEFAULT = "/public/images/coming-soon.png"
export default function Menu() {
  //state

  const { isModeAdmin, menu, handleDelete } = useContext(OrderContext)

 
  //comportement
 

  //render
  return (
    <MenuStyled>
      
       {menu.length === 0 ?(
        isModeAdmin ? (
          <div className="emptyMenuAdmin">
          <p>Le menu est vide ?</p>
          <p> Clique ci-dessous pour le réinitialiser</p>
          <Button
          label="Générer de nouveau produits" 
          />
          </div>
        ):(
        <div className="comingSoonImg">
          <img
          src="/public/images/coming-soon.png"/>
        </div>)
       ):
      (
        
      menu.map(({ id, title, imageSource, price }) => (
        
        <Cards
          key={id}
          imageFood={imageSource ? imageSource : IMAGE_BY_DEFAULT  }
          Title={title}
          leftDescription={formatPrice(price)}
          foodAltImg={title}
          isModeAdmin={isModeAdmin} 
          handleDelete={handleDelete}       
          />
      )))}
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

  .comingSoonImg{
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .emptyMenuAdmin{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    p{
      font-family: "Amatic SC", cursive;
      font-size: ${theme.fonts.size.P4};
      text-transform: uppercase;
    }
  }
`;
