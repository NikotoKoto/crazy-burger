import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPerson } from "react-icons/bs";

export default function LoginForm() {
  //state
  const navigate = useNavigate();
  const [username, setUsername] = useState("");


  //comportements
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    navigate(`/order/${username}`);
  };


  //render
  return (
    <LoginFormStyled action="submmit" onSubmit={handleSubmit}>
      <h1>Bievenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div className="input-container">
      <BsPerson className="icon-login"/>
        <input
          value={username}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prenom"
          required
        ></input>
      </div>
      <button >Acceder à votre espace</button>
    </LoginFormStyled>
  );
}

/**Styled components */


const LoginFormStyled = styled.form`

  font-family: "Amatic SC", cursive;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  border-radius: 5px;


  hr {
    border: 1.5px solid #f56a2c;
  }
  h1 {
    color: white;
    font-size: ${theme.fonts.P5};
  }
  h2 {
    color: blue;
    font-size: ${theme.fonts.P4};
  }

  .input-container{
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon-login{
      font-size:15px;
      margin-right: 8px;
      color:#93a2b1;
    }

    input{
      border:none;
      font-size: 15px;
      color: #17161a;
      width: 100%;
    }

    &::placeholder{
      background-color: white;
      color: lightgray;
    }
  }

 
  button {
    width: 350px;
    border-radius: 5px;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-color: #f56a2c;
    color: white;
    border: none;
    cursor: pointer;
  }


  
`;
