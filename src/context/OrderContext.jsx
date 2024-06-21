import { createContext } from "react";


export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},
    
    menu: [],
    setMenu: ()=> {},
    handleAddProduct: () => {},
    setAddSuccess: () => {},

    title: "",
    setTitle:()=>{},

    imageSource:"",
    setImageSource: ()=> {},

    price:"",
    setPrice: () => {},
    
    newItem: [],

})