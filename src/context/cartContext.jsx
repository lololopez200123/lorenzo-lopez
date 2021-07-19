import React, { useState, createContext, useEffect } from 'react'
import { useLocalStorage } from './../hooks/useLocalStorage'
export const CartContext = createContext({ item: 'no data' })

export const CartContextProvider = ({ children }) => {
    const [total, setTotal] = useState(0)
    const [storedValue, setLocalStorage] = useLocalStorage('cart', [])
    const [cartItems, setCartItems] = useState(storedValue)

    useEffect(() => setLocalStorage(cartItems), [cartItems])

    const addItemToCart = (items) => {
        const newCartItemsArray = [...cartItems]
        const newCartItemsArray2 = [...newCartItemsArray, ...items]
        setCartItems(newCartItemsArray2)
        setTotal(e => e + 1)
    }

    const deleteOneItemFromCart = (item) => {
        const filterProductArr = cartItems.filter(
            (cartItem) => cartItem.id === item.id
        )
        filterProductArr.pop()
        const productsArr = cartItems.filter((cartItem) => cartItem.id !== item.id)
        const newArr = [...productsArr, ...filterProductArr]
        setCartItems(newArr)
        setTotal(e => e - 1)
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                addItemToCart,
                deleteOneItemFromCart,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
