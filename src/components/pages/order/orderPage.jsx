import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
  // state
  const { username } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [imageSource, setImageSource] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [addSuccess, setAddSuccess] = useState(false);

  const newItem = {
    id: menu.length + 1,
    imageSource: imageSource,
    title: title,
    price: price,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  };


  // comportements

  const handleAddProduct = (event) => {
    event.preventDefault();
    const copyMenu = [...menu];
    const updateMenu = [newItem, ...copyMenu];
    setMenu(updateMenu);
    setTitle("");
    setImageSource("");
    setPrice("");
    setAddSuccess(true);
    setTimeout(() => setAddSuccess(false), 2000);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAddProduct,
    title,
    setTitle,
    price,
    setPrice,
    imageSource,
    setImageSource,
    addSuccess,
    setAddSuccess,
    newItem,
  };

  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
