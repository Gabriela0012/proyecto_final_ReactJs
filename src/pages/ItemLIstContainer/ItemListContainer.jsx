import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import {useParams } from 'react-router-dom';
import getProducts from '../../utils/getProducts';



function ItemListContainer () {

  const [products, setProducts] = useState([]);
  const {categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
     .then (res => {
       setProducts(res);
    })
    
  },[categoryId]);
  
  return (
   
     
      <ItemList items={products}/>
     
   

  )
}

export default ItemListContainer;