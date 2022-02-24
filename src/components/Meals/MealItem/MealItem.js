import classess from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import CartContext from '../../../store/Cart-Context'
const MealItem = (props) => {
  console.log(props.id)
  const cartInputCtx = useContext(CartContext)

  const addItemAmountHandler = amount => {
    const itemAmount = amount
    cartInputCtx.addItem({
      amount: itemAmount,
      id: props.id,
      price: props.price
    })
    
  }

  const price = `$ ${props.price.toFixed(2)} `
  return (
    <li
      className={ classess.meal }
    >
      <div>
        <h3>{ props.name }</h3>
        <div className={ classess.description }>{ props.description }</div>
        <div className={ classess.price } >{ price }</div>
      </div>
      <div>
        <MealItemForm
          id={ props.id }
          addItemAmount={ addItemAmountHandler } />
      </div>
    </li>
  )
}
export default MealItem