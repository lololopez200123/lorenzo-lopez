import React, { useState } from 'react'
import 'components/ItemCount/styles.css'
import { Link } from 'react-router-dom'

export default function ItemCount ({ initial, dayStock, onAdd, insideDetail, itemsInCart }) {
    const [counter, setCounter] = useState(initial)
    const [stock, setStock] = useState(dayStock)
    // evento para sumar productos
    const sumClic = () => (stock >= 0 && stock !== 0) && (setCounter(counter + 1), setStock(stock - 1))
    // evento para restar productos
    const resClic = () => (counter > 1) && (setCounter(counter - 1), setStock(stock + 1))
    // validar añadir al carrito
    const validarPedido = (e) => (counter >= 1) && onAdd(e, counter, stock)

    return (
        <div className={`countItem-container ${insideDetail ? 'count-inside-detail' : ''}`} >
            <div>
                {(stock > 0) ? <p>Puedes agregar <span>{stock}</span> productos más</p> : <p>No hay más stock</p>}
                <button onClick={resClic} className="countItem-btn"> - </button>
                <input readOnly value={counter} className="countItem-input"/>
                <button onClick={sumClic} className="countItem-btn"> + </button>
            </div>{
                (!itemsInCart)
                    ? (<button onClick={validarPedido} className="card-btn" >
                    Añadir al Carrito
                    </button>)
                    : (<>
                        <button onClick={validarPedido} className="card-btn" style={{ backgroundColor: 'red', color: 'white' }}>
                    Eliminar del carrito
                        </button>
                        <Link to='/Cart/' style={{ color: 'black', margin: '1em', padding: '.5em', backgroundColor: '#e0ff00', borderRadius: '10px' }}>
                    Ir al carrito
                        </Link>
                    </>
                    )
            }
        </div>
    )
}
