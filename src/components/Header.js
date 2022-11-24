import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import cartIcon from './shopping-cart-line.png'


function Header() {
    return(
        <header>
            <Link to='/'><h2>Pic Some</h2></Link>
            <Link to='/Cart'><img className='cart-icon' alt='cart' src={cartIcon}/></Link>
        </header>

        
    )
}

export default Header