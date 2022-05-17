import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../store/cart-context';
import Button from 'react-bootstrap/Button';
import './cart.css';

function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <div className='d-flex flex-column'>
      {cartCtx.products.map(p => <CartItem item={p} key={p.id}/>)}
      {cartCtx.products.length !== 0 ?
      <>
        <div className='cart d-flex-row justify-content-start'>
          <h4>Precio total: ${cartCtx.totalPrice()}</h4>
          <Button variant='outline-primary'>Terminar compra</Button>
          
        </div>
        <div>
        <Button variant='outline-primary'onClick={() => cartCtx.clear()}>vaciar carrito</Button>  
        </div>
        
      </> :
        
        <>
        
          <h2>CARRITO VACIO</h2>
          <Button variant='info'>
            <Link variant='btn btn-info' to ='/'>Ir al inicio</Link>
          </Button>
        </>
      }
  
    </div>
  )
}

export default Cart