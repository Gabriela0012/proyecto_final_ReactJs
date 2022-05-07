import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import {useParams } from 'react-router-dom';


function getProducts(category){
  const myPromise = new Promise((resolve, reject) =>{
    const productsList = [
      {
        "price": '$1700',
        "id": 1,
        "title": "Mini Negra",
        "category" : "minis",
        "image" : require('../../imagenes/mini_negra.jpg'),
        "stock": "8"
      },
      {
        "price": '$1500',
        "id": 2,
        "title": "Jeans",
        "category" : "jeans",
        "image": require('../../imagenes/jeans_bota.jpg'),
        "stock": "8"
    
      },
      {
        "price": '$1800',
        "id": 3,
        "title": "Short Gris",
        "category" : "shorts",
        "image" : require('../../imagenes/short_gris.jpg'),
        "stock": "8"
      
      },
    ];
    const productsFiltered = category ? productsList.filter (p => p.category === category) : productsList;
    setTimeout(() =>{
      resolve(productsFiltered);
    },1000);
  });
  return myPromise;
}
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