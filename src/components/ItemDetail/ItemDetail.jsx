import React, {useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import CartContext from '../../store/cart-context';




function ItemDetail({item}) {
 
  const cartCtx = useContext(CartContext);

  function addHandler(quantityToAdd) {
    cartCtx.addProduct({quantity: quantityToAdd, ...item});
    
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
              <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
            
             
           

            </div>
            
          </Card.Body>
        </Card>

       </div>

    </div>
    
    
    
    
  )
}

export default ItemDetail