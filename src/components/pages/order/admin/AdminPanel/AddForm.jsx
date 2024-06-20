import InputFields from "../../../../reusable-ui/inputFields";
import styled from "styled-components";
import { useState } from "react";
import { PiHamburgerLight } from "react-icons/pi";
import { FaCameraRetro } from "react-icons/fa";
import { LuEuro } from "react-icons/lu";
import { theme } from "../../../../../theme";
export default function AddForm() {
  //state
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price,setPrice] = useState("");
  //comportement
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeUrl = (event) => {
    setUrl(event.target.value);
  };
  const handleChangePrix = (event) => {
  setPrice(event.target.value);
  };

  const [addSuccess, setAddSuccess] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setUrl("");
    setPrice("");
    setAddSuccess(true)

  };
  //render
  return (
    <AddFormStyled action="submmit" onSubmit={handleSubmit}>
      <div><img className="realImage" src={url}/>Aucune Image</div>
      <div>
        <InputFields
          value={name}
          placeholder="Nom du produit"
          Icon={<PiHamburgerLight />}
          onChange={handleChangeName}
        />
        
        <InputFields
          value={url}
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
padding-left: 75px;
padding-top: 30px;
display: grid;
grid-template-columns: 30% 1fr;

  .realImage {
    width: 215px;
    height: 120px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.greyMedium};
    align-items: center;
    justify-content: center;
  }
  .add{
    display: flex;
    align-items: center;
   

    .buttonAdd{
    margin-right: 15px;
    width: 275px;
    height: 34px;
    justify-content: center;
    align-items: center;
    cursor: pointer;


    border-radius: 5px;
    border: none;
    

    background-color: #60BD4F;
    color: white;

    &:active{
      transform: scale(0.95);
    }
  }
  p{
    color: #60BD4F;
    animation-name: disapear;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-iteration-count: inherit;
  }

  @keyframes disapear {
    0%{opacity:1;}
    50%{opacity:1;}
    100%{opacity:0;}    
  }

  }

  
`;
