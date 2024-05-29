import styled from "styled-components";

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

    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon-login {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
      width: 100%;
      outline: none; // enleve la bordure quand on clique dessus
      
    }

    &::placeholder {
      background-color: white;
      color: lightgray;
    }

    
`