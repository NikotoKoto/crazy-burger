import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { theme } from "../../theme";
export default function Cards({
  imageFood,
  foodAltImg,
  Title,
  leftDescription,
  ...restProps
}) {

  //State

  //comportement

  //render
  return (
    <CardStyled>
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
  box-shadow: -8px 8px 20px 0px #00000033;
  display: grid;
  grid-template-rows: 65% 1fr;

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
