import React from 'react'
import logo from 'logo.png'
import 'components/ItemCount/styles.css'
import ItemCount from 'components/ItemCount'

export default function CardWidget ({ name, stock, setItemSelected, id }) {
    const onAdd = () => {
        alert('PRODUCTO AÑADIDO AL CARRO')
    }
    return (
        <div className="Card">
            <img src={logo} className="Card-logo" alt="logo" />
            <p className="Card-text">
                {name}
            </p>
            <button
                id={id}
                className="Card-link"
                rel="noopener noreferrer"
                value=""
                onClick={setItemSelected}
            >
            Ver detalle
            </button>
            <ItemCount initial={1} dayStock={stock} onAdd={onAdd} />
        </div>
    )
}
