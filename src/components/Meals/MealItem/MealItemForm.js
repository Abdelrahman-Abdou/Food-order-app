import classess from './MealItemForm.module.css'
import Input from '../../../UI/Input'

const MealItemForm = (props) => {

  return (
    <form className={ classess.form }>
      <Input
        label='Amount'
        input={ {
          min: '1',
          max: '5',
          type: 'number',
          step: '1',
          defaultValue: '1',
          id:  `amount_ ${props.id}`,
        } }


      />
      <button>
        + Add
      </button>
    </form>


  )
}
export default MealItemForm;