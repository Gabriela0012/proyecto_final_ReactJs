import React, { useContext } from 'react';
import carrito from './../../imagenes/carrito.png';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';


function CartWidget() {
  const cartCtx = useContext(CartContext);
  return (
    <div className='d-flex flex-row'>
      <Link to='/cart'>
        <img src={carrito} className='carrito'alt='carrito' />
     </Link>
       
        {cartCtx.products.length !== 0 && 
          <div className='icono'>
            <span>
              { cartCtx.totalCount() }
            </span>
          </div>
        }
  
   
    </div>
  )
}

export default CartWidget;


