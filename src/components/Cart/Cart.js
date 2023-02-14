import React from 'react'
import classes from  './Cart.module.css'

const Cart = props => {
    const cartItems = [{id: 'cl', name: 'Sushi', amount: 2, price: 12.99}].map(
        item => <li>{item.name}</li>
    )
    return (
        <div>
            {cartItems}
            <div></div>
            <div></div>
    </div>
    )
}

export default Cart
