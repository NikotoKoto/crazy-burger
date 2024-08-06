import InputFields from "../../../../reusable-ui/inputFields";
import styled from "styled-components";
import { useContext } from "react";
import { PiHamburgerLight } from "react-icons/pi";
import { FaCameraRetro, FaRegCheckCircle } from "react-icons/fa";
import { LuEuro } from "react-icons/lu";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { useState } from "react";

const EmptyProduct = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};
export default function AddForm() {
  //state

  const { handleAddProduct, addSuccess } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EmptyProduct);

  //comportement
  const handleSubmit = (event) => {
    event.preventDefault()
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAddProduct(newProductToAdd);
  };
  const handleChange = (event) => {
    const {name, value} = event.target
    console.log("regarde ici", event.target.value)
    setNewProduct({ ...newProduct, [name]: value });
  };

  //render
  return (
    <AddFormStyled action="submmit" onSubmit={handleSubmit}>
      <div className="realImage">
        {newProduct.imageSource.length != 0 ? (
          <img src={newProduct.imageSource} />
        ) : (
          <p>Aucune Image</p>
        )}
      </div>
      <div>
        <InputFields
          name = "title"
          value={newProduct.title}
          placeholder="Nom du produit"
          Icon={<PiHamburgerLight />}
          onChange={handleChange}
        />

        <InputFields
          name = "imageSource"
          alt ={newProduct.imageSource}
          value={newProduct.imageSource}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          Icon={<FaCameraRetro />}
          onChange={handleChange}
        />

        <InputFields
          name ="price"
          value={newProduct.price ? newProduct.price : ""}
          placeholder="Prix"
          Icon={<LuEuro />}
          onChange={handleChange}
        />

        <div className="add">
          <button className="buttonAdd">Ajouter un nouveau produit</button>
          {addSuccess && (
            <div className="check">
              <FaRegCheckCircle />
              <span>Ajouté avec succès</span>
            </div>
          )}
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
      //grid-template-columns: ;
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
    .check {
      color: #60bd4f;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 25px;
      animation-name: disapear;
      animation-duration: 2s;
      animation-timing-function: ease;
      animation-iteration-count: inherit;

      span {
        padding-left: 15px;
      }
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
