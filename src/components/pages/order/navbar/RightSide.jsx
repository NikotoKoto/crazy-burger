import { useParams } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import { theme } from "../../../../theme";

export default function RightSide({  IconNav, ...restProps }) {
  //state
  const { username } = useParams();
  //comportement

  //render
  return (
    <RightSideStyled>
      <button className="buttonAdmin">Button admin</button>
     <Profile
     username={username}/>
      {IconNav && IconNav}     
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 50px 0 0;

   .iconNav {
    width: 40px;
    height: 40px;
    color: ${theme.colors.greyMedium};
  }

  .buttonAdmin{
    padding: 10px 40px;
    border-radius: 25px;
    background-color: purple;
    cursor: pointer;

    &:active{
      transform: scale(0.95);
    }
  }
`;
