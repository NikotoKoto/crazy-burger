import { createContext } from "react";


export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    productSelected: {},
    setProductSelected: () => {},

    menu: [],

    handleAddProduct: () => {},

    setAddSuccess: () => {},

    handleDelete: () => {},


    resetMenu: () => {},

    handleEditProduct: () => {},

    basket: [],
    handleAddToBasket : () => {},
    handleDeleteBasket : () => {},
    
})