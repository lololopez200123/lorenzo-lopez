import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'components/CartWidget/styles.css'

export default function CartWidget () {
    return (
        <div>
            <div className="container-cart">
                <FontAwesomeIcon icon={faShoppingCart} className="icon-cart" />
            </div>
        </div>
    )
}
