import React from 'react';
import meals from '../../assets/meals.jpg'
import classess from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {


  return (
    <>
      <header className={ classess.header } >
        <h1> ReactMeals </h1>
        <HeaderCartButton />
      </header>
      <div className={ classess['main-image'] }>
        <img src={ meals } alt="a table full of delicious food !" />
      </div>
    </>
  )
}

export default Header;