import React, { useEffect, useState } from 'react'
import 'components/CardWidget/styles.css'
import CardWidget from 'components/CardWidget'
import SpinnerLoader from 'components/SpinnerLoader'

export default function ItemListContainer () {
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{
                    id: '123',
                    name: 'Curso React',
                    github: 'lololopez200123',
                    stock: 7
                },
                {
                    id: '2124245',
                    name: 'Curso Redux',
                    github: 'emiizx',
                    stock: 4
                },
                {
                    id: '312435',
                    name: 'Curso Nextjs',
                    github: 'copiar2314s',
                    stock: 3
                }
                ])
                reject(new Error('hubo un problema al acualizar los productos'))
            }, 5000)
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
                    { productos.map(card => <CardWidget key={card.key} name={card.name} stock={card.stock} />) }
                </div>
            )
    )
}
