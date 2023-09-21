import React, { useState } from 'react';

const Dashboard = () => {
  const [product, setProduct] = useState({
    title: '',
    details: '',
    price: '',
    image: '',
    id: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Product Title:</label>
          <input type="text" name="title" onChange={handleChange} value={product.title} />
        </div>
        <div>
          <label htmlFor="details">Product Details:</label>
          <input type="text" name="details" onChange={handleChange} value={product.details} />
        </div>
        <div>
          <label htmlFor="price">Product Price:</label>
          <input type="text" name="price" onChange={handleChange} value={product.price} />
        </div>
        <div>
          <label htmlFor="image">Product Image:</label>
          <input type="text" name="image" onChange={handleChange} value={product.image} />
        </div>
        <div>
          <label htmlFor="id">Product ID:</label>
          <input type="text" name="id" onChange={handleChange} value={product.id} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Dashboard;