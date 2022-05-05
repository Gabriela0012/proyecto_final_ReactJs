import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Item({item }) {
  return (
    <Card style={{ width: '20rem'}}>
      <Card.Img  variant="top" src={item.image} />
      <Link to={'/item/' + item?.id}>
        <Button variant="outline-info">Ver Detalle</Button>
        
      </Link>
      
      <Card.Body>
        {/* <Link to={'/category/' + item?.category}>  */}
        <Card.Title>{item.title }</Card.Title>
        {/* </Link> */}

       
        <Card.Text>
          {item.price }
        </Card.Text>
        
      </Card.Body>
    </Card>
  )   
}

export default Item;