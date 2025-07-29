
import React from 'react';
import ProductCard from './ProductCard';

const BrandPageLayout = ({ bannerImage, brandName, products }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <img
        src={bannerImage}
        alt={`${brandName} Banner`}
        className="w-full h-72 object-cover rounded-b-3xl shadow-md"
      />
      <h2 className="text-4xl font-extrabold my-8 text-center text-gray-800">
        {brandName} 
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandPageLayout;