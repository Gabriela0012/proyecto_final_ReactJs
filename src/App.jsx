import './App.css';
import logo from './imagenes/logo.png';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <div className="navegacion">
        <img src={logo} className='img-logo'alt='logo' />
        <NavBar /> 
      </div>
          
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
