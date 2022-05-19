import React, { useEffect, useState} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import {useParams } from 'react-router-dom';
// import getItem from '../../utils/getItem';
import { doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

function getItem(id){
  const db = getFirestore();

  const itemRef = doc(db, 'items', id);

  return getDoc(itemRef);





}



function ItemDetailConteiner() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    getItem(id)
      .then(snapshot => {
        setItem({...snapshot.data(), id: snapshot.id});
      });
  
  },[id]); 

  return (
    
      <div className='d-flex row'>
        <ItemDetail item={item} />
      </div>
  
    

  )

}





export default ItemDetailConteiner