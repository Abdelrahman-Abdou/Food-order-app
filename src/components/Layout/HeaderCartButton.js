import { useContext ,useEffect,useState } from 'react'
import CartIcon from "../../Cart/CartIcon";
import classess from './HeaderCartButton.module.css'
import CartContext from '../../store/Cart-Context';


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const{items}=cartCtx
  const cartItemsNum = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);
const [btnIsHighlighted,setBtnISHighlighted]=useState(false)
const btnClasses= `${classess.button}  ${btnIsHighlighted? classess.bump : ' ' }` 
  useEffect(() => {
    if (items.length === 0) {
      return;
    } else {
      setBtnISHighlighted(true)
      setTimeout(() => {
      setBtnISHighlighted(false)
    },300)
    }
    
    
  }, [items] )
  

  return (

    <button  className={ btnClasses } onClick={ props.onClick }>
      <span className={ classess.icon }
      ><CartIcon></CartIcon></span>
      <span>Your Cart</span>
      <span className={ classess.badge }>{ cartItemsNum }</span>
    </button>

  )
}
export default HeaderCartButton;