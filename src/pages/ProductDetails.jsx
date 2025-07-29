
// import { useParams, Link } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { products } from '../data/product';
// import { CartContext } from '../context/CartContext';
// import { FaPlus, FaCheck, FaHeart, FaRegHeart } from 'react-icons/fa';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addToCart } = useContext(CartContext);
//   const [addedProductIds, setAddedProductIds] = useState([]);
//   const [wishlistIds, setWishlistIds] = useState([]);
//   const [selectedSize, setSelectedSize] = useState('250ml');
//   const [quantity, setQuantity] = useState(1);

//   const product = products.find(p => p.id === parseInt(productId));
//   const relatedProducts = products.filter(
//     p => p.brand === product?.brand && p.id !== product?.id
//        );

//   const handleAddToCart = (product) => {
//     const productWithSize = { ...product, size: selectedSize, quantity };
//     addToCart(productWithSize);
//     setAddedProductIds(prev => [...prev, product.id]);
//     setTimeout(() => {
//       setAddedProductIds(prev => prev.filter(id => id !== product.id));
//     }, 1500);
//   };

//   const handleWishlistToggle = (productId) => {
//     setWishlistIds((prev) =>
//       prev.includes(productId)
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const handleQuantityChange = (type) => {
//     setQuantity(prev =>
//       type === 'inc' ? prev + 1 : prev > 1 ? prev - 1 : 1
//     );
//   };

//   if (!product) return <div className="text-center py-20">Product not found</div>;

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-10">
//       {/* Breadcrumb Navigation */}
//       <div className="text-sm mb-4 text-gray-500">
//         <Link to="/" className="hover:underline">Home</Link> &gt;{' '}
//         <Link to="/BrandPage" className="hover:underline">Brands</Link> &gt;{' '}
//         <Link to={`/brands/${product.brand}`} className="hover:underline">{product.brand}</Link> &gt;{' '}
//         <span className="text-gray-700 font-medium">{product.name}</span>
//       </div>

//       {/* Product Details */}
//       <div className="flex flex-col lg:flex-row gap-10 mb-16">
//         <div className="lg:w-1/2">
//           <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-auto max-h-[500px] object-contain"
//             />
//           </div>
//         </div>

//         <div className="lg:w-1/2 flex flex-col justify-between">
//           <div>
//             <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//             <p className="text-gray-600 text-lg mb-4">{product.description}</p>

//             {/* Fragrance Notes */}
//             <div className="mb-6">
//               <h4 className="font-semibold text-gray-800">Fragrance Notes</h4>
//               <p className="text-gray-600 italic">{product.notes || "Top: Citrus • Heart: Floral • Base: Woody"}</p>
//             </div>

//             <div className="flex gap-4 items-center mb-4">
//               <span className="text-2xl font-bold text-red-600">RS: {product.newPrice}</span>
//               <span className="line-through text-gray-400 text-lg">RS: {product.oldPrice}</span>
//             </div>

//             {/* Size Selection Buttons */}
//             <div className="mb-4">
//               <span className="block text-sm font-medium text-gray-700 mb-2">Select Size</span>
//               <div className="flex gap-3">
//                 {['250ml', '500ml', '750ml', '1L'].map(size => (
//                   <button
//                     key={size}
//                     className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
//                       selectedSize === size
//                         ? 'bg-[#2D336B] text-white border-[#2D336B]'
//                         : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
//                     }`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity Selector */}
//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-sm font-medium text-gray-700">Quantity</span>
//               <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1">
//                 <button
//                   onClick={() => handleQuantityChange('dec')}
//                   className="text-lg font-bold text-gray-700 hover:text-[#2D336B]"
//                 >-</button>
//                 <span className="text-md font-medium">{quantity}</span>
//                 <button
//                   onClick={() => handleQuantityChange('inc')}
//                   className="text-lg font-bold text-gray-700 hover:text-[#2D336B]"
//                 >+</button>
//               </div>
//             </div>

//             {/* Add to Cart & Wishlist */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 ${
//                   addedProductIds.includes(product.id)
//                     ? 'bg-[#2D336B]'
//                     : 'bg-[#A9B5DF] hover:bg-[#68507B]'
//                 }`}
//               >
//                 {addedProductIds.includes(product.id) ? <FaCheck /> : <FaPlus />}
//                 {addedProductIds.includes(product.id) ? 'Added' : 'Add to Cart'}
//               </button>

//               <button
//                 onClick={() => handleWishlistToggle(product.id)}
//                 className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-pink-100 transition"
//               >
//                 {wishlistIds.includes(product.id) ? (
//                   <FaHeart className="text-pink-600" />
//                 ) : (
//                   <FaRegHeart className="text-gray-600" />
//                 )}
//               </button>
//             </div>

//             {/* About This Fragrance */}
//             <div className="mt-8">
//               <h4 className="font-semibold text-gray-800 mb-2">About this Fragrance</h4>
//               <p className="text-gray-600">
//                 {product.about ||
//                   "Crafted with passion and precision, this fragrance captures the essence of elegance and luxury, perfect for every special occasion."}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-20">
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 uppercase tracking-wide">
//           Related Products
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {relatedProducts.map((rp) => (
//             <div
//               key={rp.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.05]"
//             >
//               <Link to={`/product/${rp.id}`}>
//                 <div className="overflow-hidden relative">
//                   <img
//                     src={rp.image}
//                     alt={rp.name}
//                     className="w-full h-[180px] sm:h-[320px] md:h-[420px] object-contain object-center transition-transform duration-700"
//                     loading="lazy"
//                   />
//                 </div>
//               </Link>

//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{rp.name}</h3>
//                 <p className="text-gray-600 text-sm mb-2 min-h-[50px] line-clamp-3">
//                   {rp.description}
//                 </p>

//                 <div className="mt-1 flex items-center justify-between">
//                   <div className="flex flex-col">
//                     <span className="text-lg font-bold text-red-600">RS:{rp.newPrice}</span>
//                     <span className="line-through text-gray-400 text-sm">RS:{rp.oldPrice}</span>
//                   </div>
//                   <button
//                     onClick={() => handleAddToCart(rp)}
//                     className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md ${
//                       addedProductIds.includes(rp.id) ? 'bg-[#2D336B]' : 'bg-[#A9B5DF]'
//                     } text-white hover:bg-[#68507B] hover:scale-110 transition duration-300`}
//                     aria-label={`Add ${rp.name} to cart`}
//                   >
//                     {addedProductIds.includes(rp.id) ? <FaCheck /> : <FaPlus />}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;







import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/product';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaMinus, FaCheck, FaStar, FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add the product with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link 
        to="/" 
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-200"
      >
        <IoIosArrowBack className="mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[600px] object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
            </div>
            <span className="text-gray-600">(24 reviews)</span>
          </div>

          <div className="mb-6">
            <span className="text-2xl font-bold text-red-600">
              {product.newPrice}
            </span>
            {product.oldPrice && (
              <span className="ml-2 text-lg text-gray-500 line-through">
                {product.oldPrice}
              </span>
            )}
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-8">
            <span className="mr-4 text-gray-700 font-medium">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <FaMinus />
              </button>
              <span className="px-4 py-1 text-lg font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`flex items-center justify-center py-3 px-6 rounded-lg font-medium text-white transition-colors duration-300 ${
              addedToCart || isInCart
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-[#2D336B] hover:bg-[#1A1F4B]'
            }`}
          >
            {addedToCart || isInCart ? (
              <>
                <FaCheck className="mr-2" />
                {isInCart ? 'Added to Cart' : 'Added!'}
              </>
            ) : (
              <>
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </>
            )}
          </button>

          {/* Product Details */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-3">Product Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Brand:</strong> {product.brand}</li>
              <li><strong>Category:</strong> Beverages</li>
              <li><strong>Availability:</strong> In Stock</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products
            .filter(p => p.brand === product.brand && p.id !== product.id)
            .slice(0, 5)
            .map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <Link to={`/product/${relatedProduct.id}`}>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-red-600 font-bold">
                      {relatedProduct.newPrice}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;