import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../reusable-ui/Navbar";
import styled from "styled-components";

export default function orderPage() {
  //state
  const { username } = useParams();

  //comportement

  //render
  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          Navbar
        <h1>Bienvenue {username}</h1>
          <Link to="/">
            <button>Deconnexion</button>
          </Link>
        </div>
        <div className="main">Main</div>
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

    .navbar{
      background-color: blue;
      height: 10vh;
    }
    .main{
      background-color: green;
      flex: 1; // permet d'utiliser toute la page de flex 
    }
    
  }
`;
