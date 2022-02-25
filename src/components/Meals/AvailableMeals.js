import classess from './AvailableMeals.module.css'
import Card from '../../UI/Card/Card'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Salmon',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Shawrma ',
    description: 'Healthy...and fine...',
    price: 18.99,
  },
];
const AvailableMeals = (props) => {

  return (
    <section className={ classess.meals }>
      <Card>
        <ul >
          { DUMMY_MEALS.map((meal) =>

            <MealItem
              key={meal.id}
              id={ meal.id }
              name={ meal.name }
              description={ meal.description }
              price={ meal.price }
              
            />
          ) }
        </ul>
      </Card>
    </section>
  )
}
export default AvailableMeals