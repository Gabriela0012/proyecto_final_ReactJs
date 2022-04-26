import './App.css';


import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemLIstContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer greeting='SI NO ES UN BUEN DÍA ME LO INVENTO LOVELY'/>
      <ItemCount />

          
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
