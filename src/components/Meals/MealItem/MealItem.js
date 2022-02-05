import classess from './MealItem.module.css'
import MealItemForm from './MealItemForm'
const MealItem = (props) => {
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
        <MealItemForm id={ props.name } />
      </div>
    </li>
  )
}
export default MealItem