import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const [buttonText, setButtonText] = useState('Place Order')
    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function getTotal() {
        const total = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})
        return total
    }

    const buttonElement = (cartItems.length > 0) && 
    <div className='order-button'>
        <button onClick={handleClick}>{buttonText}</button>
    </div>

    function handleClick() {
        setButtonText('Ordering...')
        setTimeout(() => {
            console.log('order placed!')
            setButtonText('Place Order')
            emptyCart()
        }, 3000)
    }
    
    return(
        <main className='cart-page'>
            <h1>Check out</h1>
            <div>{cartItemElements}</div>
            <p className='total-cost'>{`Total: ${getTotal()}`}</p>
            {buttonElement}
        </main>
    )
}

export default Cart