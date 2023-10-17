import React from 'react';
import '../styles/Product.css';

function ProductItem({image, name}) {
  return (
    <div className='productItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h2>{name}</h2>
      
    </div>
  )
}

export default ProductItem
