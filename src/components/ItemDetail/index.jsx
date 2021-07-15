import ItemCount from 'components/ItemCount'
import React, { useState } from 'react'
import './styles.css'

export default function ItemDetail ({ detail }) {
    const [itemsInCart, setItemsInCart] = useState(false)

    const onAdd = (e, stock, counter) => {
        (!itemsInCart)
            ? setItemsInCart(true)
            : setItemsInCart(false);
        (!itemsInCart)
            ? alert(`se ha añadido ${stock} productos de ${counter} en stock`)
            : alert(`se ha eliminado ${stock} productos del carrito`)
    }

    return (
        <>
            {(detail) &&
            <div className='container-detail'>
                <div className='item-detail-container'>
                    <div className='item-detail-img'>
                        <h1>Detalle del Producto</h1>
                        <img src={detail?.picture} alt="" className='Card-logo'/>
                    </div>
                    <div className='item-detail-text'>
                        <h2>Nombre: {detail?.name}</h2>
                        <h2>Precio: {detail?.price}</h2>
                        <h3>Descripción: {detail?.description}</h3>
                    </div>
                </div>
                <ItemCount initial={1} dayStock={detail.stock} onAdd={onAdd} insideDetail={true} itemsInCart={itemsInCart}/>
            </div>}
        </>
    )
}
