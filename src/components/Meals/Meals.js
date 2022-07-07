import { Fragment } from "react"
import AvaliableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"
const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvaliableMeals />
        </Fragment>
    )
}
export default Meals