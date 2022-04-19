import React from 'react';
import './ItemListContainer.css';


const ItemListContainer = ({greeting }) => {
  return (
    <div className="sidebar">
      {greeting}
      </div>
  )
}

export default ItemListContainer