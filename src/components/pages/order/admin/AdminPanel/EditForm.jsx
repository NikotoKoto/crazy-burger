import { FaCameraRetro } from "react-icons/fa";
import { LuEuro } from "react-icons/lu";
import { PiHamburgerLight } from "react-icons/pi";
import styled from "styled-components";
import InputFields from "../../../../reusable-ui/inputFields";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

export default function EditForm() {

  //state
const {productSelected,handleEditProduct, setProductSelected} = useContext(OrderContext)
//const [newProductEdited, setNewProductEdited] = useState(EMPTY_PRODUCT);
  //comportement


  /*const handleSubmitProduct = (event) => {
    event.preventDefault()
    const newProductUpdated = {
      ...newProductEdited,
    };
    
  }*/

  const handleChange = (event) => {
    const {name, value} = event.target
    const newProductUpdated = { ...productSelected, [name]: value };
    setProductSelected(newProductUpdated)
    handleEditProduct(newProductUpdated)
  };

  //render
  return (
    <EditFormStyled action="submit" onSubmit="{handleSubmitProduct}">

      <div className="realImageEdit">

          <img src={productSelected.imageSource} alt={productSelected.title} />

      </div>
      <div>
        <InputFields
          name= "title"
          value={productSelected.title}
          placeholder="Nom du produit"
          Icon={<PiHamburgerLight />}
          onChange={handleChange}
        />

        <InputFields
          name="imageSource"
          alt={productSelected.imageSource}
          value={productSelected.imageSource}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          Icon={<FaCameraRetro />}
          onChange={handleChange}
        />

        <InputFields
          name="price"
          value={productSelected.price}
          placeholder="Prix"
          Icon={<LuEuro />}
          onChange={handleChange}
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
