import Navbar from "./Navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";

export default function orderPage() {
  //state
 

  //comportement

  //render
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar 
         />
        <Main/>
        </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`

background-color: ${theme.colors.primary};
height: 100vh;
display: flex;
align-items: center;
justify-content: center;


    .container{
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction:column;
    border-radius: ${theme.borderRadius.round};

    
    
  }
`;
