import React from 'react'
import logo from '../../logo.png';
import "./styles.css"

export default function CardWidget({name,programa}) {
    return (
        <div className="Card">
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
        </div>
    )
}
