import React, { useEffect, useState } from 'react'
import 'components/CardWidget/styles.css'
import ItemDetail from 'components/ItemDetail'
import SpinnerLoader from 'components/SpinnerLoader'

import { DATA } from 'data.js'

export default function ItemDetailContainer (props) {
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(DATA)
                reject(new Error('hubo un problema al actualizar los productos'))
            }, 2000)
        })
    }

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
                    <ItemDetail key={producto.key} detail={producto[props.itemId]} />
                </div>
            )
    )
}
