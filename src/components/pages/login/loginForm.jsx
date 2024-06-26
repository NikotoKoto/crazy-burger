import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPerson } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import TextInput from "../../reusable-ui/Input";
import Button from "../../reusable-ui/Button";

export default function LoginForm() {
  //state
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //comportements
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
    navigate(`/order/${username}`);
  };

  //render
  return (
    <LoginFormStyled action="submmit" onSubmit={handleSubmit}>
      <h1>Bievenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>

      <TextInput
        value={username}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPerson className="icon-login" />}
      />

      <TextInput
        value={password}
        onChange={handleChangePassword}
        placeholder={"Entrez mot de passe"}
        required
        type="password"
        Icon={<IoIosLock className="icon-login" />}
      />
      <Button
        label="Acceder à mon espace"
        IconButton={<IoChevronForward className="icon-button" />}
      />
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
  padding: 2.5rem ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit *5}px;
  }
  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }
  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    margin: 20px 10px 10px;
  }
`;
