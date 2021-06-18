import React from 'react'
import "./styles.css"
import CardWidget from "../CardWidget"


const productos = {
    items: [
            {    
                id: "zxczxc",
                name: "Curso React",
                github: "lololopez200123",
                stock:7},
            {   
                id: "zxczxcvb",
                name: "Curso Redux",
                github: "emiizx",
                stock: 4},
            {
                id: "asdagrtgeg",
                name: "Curso Nextjs",
                github: "copiar2314s",
                stock: 3}
            ]
}

export default function ItemListContainer() {
    return ( <div className="Card-container">
                {productos.items.map(card => <CardWidget name={card.name} programa={card.github} stock={card.stock}/> )}
            </div>
    )
}
