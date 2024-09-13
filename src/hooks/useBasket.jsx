import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray, findIndex } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    // Copie du state
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket =
      findInArray(productToAdd.id, basketCopy) !== undefined;

    // manip de la copie du state

    // 1 er cas : le produit n'est pas dans le basket
    if (!isProductAlreadyInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };
      const basketUpdated = [newBasketProduct, ...basketCopy];
      // update du state
      setBasket(basketUpdated);
      return;
    }
    // 2ieme cas : the product should increase when I click on it
    const indexOfBasketProductToIncrement = findIndex(
      productToAdd.id,
      basketCopy
    );
    // Increment the quantity of the product
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;

    setBasket(basketCopy);
  };

  return { basket, handleAddToBasket };
};
