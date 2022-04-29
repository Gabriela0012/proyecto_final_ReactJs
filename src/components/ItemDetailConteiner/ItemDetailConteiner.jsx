import React, { useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


function getItem() {
  const myPromise = new Promise((resolve,reject) => {
    const item = {
      "price": '$1700',
      "id": 1,
      "title": "Mini negra",
      "image" : require('../../imagenes/mini_negra.jpg')
    };

    setTimeout(() => {
      resolve(item);
    }, 2000);
  });
  return myPromise;
    
}

function ItemDetailConteiner() {
  const [item, setItem] = useState({});
  useEffect(() => {
    getItem()
      .then(res => {
        setItem(res);
      });
  
  },[]); 

  return (
    <div className='d-flex row'>
      <ItemDetail item={item} />
    </div>

  )

}





export default ItemDetailConteiner