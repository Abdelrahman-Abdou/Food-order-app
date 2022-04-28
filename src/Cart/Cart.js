import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../store/Cart-Context';
import { React, useContext, useState } from 'react';
import CartItem from './CartItem';
import CheckingOut from './CheckingOut';
const Cart = (props) => {
  const [formVisible, setFormVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  const cartItemsCxt = useContext(CartContext)
  const addCartItemHandler = (item) => {
    cartItemsCxt.addItem({ ...item, amount: 1 })
  }
  const removeCartItemHandler = (id) => {
    cartItemsCxt.removeItem(id)
  }
  const cartItems = <ul className={ classes['cart-items'] }>
    { cartItemsCxt.items.map((item) => (
      <CartItem
        key={ item.id }
        name={ item.name }
        price={ item.price }
        amount={ item.amount }
        onRemove={ removeCartItemHandler.bind(null, item.id) }
        onAdd={ addCartItemHandler.bind(null, item) }
      />
    ))
    }
  </ul>
  const totalAmount = `$${cartItemsCxt.totalAmount.toFixed(2)}`

  const openFormHandler = () => {
    setFormVisible(true)
  }

  const orderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch('https://food-app-d7291-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartItemsCxt.items
      }),
    });
    setIsSubmitting(false)
    setOrderSubmitted(true)
    cartItemsCxt.clearCartHandler()
  }

  const hasItems = cartItemsCxt.items.length > 0

  const cartDetails = <>
    { cartItems }
    <div className={ classes.total } >
      <span > Total Amount </span>
      <span >{ totalAmount }</span>
    </div>
    <div className={ classes.actions } >
      { formVisible && <CheckingOut
        onSubmit={ orderHandler }
        onCancel={ props.OncloseCart }
      /> }
      { !formVisible && <button className={ classes['button--alt'] }
        onClick={ props.OncloseCart } > Close </button>
      }
      { !formVisible && hasItems && <button className={ classes.button }
        onClick={ openFormHandler }

      > Order </button> }
    </div>
  </>

  const submitting = <p>Sending your order.. please waite!</p>

  const ordered = <>
    <p>Successfully sent the order!</p>
    <div className={ classes.actions }>
      <button className={ classes.button }
        onClick={ props.OncloseCart } > Close </button>

    </div>
  </>



  return (

    < Modal
      onCancel={ props.OncloseCart }
    >
      { !isSubmitting && !orderSubmitted && cartDetails }
      { isSubmitting && submitting }
      { !isSubmitting && orderSubmitted && ordered }


    </Modal>

  );
};

export default Cart