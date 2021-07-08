import React from 'react'
import CartWidget from 'components/CartWidget/index.jsx'
import 'components/Navbar/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
    return (
        <nav className="nav">
            <div className="nav-container">
                <ul className="nav-items">
                    <NavLink exact to={'/'} style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'yellow' }}>
                        Home
                    </NavLink>
                    <NavLink exact to={'/Cursos'} style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'yellow' }}>
                        Cursos
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
