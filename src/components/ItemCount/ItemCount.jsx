import {useState} from 'react';
import './ItemCount.css'
import { Button } from 'react-bootstrap';

const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(initial);

  const onIncrease = () => {
    const newValue = count + 1;
    if (newValue <= stock){
      setCount(newValue);
    };
  }
  const onDecrease = () => {
    const newValue = count - 1;
    if (newValue >= initial){
      setCount(newValue);
    };
  }
  const onAdd = () => {
    const mensaje = `Agregaste ${count} producto`;
    count === 1 ? alert(mensaje) : alert(`${mensaje}s`);
  };

  
  return (
    <div className='contenedor-principal d-flex flex-column justify-content-center col-12'>
      <div className='d-flex justify-content-center flex-row col-12'>
        < Button variant='primary' onClick={onDecrease} className='px-3 mx-3'>
          -
        </Button>{''}
        <h1 className='px-3'>{count}</h1>
        < Button variant='primary' onClick={onIncrease} className='px-3 mx-3'>
          +
        </Button>{''}
      </div>
      < Button variant='danger' onClick = {onAdd} className='mt-3'>
          Agregar al carrito
        </Button>{''}
    </div>
  );


}



  
export default ItemCount