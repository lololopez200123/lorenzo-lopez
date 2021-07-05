import React, { useState } from 'react'
import 'components/ItemListContainer/styles.css'
import ItemListContainer from 'components/ItemListContainer'
import ItemDetailContainer from 'components/ItemDetailContainer'

export default function Main () {
    const [itemSelect, setItemSelect] = useState(null)

    const setItemSelected = (event) => {
        const selected = event.target.id.split('_')[0]
        setItemSelect(Number(selected))
    }

    return (
        <div>
            <ItemDetailContainer itemId={itemSelect}></ItemDetailContainer>
            <ItemListContainer setItemSelected={ setItemSelected }></ItemListContainer>
        </div>
    )
}
