import React from 'react'
import ProductList from './components/ProductList'
import CartProvider from './context/CardContext'
import Cart from './components/Cart'
import SignG from './components/SignG'
import SignGit from './components/SignGit'




const App = () => {
  return (
    <CartProvider>
      <div className='shopping-cart'>
        <h1>Shopping cart</h1>
        <div className="content">
          <ProductList />
          <Cart />
        </div>
        <div className="sign">
          <SignG/>
          <SignGit/>
        </div>
      </div>

    </CartProvider>
  )
}

export default App