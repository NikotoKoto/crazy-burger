import styled from "styled-components";
import Button from "./Button";
import { theme } from "../../theme";
import { ImCross } from "react-icons/im";



export default function Cards({
  imageFood,
  foodAltImg,
  Title,
  leftDescription,
  hasDeleteButton,
  onDelete,
  ...restProps
}) {

  //State


  //comportement

  //render
  return (
    <CardStyled>
      {hasDeleteButton && <button onClick ={onDelete} className="cross" aria-label="delete-button"><ImCross aria-label="cross-img"/>
      </button>}
      <div className="imgFood">
        <img src={imageFood} alt={foodAltImg} />
      </div>

      <div className="infoText">
        <p className="titleCard">{Title}</p>
        <div className="description">
          <div className="leftDescription">{leftDescription}</div>
          <Button label="Ajouter" className="styledButton" />
        </div>
      </div>
    </CardStyled>
  );
}
const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  border-radius: 15px;
  box-shadow:${theme.shadows.medium};
  display: grid;
  position: relative;
  grid-template-rows: 65% 1fr;

  .cross{
    position: absolute;
    display: flex;
    height: 20px;
    width: 20px;
    top: 15px;
    right: 15px;
    cursor: pointer;

    justify-content: center;
    align-items: center;
    
    border-radius: 10px;
    font-size: 10px;
    border: none;


    color: white;
    background-color: ${theme.colors.primary};

    &:hover{
      background-color: red;
      transform: scale(1.15);
    }

    &:active{
      transform: scale(0.95);
    }
  }

  .imgFood {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px; /* Définissez une hauteur fixe pour vos images */

   

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .infoText {
    display: grid;
    overflow: hidden;
    width: 100%;
    grid-template-rows: 40% 1fr;
    .titleCard {
        padding-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      font-family: "Amatic SC", cursive;
    }

    .description{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px 0 15px;

        .leftDescription{
            font-size: ${theme.fonts.size.SM};
            font-weight: ${theme.fonts.weights.regular};
            color: ${theme.colors.primary};
        }
    }

    


    .styledButton {
      width: 100px;
      height: 40px;
      
      &:hover {
        transition: background-color 0.5s ease;

        button{
            transition: background-color 0.5s ease;
        }
    }
   
  }
}
`
