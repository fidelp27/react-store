import React, { useContext } from 'react';
import AppContext from '../context/appContext';
import '../styles/orderItem.scss';
import closeIcon from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (product) => {
    removeFromCart(product);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt="bike" />
      </figure>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <img
        src={closeIcon}
        alt="close"
        onClick={() => handleRemove(product.id)}
      />
    </div>
  );
};

export default OrderItem;
