import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM } from '@testing-library/dom'
import { render, fireEvent } from '@testing-library/react'
import CardWidget from './index'
describe('renderizando componente card')
test('render component card', () => {
    const card = {
        name: 'react',
        stock: 4,
        setItemSelected: null,
        id: 2
    }

    const mockHandler = jest.fn()

    const component = render(
        <CardWidget
            name={card.name}
            stock={card.stock}
            setItemSelected={mockHandler}
            id={card.id}>
        </CardWidget>)

    component.getByText('react')
    expect(component.container).toHaveTextContent(card.name, card.stock, card.setItemSelected, card.id)
    const btn = component.getByText('Ver detalle')
    fireEvent.click(btn)

    expect(mockHandler).toHaveBeenCalledTimes(1)
})
