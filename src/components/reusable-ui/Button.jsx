import styled from "styled-components";
import { theme } from "../../theme";

export default function Button({ IconButton, label, className, ...restProps }) {
  return (
    <ButtonStyled className={className}>
      <button {...restProps}>{label}</button>
      {IconButton && IconButton}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 18px 25px;
  margin: 18px 0;
  align-items: center;
  cursor: pointer;
  border: none;

  button {
    border: none;
    font-size: ${theme.fonts.size.SM};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    cursor: pointer;
  }

  .icon-button {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.SM};
  }

  &:hover {
    background-color: ${theme.colors.white};
    
    button {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      
    }

    .icon-button {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;
