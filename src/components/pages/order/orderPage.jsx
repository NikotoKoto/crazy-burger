import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../reusable-ui/Navbar";
import styled from "styled-components";
import Main from "../../reusable-ui/Main";
import { theme } from "../../../theme";

export default function orderPage() {
  //state
 

  //comportement

  //render
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar 
         />
        <Main/>
        </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`

background-color: orange;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;


    .container{
    background-color: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction:column;
    border-radius: ${theme.borderRadius.round};

    
    
  }
`;
