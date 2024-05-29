import LoginForm from "./loginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import background from "./assetsLogin/burger-background.jpg";

export default function loginPage() {
  //render
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url(${background}) rgba(0, 0, 0, 0.7);
  background-size: cover; // ajouter l'image qui prend toute la place
  background-blend-mode: darken; // mettre le fond d'écran en plus sombre
  background-position: center; // centrer l'image
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;
