import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
    <LoginFormStyled action="submmit" onSubmit={handleSubmit}>
      <h1>Bievenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
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


const LoginFormStyled = styled.form`
  background : ${theme.colors.greyBlue};
  h1 {
    font-size: ${theme.fonts.M};
  }
  h2 {
    font-style: ${theme.fonts};
  }

  button {
    margin-left: 10px;
    background-color: blue;
  }
`;
