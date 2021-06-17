import React from 'react'
import logo from '../../logo.png';
import "./styles.css"
import ItemCount from "../ItemCount"

export default function CardWidget({name, programa, key, stock}) {

    const onAdd = () => {
         alert("PRODUCTO AÑADIDO AL CARRO")
        }

    return (
        <div className="Card" key={[{key}]}>
            <img src={logo} className="Card-logo" alt="logo" />
            <p className="Card-text">
            {name}
            </p>
            <a
            className="Card-link"
            href={`https://github.com/${programa}`}
            target="_blank"
            rel="noopener noreferrer"
            >
            Descargar Programa
            </a>
            <ItemCount initial={1} dayStock={stock} onAdd={onAdd} />
        </div>
    )
}
