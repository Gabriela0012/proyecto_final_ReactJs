import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Globe from '../Globe/Globe'
import Figure from 'react-bootstrap/Figure';
import{Link} from 'react-router-dom';

import './CartItem.css'



function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  return (
    <>
    <div className='cart-item d-flex flex-row justify-content-evenly align-items-center m-3' >
      <Link to={'/item/' + item?.id}>
        <Figure.Image width={80} height={120} src={ item?.image } alt="Imagen del producto"/>
      </Link>
      <div>{ item?.title }</div>
      <div>${item?.price }</div>
    
      <div className='globe-close'>
         <Globe isButton onGlobeClick={() => cartCtx.removeProduct(item.id)}>-</Globe>
      </div>
      <div className='globe-quantity'>
       <Globe>{ item?.quantity }</Globe>
      </div>
      
      <div className=''>
       <Globe isButton onGlobeClick={() => cartCtx.deleteById(item.id)}>x</Globe>
      </div>
      
    </div>
   
    </>
    
  )


}

export default CartItem