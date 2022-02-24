import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../store/Cart-Context';
import { useContext } from 'react';

const Cart = (props) => {

  let cartItems = []
  const cartItemsCxt = useContext(CartContext)
 console.log(cartItemsCxt.items,'final')
  console.log('cartItems',cartItems)
  //   .map((item) => (
  //   <li key={ item.id }>{ item.name }</li>
  // ))



return (

  <Modal onCancel={ props.OncloseCart } >
    { cartItems }
    <div className={ classes.total }>
      <span>Total Amount</span>
      <span>35.62</span>
    </div>
    <div className={ classes.actions }>
      <button className={ classes['button--alt'] } onClick={ props.OncloseCart }>Close</button>
      <button className={ classes.button } >Order</button>
    </div>
  </Modal>

);
};

export default Cart