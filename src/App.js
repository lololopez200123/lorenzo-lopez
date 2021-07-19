import NavBar from 'components/Navbar'
import Main from 'views/Main'
import 'App.css'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext'

function App () {
    return (
        <div className="app">
            <CartContextProvider >
                <BrowserRouter>
                    <NavBar />
                    <Main />
                </BrowserRouter>
            </CartContextProvider>
        </div>
    )
}

export default App
