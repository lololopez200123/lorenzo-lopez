import React, { useEffect, useState } from 'react'
import 'components/CardWidget/styles.css'
import ItemDetail from 'components/ItemDetail'
import SpinnerLoader from 'components/SpinnerLoader'
import { useParams } from 'react-router'
import getProducts from 'services/getProducts'

export default function ItemDetailContainer () {
    const getItem = async () => {
        try {
            return await getProducts()
        } catch (error) {
            console.log('hubo un problema al actualizar los productos')
        }
    }

    const { id } = useParams()
    const [producto, setProducto] = useState([])

    const ejecutarPromise = () => {
        getItem().then((data) => {
            setProducto(data)
        })
    }

    useEffect(() => {
        ejecutarPromise()
    }, [])
    return (
        (producto === [])
            ? (
                <div className="Card-container-loading">
                    <SpinnerLoader />
                </div>
            )
            : (
                <div className="Item-detail">
                    <ItemDetail key={producto.key} detail={producto[id]} />
                </div>
            )
    )
}
