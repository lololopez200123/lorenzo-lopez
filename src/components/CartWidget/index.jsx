import React, { useContext, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'components/CartWidget/styles.css'
import { CartContext } from './../../context/cartContext'
import CartSliderView from 'components/CartSliderView'

export default function CartWidget () {
    const { total } = useContext(CartContext)
    const [isHaveProduct, setIsHaveProduct] = useState(false)
    const [openSliderCart, setOpenSliderCart] = useState(false)

    useEffect(() => {
        total > 0 && setIsHaveProduct(true)
    }, [total])

    const validateProducts = () => {
        (!openSliderCart) ? setOpenSliderCart(true) : setOpenSliderCart(false)
    }

    return (
        <>
            <div>
                <div className="container-cart" onClick={isHaveProduct && validateProducts}>
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
            { openSliderCart && <CartSliderView/> }
        </>
    )
}
