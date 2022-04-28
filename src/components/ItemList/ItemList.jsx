import React from 'react';
import Item from '../Item/Item';


function ItemList({ items }) {
  return (
    <div className='item-list d-flex row justify-content-around m-3'>
      {items.map(item => <Item item={item} key={item.id}/>)}
    </div>
  )
}

export default ItemList;