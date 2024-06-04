import { useParams } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import ToggleButton from "../../../reusable-ui/ToggleButton";
export default function RightSide({  IconNav, ...restProps }) {
  //state
  const { username } = useParams();
  //comportement

  //render
  return (
    <RightSideStyled className="toggle-button">
      <ToggleButton
      labelIfUnchecked="Désactiver le mode Admin"
      labelIfChecked="Activer le mode Admin"/>
     <Profile
     username={username}/>
      {IconNav && IconNav}  
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;

   .iconNav {
    width: 40px;
    height: 40px;
    color: ${theme.colors.greyMedium};
  }

 
`;
