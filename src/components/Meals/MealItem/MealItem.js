import classess from './MealItem.module.css'

const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)} `
  return (
    <li
      className={ classess.meal }
      key={ props.key }>
      <div>
        <h3>{ props.name }</h3>
        <div className={ classess.description }>{ props.description }</div>
        <div className={ classess.price } >{ price }</div>
      </div>
      
    </li>
  )
}
export default MealItem