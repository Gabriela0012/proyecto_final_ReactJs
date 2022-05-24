import React, {useContext, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import CartContext from '../../store/cart-context';
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './ItemDetail.css'

function ItemDetail({item}) {
  const { stock, id } = item;
  const cartCtx = useContext(CartContext);
  const [countToAdd, setCountToAdd] = useState(0);

  function addHandler(quantityToAdd) {
    if (quantityToAdd + cartCtx.unitsProduct(id) > stock) {
      const availableToAdd = stock - cartCtx.unitsProduct(id);
      return alert(`Solamente podes agregar ${availableToAdd} productos`);
    }
    setCountToAdd(quantityToAdd);
    cartCtx.addProduct({quantity: quantityToAdd, ...item});
    
  }

  return (
    <div className='d-flex row justify-content-end col-12 p-3 m-3'>
      <div className=' col-5'>
        <Card className='d-flex justify-content-center'style={{ width: '25rem', height: '40rem'}}>
          <Card.Img className='p-3' src={item.image} />
        </Card>
      </div>
      <div className='col-5'>
        <Card className='' style={{ width: '25rem', height: '40rem'}}>
          <Card.Body >
          <Card.Title className='tarjeta p-3 m-3'>
              {item.title }
              <br />
              ${item.price }
            </Card.Title>
            <br />
           <Card.Text className='tarjeta p-3 m-3'>
              <h6>Características principales</h6>
              <p>Modelo:Vintage</p>
              <h6>Otras características</h6>
              <p>Género: Mujer</p>
              <p>Material: Jean</p>
            </Card.Text>
            <Card.Title className='tarjeta p-3 m-3'>
             <h6>Cantidad disponible: {item.stock} productos </h6> 

            </Card.Title>
            
          
            <div>
              <ItemCount initial={1} stock={item.stock} onAdd={addHandler} />
              {cartCtx.isInCart(item.id) &&
                <Link to='/cart'>
                  <Button variant='primary'>
                      Ver Carrito
                  </Button>
                </Link>
              }

            </div>
            
          </Card.Body>
        </Card>

       </div>

    </div>
    
    
    
    
  )
}

export default ItemDetail