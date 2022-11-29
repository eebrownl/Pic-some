import React from 'react'
import bin from './delete-bin-line.png'

function CartItem({item}) {
    return(
        <div className='cart-item'>
            <img src = {bin} alt='bin' className = 'ri-delete-bin-line'/>
            <img src = {item.url} alt='cart-pic' width = '130px' className='cart-pic'/>
            <p>5.99</p>

        </div>
    )
}

export default CartItem