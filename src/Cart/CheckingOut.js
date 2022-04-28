import classes from './CheckingOut.module.css'
import { useRef, useState } from 'react'
const CheckingOut = (props) => {

  const [formValidity, setFormValidity] = useState({
    name: true,
    adress: true,
    city: true,
    postalCode: true
  })
  const isEmpty = value => value.trim() !== ''
  const isFiveChar = value => value.trim().length === 5
  const enteredNameRef = useRef()
  const enteredStreetRef = useRef()
  const enteredPostalCodeRef = useRef()
  const enteredCityRef = useRef()


  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = enteredNameRef.current.value
    const enteredStreet = enteredStreetRef.current.value
    const enteredCity = enteredCityRef.current.value
    const enteredPostalCode = enteredPostalCodeRef.current.value

    const enteredNameisValid = isEmpty(enteredName)
    const enteredStreetIsValid = isEmpty(enteredStreet)
    const enteredCityIsValid = isEmpty(enteredName)
    const enteredPostCodeIsValid = isFiveChar(enteredPostalCode)

    setFormValidity({
      name: enteredName,
      adress: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode
    })
    const formIsValid =
      enteredNameisValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostCodeIsValid
    if (!formIsValid) {
      return
    } else {
      props.onSubmit({
        name: enteredName,
        adress: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode
      })

    }
  };

  const userNameClass = `${classes.control} 
      ${formValidity.name ? '' : classes.invalid}`
  const userAdressClass = `${classes.control} 
      ${formValidity.adress ? '' : classes.invalid}`
  const userCityClass = `${classes.control} 
      ${formValidity.city ? '' : classes.invalid}`
  const userPostalCodeClass = `${classes.control} 
      ${formValidity.postalCode ? '' : classes.invalid}`


  return (
    <form className={ classes.form } onSubmit={ confirmHandler }>
      <div className={ userNameClass }>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={ enteredNameRef } />
        { !formValidity.name && <p>Please enter a valid name!</p> }
      </div>
      <div className={ userAdressClass }>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={ enteredStreetRef } />
        { !formValidity.adress && <p>Please enter your street number!</p> }
      </div>
      <div className={ userPostalCodeClass }>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={ enteredPostalCodeRef } />
        { !formValidity.postalCode && <p>Please enter a valid postal code!</p> }
      </div>
      <div className={ userCityClass }>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={ enteredCityRef } />
        { !formValidity.city && <p>Please enter your city</p> }
      </div>
      <div className={ classes.actions }>
        <button type='button' onClick={ props.onCancel }>
          Cancel
        </button>
        <button type='submit' className={ classes.submit }>Confirm</button>
      </div>
    </form>
  );
};

export default CheckingOut;