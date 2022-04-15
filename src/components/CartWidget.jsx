import React from 'react';
import carrito from '../imagenes/carrito.png';
import './CartWidget.css';

function CartWidget() {
  return (
    <div>
      <img src={carrito} className='carrito'alt='carrito' />
   
    </div>
  )
}

export default CartWidget;
