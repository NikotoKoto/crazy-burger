import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ className, Logo, label, onClick }) {
  //state

  //comportmement

  //render
  return (
    <TabStyled  className={className} onClick={onClick}>
        
        <div className="logo">{Logo}</div>
        {label && <span className="label">{label}</span>}
      
    </TabStyled>
  );
}

const TabStyled = styled.button`
  padding: 0 22px;
  height: 43px;
 position: relative;
 left: 5%;
 top: 1px;
 cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  
//fonts
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};



  background: ${theme.colors.background_white};
  box-shadow: 0px -6px 8px -2px #0000001A;

//border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;


    &:hover{
      border-bottom: 2px solid white;
    }

    .logo{
      display: flex;
    }

    .label{
      margin-left: 13px;
    }
  
`;
