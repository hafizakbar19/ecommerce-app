import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const EcommerceHomePage = () => {
  const { cartItems, addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      title: 'Product 1',
      details: 'Product 1 details',
      price: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Product 2',
      details: 'Product 2 details',
      price: 20,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
      <h1>Ecommerce Home Page</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.details}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <Link to="/cart">
        Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
      </Link>
    </div>
  );
};

export default EcommerceHomePage;