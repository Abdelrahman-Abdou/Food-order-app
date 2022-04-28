import { useState } from "react";
const useInput = (checkValidity) => {
  const [inputIsTouched, setInputIsTouched] = useState(false)
  const [enteredInput, setEnteredInput] = useState('')
  const enteredInputIsValid = checkValidity(enteredInput)
  const hasError = !enteredInputIsValid && inputIsTouched
  const enteredValueHandler = (event) => {
    setEnteredInput(event.target.value)
  }
  const enteredValueBlurHandler = (event) => {
    setInputIsTouched(true);
  }
  const reset = () => {
    setEnteredInput('')
    setInputIsTouched(false)
  }
  return {
    value: enteredInput,
    hasError,
    isValid: enteredInputIsValid,
    enteredValueHandler,
    enteredValueBlurHandler,
    reset
  }
}
export default useInput;