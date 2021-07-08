import NavBar from 'components/Navbar'
import Main from 'components/Main'
import 'App.css'
import { BrowserRouter } from 'react-router-dom'

function App () {
    return (
        <div className="app">
            <BrowserRouter>
                <NavBar />
                <Main />
            </BrowserRouter>
        </div>
    )
}

export default App
