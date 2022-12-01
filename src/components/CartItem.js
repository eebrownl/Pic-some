import React, {useContext} from 'react'
import bin from './delete-bin-line.png'
import {Context} from '../Context'

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    return(
        <div className='cart-item'>
            <img src = {bin} alt='bin' className = 'ri-delete-bin-line' onClick={() => removeFromCart(item.id)}/>
            <img src = {item.url} alt='cart-pic' width = '130px' className='cart-pic'/>
            <p>5.99</p>

        </div>
    )
}

export default CartItem