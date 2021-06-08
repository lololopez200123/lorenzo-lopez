import React from 'react'
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Documentacion</li>
                    <li>Contacto</li>
                    <li>Librerias</li>
                </ul> 
            </div>
            <div className="container-social">
            <FontAwesomeIcon icon={faFacebook} className="icon-facebook" />
            <FontAwesomeIcon icon={faInstagram} className="icon-instagram" />
            <FontAwesomeIcon icon={faTwitter} className="icon-twitter" />
            </div>
        </nav>
        )
}
