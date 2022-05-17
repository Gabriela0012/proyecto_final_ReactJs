import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import {Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CartContext from '../../store/cart-context';
import Globe from '../../components/Globe/Globe'

function Item({item }) {
  const cartCtx = useContext(CartContext);
  return (
    <Card style={{ width: '20rem'}} className='m-3'>
      <Card.Img  variant="top" src={item.image} />
     
      <Link to={'/item/' + item?.id}>
        <Button variant="outline-info">Ver Detalle</Button>
        
      </Link>
      
      <Card.Body>

        <Card.Title>{item.title }</Card.Title>
        <div className='d-flex justify-content-center align-self-center'>
          <p>Añadir</p>
          <Globe isButton onGlobeClick={() => cartCtx.addProduct({quantity: 1, ...item})}>+</Globe>
        </div>
    
       
        <Card.Text>
          ${item.price }
        </Card.Text>
        
      </Card.Body>
    </Card>
  )   
}

export default Item;