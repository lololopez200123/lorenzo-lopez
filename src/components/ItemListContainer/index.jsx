import React, { useEffect, useState } from 'react'
import 'components/CardWidget/styles.css'
import CardWidget from 'components/CardWidget'
import SpinnerLoader from 'components/SpinnerLoader'
import getProducts from 'services/getProducts'

export default function ItemListContainer () {
    const getProductsList = () => {
        return new Promise((resolve, reject) => {
            resolve(getProducts())
            reject(new Error('hubo un problema al actualizar los productos'))
        }, 1000)
    }
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductsList().then((data) => {
            setProductos(data)
        })
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
                    { productos.map((card) => <CardWidget
                        key={card.guid}
                        properties={card}
                    />) }
                </div>
            )
    )
}
