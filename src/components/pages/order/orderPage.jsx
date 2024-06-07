import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";

export default function orderPage() {
  //state
  const [isModeAdmin, setisModeAdmin] = useState(false);

  //comportement
  const orderContextValue = {
    isModeAdmin,
    setisModeAdmin,
  };
  //render
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.round};
  }
`;
