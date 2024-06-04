import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../../theme";

export default function Profile({ username, ...restProps }) {
  return (
    <ProfileStyled>
      <p>
        Hey <span>{username}</span>
      </p>
      <Link to="/">
        <a>Se déconnecter</a>
      </Link>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greyBlue};
  display: flex;
  flex-direction: column;
  padding-left: 50px;

  span {
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.primary};
  }

  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.size.XS};

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
`;
