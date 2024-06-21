import InputFields from "../../../../reusable-ui/inputFields";
import styled from "styled-components";
import { useContext} from "react";
import { PiHamburgerLight } from "react-icons/pi";
import { FaCameraRetro } from "react-icons/fa";
import { LuEuro } from "react-icons/lu";
import { theme } from "../../../../../theme";

import OrderContext from "../../../../../context/OrderContext";

export default function AddForm() {
  //state
 
  const { handleAddProduct,addSuccess, price, setPrice, title, setTitle,imageSource,setImageSource } = useContext(OrderContext)


 

  //comportement
  const handleChangeName = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeUrl = (event) => {
    setImageSource(event.target.value);
  };
  const handleChangePrix = (event) => {
    setPrice(event.target.value);
  };

  

  

 
  //render
  return (
    <AddFormStyled action="submmit" onSubmit={handleAddProduct}>
      <div className="realImage">
        {imageSource.length != 0 ? <img src={imageSource} /> : <p>Aucune Image</p>}
      </div>
      <div>
        <InputFields
          value={title}
          placeholder="Nom du produit"
          Icon={<PiHamburgerLight />}
          onChange={handleChangeName}
        />

        <InputFields
          value={imageSource}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)t"
          Icon={<FaCameraRetro />}
          onChange={handleChangeUrl}
        />

        <InputFields
          value={price}
          placeholder="Prix"
          Icon={<LuEuro />}
          onChange={handleChangePrix}
        />

        <div className="add">
          <button className="buttonAdd">Ajouter un nouveau produit</button>
          {addSuccess && <p>Ajouté avec succès</p>}
        </div>
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  padding-top: 20px;
  padding-left: 20px;
  height: 100%;
  width: 70%;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .realImage {
    grid-area: 1/1/2/2;
    border-radius: 5px;
    display: flex;
    border: 1px solid ${theme.colors.greyMedium};
    align-items: center;
    justify-content: center;
  }
  .add {
    display: flex;
    align-items: center;

    .buttonAdd {
      grid-area: 4/-2/-1/-1;
      display: grid;
      width: 50%;
      height: 30px;
      grid-template-columns: ;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      border-radius: 5px;
      border: none;

      background-color: #60bd4f;
      color: white;

      &:active {
        transform: scale(0.95);
      }
    }
    p {
      color: #60bd4f;
      animation-name: disapear;
      animation-duration: 2s;
      animation-timing-function: ease;
      animation-iteration-count: inherit;
    }

    @keyframes disapear {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;
