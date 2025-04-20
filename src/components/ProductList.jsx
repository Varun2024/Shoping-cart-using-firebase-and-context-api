import React from 'react'
import { useCart } from '../context/CardContext'
import { v4 as uuid } from 'uuid';
    
const ProductList = () => {

    const { cart,dispatch} = useCart()
    console.log(cart)

    const products = [
        {id:uuid() , name:"Product q", price:20,qty:1 },
        {id:uuid() , name:"Product w", price:25,qty:1 },
        {id:uuid(), name:"Product e", price:30,qty:1},
        {id:uuid(), name:"Product r", price:20,qty:1},
        {id:uuid(), name:"Product t", price:20,qty:1},
    ]

    const addTocart = (product) => {
        dispatch({type:"ADD", payload:product}) 
    }


  return (
    <div className='product-list '>
        <h2>Products</h2>
        {
            products.map((product) =>(
                <div key={product.id} className='product-item'>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.qty}</p>
                    <button onClick={()=> addTocart(product)}>Add to cart</button>
                </div>
            ))
        }
    </div>  
  )
}

export default ProductList