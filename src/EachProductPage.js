import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';

const EachProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = {
    id: 1,
    title: 'Product 1',
    details: 'Product 1 details',
    price: 10,
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.details}</p>
      <p>${product.price}</p>
      <img src={product.image} alt={product.title} />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default EachProductPage;