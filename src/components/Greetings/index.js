import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Greetings () {
    return (
        <div className='greetings-container'>
            <p className='greetings-text'>
           Hola bienvenido/a a mi tienda de <span>cursos IT.</span>
            </p>
            <Link to={'/Cursos'}>
                <button className='card-btn'>
                    Ver Cursos
                </button>
            </Link>
        </div>
    )
}
