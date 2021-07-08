import React, { useEffect, useState } from 'react'
import 'components/CardWidget/styles.css'
import CardWidget from 'components/CardWidget'
import SpinnerLoader from 'components/SpinnerLoader'
import getProducts from 'services/getProducts'

export default function ItemListContainer () {
    const [productos, setProductos] = useState([])

    const getProductsList = async () => {
        try {
            return await getProducts()
        } catch {
            console.log('hubo un problema al actualizar los productos')
        }
    }

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
