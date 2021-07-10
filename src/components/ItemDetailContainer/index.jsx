import React, { useEffect, useState } from 'react'
import 'components/CardWidget/styles.css'
import ItemDetail from 'components/ItemDetail'
import SpinnerLoader from 'components/SpinnerLoader'
import { useParams, useHistory } from 'react-router'
import getProducts from 'services/getProducts'

export default function ItemDetailContainer () {
    const { id } = useParams()
    const [producto, setProducto] = useState([])
    const actualHistory = useHistory()
    console.log(actualHistory)

    const goBackChange = (e) => {
        e.preventDefault()
        actualHistory.goBack()
    }

    useEffect(async () => {
        try {
            const data = await getProducts()
            setProducto(data)
        } catch (error) {
            console.log('hubo un problema el siguiente problema al actualizar los productos:', error)
        }
    }, [])

    return (
        <>
            {
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
                    )}
            <div style={{ width: '100%', textAlign: 'center' }}>
                <button
                    id={id}
                    className="Card-link"
                    rel="noopener noreferrer"
                    value=""
                    style={{ margin: '2em 2em', width: '15%' }}
                    onClick={goBackChange}
                >
            Volver Atrás
                </button>
            </div>
        </>
    )
}
