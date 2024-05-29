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
        <h1>Bienvenue {username}</h1>
        <Navbar />
        <Link to="/">
          <button>Deconnexion</button>
        </Link>
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
}
`
