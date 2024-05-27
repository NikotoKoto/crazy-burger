import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { theme } from "../../../theme";
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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bievenue chez nous !</h1>
      <br />
      <h2>Conectez-vous</h2>
      <input
        value={username}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prenom"
        required
      ></input>
      <button>Acceder à votre espace</button>
    </LoginFormStyled>
  );
}



/**Styled components */

const LoginFormStyled = styled.form `
  border: 1px solid ${theme.colors.redSecondary};
  padding-bottom : 10px;
 h1{
  font-size: ${theme.fonts.M}
 }

 button{
  margin-left: 10px;
  background-color: #FF82FF; 
 }

`