import { useState } from "react"
import { deepClone, findObjectById, findIndexById, removeObjectById } from "../utils/array"
import { setLocalStorage } from "../utils/window"

export const useBasket = () => {
  const [basket, setBasket] = useState([])

  const handleAddToBasket = (idProductToAdd, username) => {
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, username, basketCopy)
      return
    }

    createNewBasketProduct(idProductToAdd, basketCopy,username, setBasket)
  }

  const incrementProductAlreadyInBasket = (idProductToAdd, username, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
    basketCopy[indexOfBasketProductToIncrement].quantity += 1
    setBasket(basketCopy)
    setLocalStorage(username, basketCopy)
  }

  const createNewBasketProduct = (idProductToAdd, basketCopy, username, setBasket) => {
    // we do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newBasket = [newBasketProduct, ...basketCopy]
    setBasket(newBasket)
    setLocalStorage(username, newBasket)
  }

  const handleDeleteBasketProduct = (idBasketProduct,username) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket)
    setBasket(basketUpdated)
    setLocalStorage(username, basketUpdated)
  }

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct }
}
