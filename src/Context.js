import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

        console.log(cartItems)
   
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArray = allPhotos.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo, 
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArray)
    }

    function emptyCart() {
        setCartItems([])
    }

    function addToCart(newItem) {
        setCartItems(prevCartItems => [...prevCartItems, newItem])
        }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
        }

    return(
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}


// Setup context to manage items in an array called `cartItems`. This will be an array of image objects.

// 1. Add the `cartItems` state to context. (Array)
// 2. Add function to add an image to the cart. (Takes the full image object as parameter)
// 3. Make it so clicking the plus icon on the image adds the item to the cart. (Console.log the cart items array to see that it's working)