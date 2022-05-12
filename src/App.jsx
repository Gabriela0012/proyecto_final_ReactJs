import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import FooterA from './components/FooterA/FooterA';
import ItemDetailConteiner from './pages/ItemDetailConteiner/ItemDetailConteiner';
import ItemListContainer from './pages/ItemLIstContainer/ItemListContainer';
import Inicio from './pages/Inicio/Inicio';
import Cart from './pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App"> 
     
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailConteiner />} />
     
        </Routes> 
        <FooterA /> 


    
    </div>
  );
}

export default App;
