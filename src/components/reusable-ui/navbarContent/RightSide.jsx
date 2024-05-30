import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Profile from "./Profile";

export default function RightSide({  IconNav, ...restProps }) {
  //state
  const { username } = useParams();
  //comportement

  //render
  return (
    <RightSideStyled>
      <div className="buttonAdmin">Button admin</div>
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
`;
