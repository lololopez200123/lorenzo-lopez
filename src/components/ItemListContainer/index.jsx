import React, { useEffect, useState } from 'react'
import 'components/CardWidget/styles.css'
import CardWidget from 'components/CardWidget'
import SpinnerLoader from 'components/SpinnerLoader'
import getProducts from 'services/getProducts'
import { useParams } from 'react-router-dom'

export default function ItemListContainer () {
    const { category } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(async () => {
        try {
            const data = await getProducts()
            if (category) {
                const filterData = data.filter(product => product.category === category)
                setProductos(filterData)
            } else if (!category) setProductos(data)
        } catch (error) {
            console.log('hubo un problema al actualizar los productos', error)
        }
    }, [category])

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
