import React from 'react'
import ProductList from './components/ProductList'
import CartProvider from './context/CardContext'
import Cart from './components/Cart'

const App = () => {
  return (
    <CartProvider>
      <div className='shopping-cart'>
        <h1>Shopping cart</h1>
        <div className="content">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>   
  )
}

export default App