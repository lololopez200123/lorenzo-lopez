import React from 'react'
import logo from '../../logo.png';
import "./Main.css"

export default function Main() {
    return (
        <div>
            <div className="App-div" style={{"background":"white"}}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Creando App de React - Lorenzo Lopez
                </p>
                <a
                className="App-link"
                href="https://github.com/lololopez200123/"
                target="_blank"
                rel="noopener noreferrer"
                style={{color:"#000000"}}
                >
                Mi github
                </a>
            </div>
        </div>
    )
}
