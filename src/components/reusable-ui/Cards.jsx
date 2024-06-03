import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { theme } from "../../theme";
export default function Cards({
  imageFood,
  foodAltImg,
  Title,
  Price,
  ...restProps
}) {
  return (
    <CardStyled>
      <div className="imgFood">
        <img src={imageFood} alt={foodAltImg} />
      </div>

      <div className="infoText">
        <p className="titleCard">{Title}</p>
        <div className="description">
          <p>{Price} €</p>
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
  box-shadow: -8px 8px 20px 0px #00000033;
  display: flex;
  flex-direction: column;

  .imgFood {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px; /* Définissez une hauteur fixe pour vos images */

    transform: scale(0.6);

    img {
      height: 100%;
    }
  }

  .infoText {
    display: flex;
    flex-direction: column;
    .titleCard {
        padding-left: 10px;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      font-family: "Amatic SC", cursive;
    }

    .description{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px 0 15px;

        p{
            font-size: ${theme.fonts.size.P0};
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
