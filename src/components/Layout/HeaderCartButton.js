import { useContext } from 'react'
import CartIcon from "../../Cart/CartIcon";
import classess from './HeaderCartButton.module.css'
import CartContext from '../../store/Cart-Context';


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const cartItemsNum = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);



  return (

    <button className={ classess.button } onClick={ props.onClick }>
      <span className={ classess.icon }
      ><CartIcon></CartIcon></span>
      <span>Your Cart</span>
      <span className={ classess.badge }>{ cartItemsNum }</span>
    </button>

  )
}
export default HeaderCartButton;