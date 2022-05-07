import React, {useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';



function ItemDetail({item}) {
  const [cantidadProductos, setCantidadProductos] = useState(null);
  
  function addHandler(quantityToAdd) {
    setCantidadProductos (quantityToAdd);
    
  }

  return (
    <div className='d-flex row justify-content-end col-12 p-3 m-3'>
      <div className=' col-5'>
        <Card style={{ width: '25rem', height: '40rem'}}>
          <Card.Img variant="top" src={item.image} />
        </Card>
      </div>
      <div className='col-5'>
        <Card style={{ width: '25rem', height: '40rem'}}>
          <Card.Body >
            <Card.Title>{item.title }</Card.Title>
           <Card.Text>
             {item.price }
            </Card.Text>
            <div>
              {cantidadProductos ?
                
                <Button variant='primary'>
                  <Link className='btn btn-primary' to='/cart'> TERMINAR COMPRA ({cantidadProductos }productos)</Link>
                </Button> :
                <ItemCount stock={item.stock} initial={0} onAdd={addHandler} />
                
              }

            </div>
            
          </Card.Body>
        </Card>

       </div>

    </div>
    
    
    
    
  )
}

export default ItemDetail