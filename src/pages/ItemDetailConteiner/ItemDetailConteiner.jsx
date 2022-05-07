import React, { useEffect, useState} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import {useParams } from 'react-router-dom';
import getItem from '../../utils/getItem';




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