import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';


function ItemDetail({item}) {
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
            <ItemCount stock={12} initial={1}/>
          </Card.Body>
        </Card>

       </div>

    </div>
    
    
    
    
  )
}

export default ItemDetail