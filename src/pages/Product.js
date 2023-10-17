import React from 'react';
import { ProductList} from '../helpers/ProductList';
import ProductItem from '../components/ProductItem';
import '../styles/Product.css';

function Product() {
  return (
    <div className='product'>
        <h1 className="productTitle">Products we sell</h1>
        <div className='productList'>{ProductList.map((productItem, key)=>{
            return <ProductItem 
            key={key}
            image={productItem.image} 
            name={productItem.name}/>
        })}

        </div>
      
    </div>
  )
}

export default Product
