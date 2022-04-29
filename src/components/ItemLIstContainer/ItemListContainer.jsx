import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
// import ItemList from '../ItemList/ItemList';
// import ItemCount from '../ItemCount/ItemCount';
import ItemDetailConteiner from '../ItemDetailConteiner/ItemDetailConteiner';


function getProducts(){
  const myPromise = new Promise((resolve, reject) =>{
    const productsList = [
      {
        "price": 1700,
        "id": 1,
        "title": "Mini negra",
        "image" : require('../../imagenes/mini_negra.jpg')
      },
      {
        "price": 1500,
        "id": 2,
        "title": "Mini",
        "image": require('../../imagenes/mini.jpg')
    
      },
      {
        "price": 1800,
        "id": 3,
        "title": "mini gris",
        "image" : require('../../imagenes/mini_gris.jpg')
      
      },
    ]
    setTimeout(() =>{
      resolve(productsList);
    },2000);
  });
  return myPromise;
}
function ItemListContainer ({greeting }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
     .then (res => {
       setProducts(res);
    })
    
  },[]);
  
  return (
    <>
      <div className="sidebar">
      {greeting}
      </div>
      {/* <ItemCount stock={12} initial={0}/>
      <ItemList items={products}/> */}
      <ItemDetailConteiner />
    </>
    

  )
}

export default ItemListContainer;