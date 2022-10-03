import React from 'react';
import ProductItem from '../components/productItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/productList.scss';

function ProductList() {
  const API = 'https://api.escuelajs.co/api/v1/products';
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {React.Children.toArray(
          products.map((item) => <ProductItem product={item} />)
        )}
      </div>
    </section>
  );
}

export default ProductList;
