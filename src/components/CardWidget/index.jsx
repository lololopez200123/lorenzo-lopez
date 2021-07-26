import React, { useState, useContext } from 'react'
import 'components/ItemCount/styles.css'
import ItemCount from 'components/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from './../../context/cartContext'

export default function CardWidget ({ properties }) {
    const { name, stock, price, id, picture } = properties
    const [itemsInCart, setItemsInCart] = useState(false)
    const { addItemToCart, deleteOneItemFromCart } = useContext(CartContext)

    const onAdd = (e, stock, counter) => {
        if (!itemsInCart) {
            setItemsInCart(true)
            addItemToCart([{ id: id, stock: stock, name: name }])
        } else {
            setItemsInCart(false)
            deleteOneItemFromCart([id])
        }
        (!itemsInCart)
            ? alert(`se ha añadido ${stock} productos de ${counter} en stock`)
            : alert(`se ha eliminado ${stock} productos del carrito`)
    }

    return (
        <div className="Card">
            <img src={picture} className="Card-logo" alt="logo" />
            <p className="Card-text">
                Curso: {name}
            </p>
            <p className="Card-text">
                Precio: {price}
            </p>
            <Link to={`/Detail/${id}`} >
                <button
                    id={id}
                    className="Card-link"
                    rel="noopener noreferrer"
                    value=""
                >
            Ver detalle
                </button>
            </Link>
            <ItemCount initial={1} dayStock={stock} onAdd={onAdd} itemsInCart={itemsInCart} />
        </div>
    )
}
