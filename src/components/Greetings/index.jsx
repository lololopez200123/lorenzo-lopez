import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Greetings () {
    return (
        <div className='greetings-container'>
            <div className='overlay'></div>
            <div className='greetings-container-box'>
                <p className='greetings-text'>
           Hola bienvenido/a a mi tienda de <span>cursos IT.</span>
                </p>
                <Link to={'/Cursos'}>
                    <button className='card-btn'>
                    Ver Cursos
                    </button>
                </Link>
            </div>
        </div>
    )
}
