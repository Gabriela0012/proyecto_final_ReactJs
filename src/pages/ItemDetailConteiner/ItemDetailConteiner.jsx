import React, { useEffect, useState} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import {useParams } from 'react-router-dom';


function getItem(id) {
  const myPromise = new Promise((resolve,reject) => {
    
    const productsList = [
      {
        "price": '$1700',
        "id": 1,
        "title": "Mini Negra",
        "image" : require('../../imagenes/mini_negra.jpg'),
        "stock": "8"
      },
      {
        "price": '$1500',
        "id": 2,
        "title": "Jeans",
        "image": require('../../imagenes/jeans_bota.jpg'),
        "stock": "8"
    
      },
      {
        "price": '$1800',
        "id": 3,
        "title": "Short Gris",
        "image" : require('../../imagenes/short_gris.jpg'),
        "stock": "8"
      
      },
    ];
    const item = productsList.filter(item => item.id === parseInt(id));

    setTimeout(() => {
      resolve(item[0]);
    }, 1000);
  });
  return myPromise;
    
}

function ItemDetailConteiner() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    getItem(id)
      .then(res => {
        setItem(res);
      });
  
  },[id]); 

  return (
    
      <div className='d-flex row'>
        <ItemDetail item={item} />
      </div>
  
    

  )

}





export default ItemDetailConteiner