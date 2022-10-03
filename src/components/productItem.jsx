import React, { useContext } from 'react';
import AppContext from '../context/appContext';
import '../styles/productItem.scss';
import btnAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.name} loading="lazy" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={btnAddToCart} alt="btn-add-to-cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
