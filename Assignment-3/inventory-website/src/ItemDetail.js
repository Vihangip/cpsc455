
import React from 'react';

function ItemDetail({ name, description, price, stock }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
      <p>Stock: {stock}</p>
    </div>
  );
}

export default ItemDetail;
