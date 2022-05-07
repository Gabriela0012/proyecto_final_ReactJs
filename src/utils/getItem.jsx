import React from 'react';


function getItem(id) {
  const myPromise = new Promise((resolve,reject) => {
    
    const productsList = [
      {
        "price": '$1700',
        "id": 1,
        "title": "Mini Negra",
        "category" : "minis",
        "image" : require('./../imagenes/mini_negra.jpg'),
        "stock": "8"
      },
      {
        "price": '$1500',
        "id": 2,
        "title": "Jeans",
        "category" : "jeans",
        "image": require('./../imagenes/jeans_bota.jpg'),
        "stock": "8"
    
      },
      {
        "price": '$1800',
        "id": 3,
        "title": "Short Gris",
        "category" : "shorts",
        "image" : require('./../imagenes/short_gris.jpg'),
        "stock": "8"
      
      },
      {
        "price": '$1500',
        "id": 4,
        "title": "Mini",
        "category" : "minis",
        "image" : require('./../imagenes/mini.jpg'),
        "stock": "8"
      
      },
      {
        "price": '$1500',
        "id": 5,
        "title": "Mini gris",
        "category" : "minis",
        "image" : require('./../imagenes/mini_gris.jpg'),
        "stock": "8"
      
      },
      {
        "price": '$1800',
        "id": 6,
        "title": "Short",
        "category" : "shorts",
        "image" : require('./../imagenes/short.jpg'),
        "stock": "8"
      
      },
      {
        "price": '$1900',
        "id": 7,
        "title": "Short Blanco",
        "category" : "shorts",
        "image" : require('./../imagenes/short_blanco.jpg'),
        "stock": "8"
      
      },
      {
        "price": '$1800',
        "id": 8,
        "title": "Short Negro",
        "category" : "shorts",
        "image" : require('./../imagenes/short_negro.jpg'),
        "stock": "8"
      
      },
      {
        "price": '$1800',
        "id": 9,
        "title": "Jeans Mom",
        "category" : "jeans",
        "image" : require('./../imagenes/jeans_mon.jpg'),
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

export default getItem