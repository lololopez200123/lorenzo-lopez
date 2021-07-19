import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'components/CartWidget/styles.css'
import { CartContext } from './../../context/cartContext'

export default function CartWidget () {
    const { total } = useContext(CartContext)
    return (
        <div>
            <div className="container-cart">
                {(total > 0) &&
                <p style={{
                    position: 'absolute',
                    color: 'white',
                    right: '2em',
                    backgroundColor: '#121212',
                    padding: '.5em .8em',
                    borderRadius: '15px'
                }}>{total}</p>}
                <FontAwesomeIcon icon={faShoppingCart} className="icon-cart" />
            </div>
        </div>
    )
}
