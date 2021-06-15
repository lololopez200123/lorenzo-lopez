import React from 'react'
import "./styles.css"
import CardWidget from "../CardWidget"


const productos = {
    items: [
            {name: "Curso React" , github: "lololopez200123"},
            {name: "Curso Redux" , github: "emiizx"},
            {name: "Curso Nextjs" , github: "copiar2314s"}
        ]
}

export default function ItemListContainer() {
    return ( <div className="Card-container">
                {productos.items.map(items => <CardWidget name={items.name} programa={items.github}/> )}
            </div>
    )
}
