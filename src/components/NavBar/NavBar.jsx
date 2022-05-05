import React from 'react';
import './NavBar.css';
import logo from './../../imagenes/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink} from 'react-router-dom';


function NavBar() {
  return (
    <div className='navegacion d-flex justify-content-around align-items-center'>
      <img src={logo} className='img-logo'alt='logo' />
      <div className='contenedor-navbar'>
        <div>
          <ul className='nav'>
            <li>
              <NavLink to='/'  className={(nav) => nav.isActive ? 'link-active' : ''}>INICIO</NavLink>
            </li>
            <li>
              <NavLink  to='/category' className={(nav) => nav.isActive ? 'link-active' : ''}>CATEGORIAS</NavLink>
            </li>
            <li>
              <NavLink to='/category/minis' className={(nav) => nav.isActive ? 'link-active' : ''}>MINIS</NavLink>
            </li> 
            <li>
              <NavLink to='/category/shorts' className={(nav) => nav.isActive ? 'link-active' : ''}>SHORTS</NavLink>
            </li>
            <li>
              <NavLink to='/category/jeans' className={(nav) => nav.isActive ? 'link-active' : ''}>JEANS</NavLink>
            </li>
          </ul>

        </div>

    </div>
    
    <CartWidget />
  </div>
  );
}

export default NavBar;