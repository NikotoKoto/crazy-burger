import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function RightSide({ username, IconNav, ...restProps }) {
  return (
    <RightSideStyled>
      <div className="rightSide1">
        <div className="hey">
          Hey, <span>{username}</span>
        </div>
        <Link to="/">
          <a>Deconnexion</a>
        </Link>
      </div>
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

  .hey {
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greyBlue};

    span {
      font-size: ${theme.fonts.size.P0};
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.primary};
    }
  }


  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: ${theme.colors.greyMedium};
  
  a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: ${theme.colors.primary};
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    a:hover {
      color: ${theme.colors.primary};
      transform: translateY(-2px);
    }

    a:hover::after {
      transform: scaleX(1);
    }
  }

 
  
  .iconNav {
    width: 30px;
    height: 30px;
    color: ${theme.colors.greyMedium};
  }
`;
