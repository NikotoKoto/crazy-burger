import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";

export default function OrderPage() {
  // state
  const { username } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [addSuccess, setAddSuccess] = useState(false);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  



  // comportements

 

  
  
  const handleAddProduct = (newProductToAdd) => {
     
    const copyMenu = JSON.parse(JSON.stringify(menu));
    const updateMenu = [newProductToAdd, ...copyMenu];
    setMenu(updateMenu);
    setAddSuccess(true);
    setTimeout(() => setAddSuccess(false), 2000);
  };

  const handleDelete = (idToDelete) => {
    //1. Copie du state
    const menuCopy = JSON.parse(JSON.stringify(menu))
    //2. Manip de la copie du state
    const updatedMenu = menuCopy.filter((product) => product.id !== idToDelete)  
    //3. Update du state
    setMenu(updatedMenu)
  }
  
  const handleEditProduct = (newProductEdited) => {
     //1. Copie du state

    const copyMenu = JSON.parse(JSON.stringify(menu));

    //2. Manip de la copie du state
    const indexOfProductToEdit = menu.findIndex((product) => product.id === newProductEdited.id)
    
    console.log("indexOfProductToEdit: ",indexOfProductToEdit)
    
    copyMenu[indexOfProductToEdit] = newProductEdited

    //3. Update du state

    setMenu(copyMenu)
  }
  

  const resetMenu = () => {
    setMenu(fakeMenu.LARGE)
   }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAddProduct,
    addSuccess,
    setAddSuccess,
    handleDelete,
    setMenu,
    resetMenu,
    productSelected,
    setProductSelected,
    handleEditProduct
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
