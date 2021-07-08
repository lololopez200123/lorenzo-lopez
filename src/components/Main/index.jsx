import React from 'react'
import 'components/ItemListContainer/styles.css'
import ItemListContainer from 'components/ItemListContainer'
import ItemDetailContainer from 'components/ItemDetailContainer'
import { Route } from 'react-router-dom'
import Greetings from './../Greetings/index'

export default function Main () {
    return (
        <>
            <Route exact path='/'>
                <Greetings />
            </Route>
            <Route exact path='/Cursos'>
                <ItemListContainer />
            </Route>
            <Route exact path='/Detail/:id'>
                <ItemDetailContainer />
            </Route>
        </>
    )
}
