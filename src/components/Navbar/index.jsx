import React from 'react'
import CartWidget from 'components/CartWidget/index.jsx'
import 'components/Navbar/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar () {
    return (
        <nav className="nav">
            <div className="nav-container">
                <ul className="nav-items">
                    <NavLink exact to={'/'} style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'yellow' }}>
                        Home
                    </NavLink>
                    <NavLink exact to={'/Cursos/'} id='Course' style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'yellow' }}>
                        Cursos
                        <ul className='dropdown'>
                            <Link to='/Cursos/React' >
                                <li className='courseItem'>
                                React
                                </li>
                            </Link>
                            <Link to='/Cursos/FrontEnd' >
                                <li className='courseItem'>
                                Front End
                                </li>
                            </Link>
                            <Link to='/Cursos/BackEnd' >
                                <li className='courseItem'>
                                Back End
                                </li>
                            </Link>
                            <Link to='/Cursos/Frameworks' >
                                <li className='courseItem'>
                                Frameworks
                                </li>
                            </Link>
                            <Link to='/Cursos/' >
                                <li className='courseItem'>
                                Ver Todos
                                </li>
                            </Link>
                        </ul>
                    </NavLink>
                </ul>
            </div>
            <div className="container-social">
                <FontAwesomeIcon icon={faFacebook} className="icon-facebook" />
                <FontAwesomeIcon icon={faInstagram} className="icon-instagram" />
                <FontAwesomeIcon icon={faTwitter} className="icon-twitter" />
            </div>
            <CartWidget />
        </nav>
    )
}
