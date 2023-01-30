import React from 'react';
import "./ProductList.css";
import Product1 from "../Product/Product1";

const ProductList1 = ({products}) => {
  return (
    <div className='product-lists grid bg-whitesmoke my-3'>
      {
        products.map(product => {
          let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

          return (
            <Product1 key = {product.id} product = {{...product, discountedPrice}} />
          )
        })
      }
    </div>
  )
}

export default ProductList1