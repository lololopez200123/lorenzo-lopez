import React, { useState } from 'react'
import 'components/ItemCount/styles.css'

export default function ItemCount ({ initial, dayStock, onAdd }) {
    const [counter, setCounter] = useState(initial)
    const [stock, setStock] = useState(dayStock)
    // evento para sumar productos
    const sumClic = () => (stock >= 0 && stock !== 0) && (setCounter(counter + 1), setStock(stock - 1))
    // evento para restar productos
    const resClic = () => (counter > 1) && (setCounter(counter - 1), setStock(stock + 1))
    // validar añadir al carrito
    const validarPedido = () => (counter >= 1) && onAdd()

    return (
        <div className="countItem-container">
            <div>
                {(stock > 0) ? <p>Puedes agregar <span>{stock}</span> productos más</p> : <p>No hay más stock</p>}
                <button onClick={resClic} className="countItem-btn"> - </button>
                <input readOnly value={counter} className="countItem-input"/>
                <button onClick={sumClic} className="countItem-btn"> + </button>
            </div>
            <button onClick={validarPedido} className="card-btn" >
                    Añadir al Carrito
            </button>
        </div>
    )
}
