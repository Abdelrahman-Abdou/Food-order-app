import classess from './AvailableMeals.module.css'
import Card from '../../UI/Card/Card'
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = (props) => {
  const [loadedMeals, setLoadedMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)
  useEffect(() => {

    const fetchMeals = async () => {
      const response = await fetch
        ('https://food-app-d7291-default-rtdb.firebaseio.com/meals.json')
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json();

      const MealsData = [];
      for (const key in data) {
        MealsData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setLoadedMeals(MealsData)
      setIsLoading(false)
    }
    //promise only way to display erorr
    fetchMeals().catch((err) => {
      setIsLoading(false);
      setErr(err.message)
    })
  }, []);


  if (isLoading) {
    return <section>
      <p className={ classess.loading }>Still Loading</p>
    </section>

  }
  if (err) {
    return <section>
      <p className={ classess.errorMsg }>{ err }</p>
    </section>
  }

  return (
    <section className={ classess.meals }>
      <Card>

        <ul >
          { loadedMeals.map(meal =>
            <MealItem
              id={ meal.id }
              key={ meal.id }
              name={ meal.name }
              description={ meal.description }
              price={ meal.price }
            />
          )
          }
        </ul>

      </Card>

    </section>
  )

}
export default AvailableMeals;