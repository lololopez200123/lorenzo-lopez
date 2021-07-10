import React from 'react'
import 'components/ItemCount/styles.css'
import ItemCount from 'components/ItemCount'
import { Link } from 'react-router-dom'

export default function CardWidget ({ properties }) {
    const { name, stock, price, id, picture } = properties

    const onAdd = () => {
        alert('PRODUCTO AÑADIDO AL CARRO')
    }
    return (
        <div className="Card">
            <img src={picture} className="Card-logo" alt="logo" />
            <p className="Card-text">
                Curso: {name}
            </p>
            <p className="Card-text">
                Precio: {price}
            </p>
            <Link to={`/Detail/${id}`} >
                <button
                    id={id}
                    className="Card-link"
                    rel="noopener noreferrer"
                    value=""
                >
            Ver detalle
                </button>
            </Link>
            <ItemCount initial={1} dayStock={stock} onAdd={onAdd} />
        </div>
    )
}
