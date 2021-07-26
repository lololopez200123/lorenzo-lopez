import React, { useContext, useState, useEffect } from 'react'
import './styles.css'
import { CartContext } from './../../context/cartContext'
export default function CartSliderView () {
    const contexto = useContext(CartContext)
    const [itemsInCart, setItemsInCart] = useState(contexto.cartItems)

    useEffect(() => {
        setItemsInCart(contexto.cartItems)
    }, [contexto])

    const removeItem = (id) => {
        const element = itemsInCart.filter(e => e.id === id)
        const newArr = itemsInCart.map(e => e !== element)
        console.log(newArr)
        setItemsInCart(newArr)
    }
    console.log('contetxt', itemsInCart)
    return (
        <>
            <div className='cartSlider-container'>
                <h3>Carrito de Compras</h3>
                {
                    itemsInCart.map((e) => {
                        return (
                            <div key={e.id} className='cartSlider-product'>
                                <p style={{ textAlign: 'center' }}>{e.name} <span>x {e.stock}</span></p>
                                <button className='card-btn'>Ver</button>
                                <button
                                    className='card-btn'
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                    onClick={() => {
                                        removeItem(e.id)
                                        contexto.deleteOneItemFromCart(e.id)
                                    }}
                                >
                                Borrar
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>)
}
