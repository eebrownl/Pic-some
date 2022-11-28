import React, {useState, useContext} from 'react'
import heart from './heart-line.png'
import add from './add-circle-line.png'
import {Context} from '../Context'
import PropTypes from 'prop-types'
import cart from './shopping-cart-line.png'

function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)
    const {addToCart, cartItems, removeFromCart} = useContext(Context)

    const heartIcon = img.isFavorite ? <img alt='heart' src={heart} className='ri-heart-fill favorite' onClick={() => toggleFavorite(img.id)}/> : 
    isHovered && <img alt='heart' src={heart} className='ri-heart-line favorite' onClick={() => toggleFavorite(img.id)}/>
    
    function cartIcon() {
        if(cartItems.find(obj => obj.id === img.id)) {
            return <img alt='cart' src={cart} className='ri-shopping-cart-fill cart' onClick={() => removeFromCart(img.id)} />
        }else if(isHovered) return <img alt='add' src={add} className='ri-add-circle-line cart' onClick={() => addToCart(img)}/>
    }
    
    return(
        <div className={`${className} image-container`} onMouseEnter={()=> setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img alt='pic' src={img.url} className='image-grid' />
            {heartIcon}
            {cartIcon()}
            
        </div>
    )
}

Image.propTypes = {
    classname: PropTypes.string, 
    img: PropTypes.object
}

export default Image