import React from 'react'
import './styles.css'

export default function ItemDetail ({ detail }) {
    return (
        <>
            {(detail) &&
            <div className='container-detail'>
                <div className='item-detail-container'>
                    <h1>Item detail:</h1>
                    <div>
                        <h2>Name: {detail?.name}</h2>
                        <h2>Price: {detail?.price}</h2>
                        <h2>Description: {detail?.description}</h2>
                    </div>
                </div>
            </div>}
        </>
    )
}
