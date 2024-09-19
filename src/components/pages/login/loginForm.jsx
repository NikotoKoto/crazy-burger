import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPerson } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import {  authenticateUser  } from "../../../api/user";
import Welcome from "./Welcome";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await authenticateUser(username, password);
    // Si l'authentification échoue (user est null), arrêter le processus
    if (!user) {
      // Ne pas réinitialiser les champs ou rediriger si l'authentification échoue
      return;
    }
      // Si l'authentification réussit, réinitialiser les champs et rediriger
    setUsername("");
    setPassword("");
    navigate(`/order/${user.username}`);  // Utilisez le nom d'utilisateur authentifié
  };


 

  //render
  return (
    <LoginFormStyled action="submmit" onSubmit={handleSubmit}>
      
    <Welcome/>
      <div>
      <TextInput
        value={username}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        className="input-login"
        Icon={<BsPerson className="icon-login" />}
      />

      <TextInput
        value={password}
        onChange={handleChangePassword}
        placeholder={"Entrez mot de passe"}
        required
        type="password"
        className="input-login"
        Icon={<IoIosLock className="icon-login" />}
      />
      <Button
        label="Acceder à mon espace"
        IconButton={<IoChevronForward className="icon-button" />}
      />
      </div>
      
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
  


  .input-login{
    margin-bottom: 15px;
  }
`;
