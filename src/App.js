import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './Cart/Cart'
import CartContextProvider from './store/CartContext-provider'



function App() {
  const [cartISOn, setCartIsOn] = useState(false)


  const openCartHandler= () => {
    setCartIsOn(true)
  }
  const closeCartHAndler = () => {
    setCartIsOn(false)
  }
  return (
    <CartContextProvider>
      { cartISOn && <Cart OncloseCart={ closeCartHAndler } /> }
      <Header onOpenCArt={ openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>

  );
}

export default App;
