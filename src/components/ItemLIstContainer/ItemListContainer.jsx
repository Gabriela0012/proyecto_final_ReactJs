import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting }) => {
  return (
    <>
      <div className="sidebar">
      {greeting}
      </div>
      <ItemCount stock={12} initial={1} />
    </>
    

  )
}

export default ItemListContainer