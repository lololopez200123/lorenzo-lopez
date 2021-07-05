import React, { useEffect, useState } from 'react'
import 'components/CardWidget/styles.css'
import CardWidget from 'components/CardWidget'
import SpinnerLoader from 'components/SpinnerLoader'

import { DATA } from 'data.js'

export default function ItemListContainer ({ setItemSelected }) {
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(DATA)
                reject(new Error('hubo un problema al actualizar los productos'))
            }, 1000)
        })
    }

    const [productos, setProductos] = useState([])

    const ejecutarPromise = () => {
        createPromise().then((data) => {
            setProductos(data)
        })
    }

    useEffect(() => {
        ejecutarPromise()
    }, [])

    return (
        (productos.length === 0)
            ? (
                <div className="Card-container-loading">
                    <SpinnerLoader />
                </div>
            )
            : (
                <div className="Card-container">
                    { productos.map((card, index) => <CardWidget id={index + '_card'} key={card.id} name={card.name} stock={card.stock} setItemSelected={setItemSelected}/>) }
                </div>
            )
    )
}
