import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Creando App de React - Lorenzo Lopez
        </p>
        <a
          className="App-link"
          href="https://github.com/lololopez200123/"
          target="_blank"
          rel="noopener noreferrer"
          style={{color:"#000000"}}
        >
          Mi github
        </a>
      </header>
    </div>
  );
}

export default App;
