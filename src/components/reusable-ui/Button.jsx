import styled from "styled-components";

export default function Button({IconButton,label, ...restProps}) {
  return (
    <ButtonStyled>
      <button {...restProps}>{label}</button>
      {IconButton && IconButton}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: #f56a2c;
  border-radius: 5px;
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
    font-size: 15px;
    background-color: #f56a2c;
    color: white;
    
    cursor: pointer;
  }

  .icon-button {
    color: white;
    font-size: 15px;
  }

  &:hover {
    background-color: white;

    button {
      color: #f56a2c;
      background-color: white;
    }

    .icon-button {
      color: #f56a2c;
      background-color: white;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;
