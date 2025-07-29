// src/components/BrandPage.jsx
import React from 'react';
import products from '../data/products';

const BrandPage = ({ brand }) => {
  const brandProducts = products.filter(product => product.brand === brand);
  const bannerSrc = `/images/${brand.toLowerCase()}-banner.jpg`; // Make sure banner image exists

  return (
    <div>
      <img src={bannerSrc} alt={`${brand} banner`} className="w-full h-64 object-cover rounded-xl mb-6" />
      <h2 className="text-2xl font-bold mb-4 text-center">{brand}Collections</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {brandProducts.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="font-semibold">{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
