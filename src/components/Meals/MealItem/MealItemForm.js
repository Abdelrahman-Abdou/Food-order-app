import React, { useRef, useState } from 'react'
import classess from './MealItemForm.module.css'
import Input from '../../../UI/Input'



const MealItemForm = (props) => {
  const [enteredNumValid, setEnteredNumValid] = useState(true)
  const itemRef = useRef()

  const addingItemHandler = (event) => {
    event.preventDefault()
    const enteredValue = itemRef.current.value
    const enterdValueNum = +enteredValue
    
    if (enteredValue.trim().length === 0 ||
      enterdValueNum < 1 ||
      enterdValueNum > 5) {
        setEnteredNumValid(false)
        return
      }
      else {
        props.addItemAmount(enterdValueNum)

      }
    }

    return (

      <form
        onSubmit={ addingItemHandler }
        className={ classess.form }>
        <Input
          ref={ itemRef }
          label='Amount'
          input={ {
            min: '1',
            max: '5',
            type: 'number',
            step: '1',
            defaultValue: '1',
            id: `amount_ ${props.id}`,
          } }
        />
        <button >
          + Add
        </button>
        { !enteredNumValid && <p>Enter a valid number(1-5)</p> }
      </form>

    )
  }
export default MealItemForm;