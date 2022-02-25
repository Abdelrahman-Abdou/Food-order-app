import CartContext from "./Cart-Context";
import React, { useReducer } from 'react'

const defaultCartState = {
  items: [],
  totalValue: 0
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedValue = state.totalValue + action.item.price * action.item.amount
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)

    const existingItem = state.items[existingItemIndex]
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalValue: updatedValue
    }
  } else if (action.type === 'REMOVE') {
    const removedItemIndex = state.items.findIndex(item => item.id === action.id)
    const removedItem = state.items[removedItemIndex]

    let updatedCartItems;
    if (removedItem.amount > 1) {
      let updatedRemovedItem = { ...removedItem, amount: removedItem.amount -= 1 }
      updatedCartItems = [...state.items]
      updatedCartItems[removedItemIndex] = updatedRemovedItem
      console.log(updatedCartItems)

      let updatedValue = state.totalValue - removedItem.price
      return {
        items: updatedCartItems,
        totalValue: updatedValue
      }

    } else if (removedItem.amount === 1) {
      let updatedRemovedItems = state.items.filter(item => item.id !== action.id)
      let updatedValue = state.totalValue - removedItem.price
      return {
        items: updatedRemovedItems,
        totalValue: updatedValue
      }
    }

  }
  else {
    return defaultCartState
  }
}

const CartContextProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState)
  const addItemsToCartHandler = (item) => {
    dispatchAction({ type: 'ADD', item: item })
  }
  const removeItemsFromCartHandler = (id) => {
    dispatchAction({ type: 'REMOVE', id: id })
  }
  const cartCtx = {
    items: cartState.items,
    totalAmount: cartState.totalValue,
    addItem: addItemsToCartHandler,
    removeItem: removeItemsFromCartHandler,
  }

  return <CartContext.Provider value={ cartCtx }>
    { props.children }
  </CartContext.Provider>
}

export default CartContextProvider;