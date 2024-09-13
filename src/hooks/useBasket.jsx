import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

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
    } else {
      // 2ieme cas : Le produit doit être incrementer de 1
      const indexOfBasketProductToIncrement = basket.findIndex(
        (basketProduct) => basketProduct.id === productToAdd.id
      );
      // Increment the quantity of the product
      basketCopy[indexOfBasketProductToIncrement].quantity += 1;

      setBasket(basketCopy)
    }
  };

  return { basket, handleAddToBasket };
};
