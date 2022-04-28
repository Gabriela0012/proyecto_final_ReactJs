import React from 'react';
import Card from 'react-bootstrap/Card';


function Item({item }) {
  return (
    <Card style={{ width: '20rem'}}>
      <Card.Img  variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title }</Card.Title>
        <Card.Text>
          {item.price }
        </Card.Text>
        
      </Card.Body>
    </Card>
  )   
}

export default Item;