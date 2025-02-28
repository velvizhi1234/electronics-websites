import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Laptop', price: 1000, image: 'laptop.jpg' },
  { id: 2, name: 'Smartphone', price: 500, image: 'smartphone.jpg' },
   
];

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Electronics Store</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;