import React from 'react'
import styled from 'styled-components'
import Button from "./Button"
import { theme } from '../../theme'
export default function Cards({imageFood,foodAltImg,Title, Price,...restProps}) {
  return (
    <CardStyled>
        <div className="imgFood">
        <img src={imageFood} alt={foodAltImg}/>
        vsdsdfdsfqsdfdqsf
        </div>
        
        <div className="infoText">
            <p className='titleCard'>{Title}</p>
            <p>{Price}</p>
            <Button 
            label="Ajouter"
            className="styledButton"/>
        </div>
    </CardStyled>
  )
}
const CardStyled = styled.div`
    width: 205px;
    height: 300px;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow: 0 0 10px black;
    display: flex;
    flex-direction:column;


    .infoText{
        display: flex;
        .titleCard{
        font-size:${theme.fonts.size.P3};
        }
        .styledButton{
        width: 100px;
        height: 40px;
    }
    }
    
`