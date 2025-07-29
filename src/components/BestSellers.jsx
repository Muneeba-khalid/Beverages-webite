

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { bestSellers } from '../data/bestSellers';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaCheck, FaStar } from 'react-icons/fa';

const BestSellers = () => {
  const { addToCart } = useContext(CartContext);
  const [addedProductIds, setAddedProductIds] = useState([]);

  // Get first 5 best sellers
  const featuredBestSellers = bestSellers.slice(0, 5);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductIds(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedProductIds(prev => prev.filter(id => id !== product.id));
    }, 1500);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-16">
      {/* Header Section */}
      <div className="relative mb-8 sm:mb-14">
        {/* Centered Heading with Icon */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaStar className="text-yellow-500 text-xl sm:text-2xl" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
            BEST SELLERS
          </h2>
          <FaStar className="text-yellow-500 text-xl sm:text-2xl" />
        </div>
        
        {/* View All Button - Positioned to the right */}
        <div className="absolute right-0 top-0">
          <Link 
            to="/AllBestSellers" 
            className="text-sm sm:text-base font-semibold text-[#2D336B] hover:text-white hover:bg-[#2D336B] px-4 py-2 border-2 border-[#2D336B] rounded-lg transition-all duration-300 whitespace-nowrap"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
        {featuredBestSellers.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.05] border border-gray-100 hover:border-gray-200"
          >
            <Link to={`/product/${product.id}`}>
              <div className="overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[180px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-contain object-center"
                  loading="lazy"
                />
              </div>
            </Link>

            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 truncate">
                {product.name}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 min-h-[50px] line-clamp-3">
                {product.description}
              </p>

              <div className="relative mt-1 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-red-600">
                    {product.newPrice}
                  </span>
                  <span className="line-through text-gray-400 text-xs sm:text-sm">
                    {product.oldPrice}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md ${
                    addedProductIds.includes(product.id)
                      ? 'bg-[#2D336B]'
                      : 'bg-[#A9B5DF]'
                  } text-white hover:bg-[#68507B] hover:scale-110 transition duration-300 border-2 ${
                    addedProductIds.includes(product.id)
                      ? 'border-[#2D336B]'
                      : 'border-[#A9B5DF]'
                  }`}
                  aria-label={`Add ${product.name} to cart`}
                >
                  {addedProductIds.includes(product.id) ? (
                    <FaCheck />
                  ) : (
                    <FaPlus />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;