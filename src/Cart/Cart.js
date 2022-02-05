import classes from './Cart.module.css'
import Modal from '../UI/Modal'
// const Cart = props => {
//   const CartItems = <ul className={ classess['cart-items'] }>
//     { [{ id: "c1", name: 'suchi', quantity: 2, price: 35 }].map(item =>
//       <li key={item.id}>{ item.name }</li>
//     ) }
//   </ul>

//   return (
//     <div>
//       { CartItems }
//       <div className={ classess.total }>
//         <span>Total Amount </span>
//         <span >35 $</span>
//       </div>
//       <div className={ classess.actions }>
//         <button className={ classess['button--alt'] }>Close</button>
//         <button className={ classess.button }>Order</button>
//       </div>
//     </div>
//   )


// }
// export default Cart;

const Cart = (props) => {
  const cartItems = (
    <ul className={ classes['cart-items'] }>
      { [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{ item.name }</li>
      )) }
    </ul>
  );

  return (
    <Modal>
      { cartItems }
      <div className={ classes.total }>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={ classes.actions }>
        <button className={ classes['button--alt'] }>Close</button>
        <button className={ classes.button }>Order</button>
      </div>
    </Modal>
  );
};

export default Cart