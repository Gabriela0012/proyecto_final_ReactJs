import React from 'react';
import './NavBar.css';


function NavBar() {
  return (
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
  );
}

export default NavBar;