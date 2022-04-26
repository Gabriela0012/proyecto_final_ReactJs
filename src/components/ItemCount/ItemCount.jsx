import {useState} from 'react';
import Boton from './boton';
import Contador from './contador';
import './ItemCount.css'

function ItemCount() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='Contenedor'>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
       <Boton 
         texto='Clic'
         esBotonDeClic={true}
          manejarClic={manejarClic} />
       <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>

    </div>

    
    
   

    
  )
}

export default ItemCount