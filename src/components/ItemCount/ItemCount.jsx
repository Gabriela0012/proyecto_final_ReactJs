import {useState} from 'react';
import './ItemCount.css'
import { Button } from 'react-bootstrap';

const ItemCount = ({stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const onIncrease = () => {
    if (count < stock){
      setCount(count + 1);
    };
  }
  const onDecrease = () => {
    if (count > 0){
      setCount(count - 1);
    };
  }
  

  
  return (
    <div className='contenedor-principal justify-content-center'>
      <div className='d-flex justify-content-center flex-row col-12'>
        < Button variant='primary' onClick={() => onDecrease()} className='px-3 mx-3'>
          -
        </Button>
        <h1 className='px-3'>{count}</h1>
        
        < Button variant='primary' onClick={() => onIncrease()} className='px-3 mx-3'>
          +
        </Button>
      </div>
      { count === 0 ? <Button variant='secondary'> Agregar Producto </Button> :
        < Button variant='danger' onClick = {() => (count <=stock) && onAdd(count)} className='mt-3'>
          Agregar al Carrito
        </Button>
      }
    </div>
  );


}



  
export default ItemCount