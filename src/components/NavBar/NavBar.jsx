import React from 'react';
import './NavBar.css';
import logo from './../../imagenes/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div className='navegacion'>
      <img src={logo} className='img-logo'alt='logo' />
      <div className='contenedor-navbar'>
        <div>
          <ul className='nav'>
            <li>
              <a href='#'>INICIO</a>
            </li>
            <li>
              <a  href='#'>PRODUCTOS</a>
            </li>
            <li>
              <a href='#'>INFORMACIÓN PARA COMPRAR</a>
            </li>
            <li>
              <a href='#'>TABLA DE TALLES</a>
            </li>
            <li>
              <a href='#'>CONTACTANOS</a>
            </li>
          </ul>

        </div>

    </div>
    
    <CartWidget />
  </div>
  );
}

export default NavBar;