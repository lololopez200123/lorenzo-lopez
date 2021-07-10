import React from 'react'
import './styles.css'

export default function ItemDetail ({ detail }) {
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
            </div>}
        </>
    )
}
