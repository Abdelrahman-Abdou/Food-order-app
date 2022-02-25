import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../store/Cart-Context';
import { useContext } from 'react';
import CartItem from './CartItem';
const Cart = (props) => {
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

  const hasItems = cartItemsCxt.items.length > 0
  return (

    < Modal
      onCancel={ props.OncloseCart }
    > { cartItems }
      <div className={ classes.total } >
        <span > Total Amount </span>
        <span >{ totalAmount }</span>
      </div>
      <div className={ classes.actions } >
        <button className={ classes['button--alt'] }
          onClick={ props.OncloseCart } > Close </button>
        { hasItems && <button className={ classes.button } > Order </button> }
      </div>
    </Modal>

  );
};

export default Cart