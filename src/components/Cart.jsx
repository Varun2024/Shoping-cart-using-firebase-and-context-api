import React from 'react'
import { useCart } from '../context/CardContext'

const Cart = () => {

    const { cart, dispatch } = useCart()

    const removeFromcart = (id) => {
        dispatch({ type: "REMOVE", payload: id })
    }
    const total = cart.reduce((sum, item) => sum + (item.price*item.qty), 0)

    const dec = (id) => { dispatch({ type: "DEC", payload: id }) }
    const inc = (id) => { dispatch({ type: "INC", payload: id }) }

    // const quantity = cart.reduce()
    return (
    <div className='cart'>
        <h2>Shopping cart</h2>
        {cart.length ===0 ? (
            <p>Your cart empty</p>
        ):(
            cart.map((item) =>(
                <div key={item.id } className='cart-item'>
                    <p>{item.name}</p>
                    <p>{item.price}</p>

                    <p className='qty'>
                        <div className="dec">
                            <button onClick={()=>dec(item.id)}>-</button>    
                        </div> 
                        {item.qty}  
                        <div className="inc" >
                            <button onClick={()=>inc(item.id)}> +
                            </button>
                        </div>
                    </p>

                    <button onClick={()=>removeFromcart(item.id)}>Remove</button>
                </div >
            ))
        )}
<h3>Total:${total}</h3>
    </div >
  )
}

export default Cart