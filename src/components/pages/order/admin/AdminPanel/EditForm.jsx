import { FaCameraRetro } from "react-icons/fa";
import { LuEuro } from "react-icons/lu";
import { PiHamburgerLight } from "react-icons/pi";
import styled from "styled-components";
import InputFields from "../../../../reusable-ui/inputFields";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function EditForm() {

  //state
const {productSelected} = useContext(OrderContext)
  //comportement

  //render
  return (
    <EditFormStyled action="submit">

      <div className="realImageEdit">

          <img src={productSelected.imageSource} alt={productSelected.title} />

      </div>
      <div>
        <InputFields
          name= {productSelected.title}
          value={productSelected.title}
          placeholder="Nom du produit"
          Icon={<PiHamburgerLight />}
          onChange=""
        />

        <InputFields
          name={productSelected.imageSource}
          alt={productSelected.imageSource}
          value={productSelected.imageSource}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          Icon={<FaCameraRetro />}
          onChange=""
        />

        <InputFields
          name={productSelected.price}
          value={productSelected.price}
          placeholder="Prix"
          Icon={<LuEuro />}
          onChange=""
        />
        <div className="clickOnCard">
        <span> Cliquez sur un produit du menu pour le modifier</span>
        <HiCursorClick />
        </div>
        
      </div>

    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
 padding-top: 20px;
  padding-left: 20px;
  height: 100%;
  width: 70%;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .realImageEdit {
    grid-area: 1/1/2/2;
    border-radius: 5px;
    display: flex;
    border: 1px solid ${theme.colors.greyMedium};
    align-items: center;
    justify-content: center;

    img{
      width: 221px;
      height: 148px;
      object-fit: contain;
    }
  }
  
  .clickOnCard{
    display: flex;
    align-items: center;
    font-size: ${theme.fonts.size.P3};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};

    span{
      padding-right: 10px;
    }
  }`;
