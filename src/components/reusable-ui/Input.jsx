import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({value, onChange,Icon, ...restProps}) {
    //state
    

    //comportement
    
    //render
  return (
    <InputStyled>
        {Icon && Icon}
        <input
          value={value}
          onChange={onChange}
          type="text"
          {...restProps}
        ></input>
      </InputStyled>
  )
}


const InputStyled = styled.div`

    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon-login {
      font-size: ${theme.fonts.size.SM};
      margin-right: 8px;
      color: ${theme.colors.greyMedium};
    }

    input {
      border: none;
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.dark};
      width: 100%;
      outline: none; // enleve la bordure quand on clique dessus
      
      &::placeholder {
      background-color: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
    }
`
    

    