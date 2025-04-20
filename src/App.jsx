import React from 'react'
import ProductList from './components/ProductList'
import CartProvider from './context/CardContext'
import Cart from './components/Cart'
import SignG from './components/SignG'
import SignGit from './components/SignGit'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
// import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'





const App = () => {
  return (
    <CartProvider>

      <div className='shopping-cart'>
        <div className="sign">
          <SignUp />
          <SignIn />
        </div>
        <h1>Shopping cart</h1>
        <div className="content">
          <ProductList />
          <Cart />
        </div>
        <div className="sign">
          <SignG />
          <SignGit />
        </div>
      </div>

    </CartProvider>
  )
}

export default App