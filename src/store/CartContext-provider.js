
import CartContext from "./Cart-Context";
import React, { useReducer } from 'react'

const defaultCartState = {
  items: [],
  totalValue: 0
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {

    const updatedItems = state.items.concat(action.item)
    const updatedValue = state.totalValue + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalValue:updatedValue
    }
  } else {
    return defaultCartState
  }
}

const CartContextProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState)
  const addItemsToCartHandler = (item) => {
    dispatchAction({ type: 'ADD', item: item })
  }
  const removeItemsFromCartHandler = (id) => {
    dispatchAction({type:'REMOVE', id:id})
  }
  console.log(cartState)

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