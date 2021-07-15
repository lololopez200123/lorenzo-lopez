import React from 'react'
import 'components/ItemListContainer/styles.css'
import ItemListContainer from 'components/ItemListContainer'
import ItemDetailContainer from 'components/ItemDetailContainer'
import { Route, Redirect } from 'react-router-dom'
import Greetings from 'components/Greetings'
import Cart from 'components/Cart'

export default function Main () {
    return (
        <>
            <Route exact path='/'>
                <Greetings />
            </Route>
            <Route exact path='/Cursos/'>
                <ItemListContainer />
            </Route>
            <Route exact path='/Cursos/:category'>
                <ItemListContainer />
            </Route>
            <Route exact path='/Detail/:id'>
                <ItemDetailContainer />
            </Route>
            <Route exact path='/Cart/'>
                <Cart />
            </Route>
            <Redirect to='/Cursos/'></Redirect>
        </>
    )
}
