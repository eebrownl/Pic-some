import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import cartIcon from './shopping-cart-line.png'


function Header() {
    return(
        <header>
            <Link to='/'><h2>Pic Some</h2></Link>
            <img alt='cart src='{cartIcon}'/>
        </header>

        
    )
}

export default Header