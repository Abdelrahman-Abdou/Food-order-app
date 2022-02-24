import { Fragment } from "react"
import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals onOpenCArt={ props.onOpenCArt} />
    </Fragment>
  )
}
export default Meals