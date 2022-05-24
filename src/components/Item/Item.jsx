import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import {Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CartContext from '../../store/cart-context';


function Item({item }) {
  const cartCtx = useContext(CartContext);
  


  return (
    <Card style={{ width: '20rem'}} className='m-3'>
      <Card.Img style={{ width: '18rem', height: '25rem'}}variant="t" src={item.image} />
     <br />
      <Link to={'/item/' + item?.id}>
        <Button variant="outline-info">Ver Detalle</Button>
        
      </Link>
      
      <Card.Body>

        <Card.Title>{item.title }</Card.Title>
     
    
       
        <Card.Text>
          ${item.price }
        </Card.Text>
        
      </Card.Body>
    </Card>
  )   
}

export default Item;