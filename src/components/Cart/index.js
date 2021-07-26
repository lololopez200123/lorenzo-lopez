import React, { useContext } from 'react'
import { CartContext } from './../../context/cartContext'

export default function Cart (info = 'producto') {
    const { cartItems, deleteOneItemFromCart } = useContext(CartContext)

    return (
        <>
            <div style={{ backgroundColor: 'white', padding: '1em', margin: '1em' }}>
            Carrito de compras
            </div>{
                (cartItems) &&
            cartItems.map((e) =>
                <div key={e.id} style={{ display: 'inline-block', backgroundColor: 'white', padding: '1em', margin: '1em', width: '25%' }}>
                    <h3>Curso: {e?.name}</h3>
                    <p>cantidad: {e?.stock}</p>
                    <button className='card-btn' onClick={() => deleteOneItemFromCart(e.id)} >Eliminar</button>
                </div>)}
        </>
    )
}
