
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  if (typeof price === 'string') {
    const cleaned = price.replace(/[^\d.-]/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
};

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartCount, clearCart } = useContext(CartContext);
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  // Calculate prices
  const subtotal = cartItems.reduce(
    (total, item) => total + parsePrice(item.newPrice) * item.quantity,
    0
  );
  
  const shipping = subtotal > 5000 ? 0 : 200;
  const totalPrice = subtotal - discount + shipping;
  const freeShippingThreshold = 5000;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'SAVE10' && !couponApplied) {
      setDiscount(subtotal * 0.1);
      setCouponApplied(true);
    }
  };

  const removeCoupon = () => {
    setDiscount(0);
    setCouponApplied(false);
    setCoupon('');
  };

  const calculateSavings = () => {
    return cartItems.reduce((total, item) => {
      if (item.oldPrice) {
        const oldPrice = parsePrice(item.oldPrice);
        const newPrice = parsePrice(item.newPrice);
        return total + (oldPrice - newPrice) * item.quantity;
      }
      return total;
    }, 0);
  };

  const totalSavings = calculateSavings() + discount + (shipping === 0 ? 200 : 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      <div className="w-full px-2 sm:px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
            Your Shopping Cart
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-indigo-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {cartCount === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <div className="text-6xl mb-3">🛒</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Your cart is empty</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-6 text-lg">
              Add some amazing products to your cart and let's get shopping!
            </p>
            <Link 
              to="/" 
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 py-3 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Left Column - Cart Items (75%) */}
            <div className="w-full lg:w-9/12">
              {/* Shipping Progress */}
              {subtotal < freeShippingThreshold && (
                <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Add Rs.{amountToFreeShipping.toFixed(2)} more for free shipping!</span>
                    <span>{Math.round((subtotal / freeShippingThreshold) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${(subtotal / freeShippingThreshold) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {/* Cart Items List */}
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <span className="mr-2">🛍️</span> Your Cart Items
                  </h2>
                </div>
                
                <div className="divide-y divide-gray-100 max-h-[60vh] overflow-y-auto">
                  {cartItems.map(item => (
                    <div key={item.id} className="p-4 flex group hover:bg-gray-50 transition-colors">
                      {/* Product Image */}
                      <div className="w-28 flex-shrink-0">
                        <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center border">
                          <img 
                            src={item.image || "/images/default-product.jpg"} 
                            alt={item.name} 
                            className="w-full h-full object-contain p-2" 
                          />
                        </div>
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1 pl-4">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-bold text-gray-800 line-clamp-1 text-base">{item.name}</h3>
                            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
                            
                            <div className="mt-3 flex items-center">
                              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                <button 
                                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} 
                                  className="w-9 h-9 bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center text-lg"
                                  disabled={item.quantity <= 1}
                                >
                                  -
                                </button>
                                <span className="w-12 h-9 bg-white flex items-center justify-center border-x border-gray-300 text-base font-medium">
                                  {item.quantity}
                                </span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                                  className="w-9 h-9 bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center text-lg"
                                >
                                  +
                                </button>
                              </div>
                              <button 
                                onClick={() => removeFromCart(item.id)} 
                                className="ml-4 flex items-center text-red-600 hover:text-red-800 text-sm font-medium py-2 px-3 bg-red-50 rounded-md transition-colors hover:bg-red-100"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                          
                          {/* Price & Total */}
                          <div className="text-right pl-1 min-w-[100px]">
                            <div className="flex flex-col items-end">
                              <div className="font-bold text-purple-600 text-lg">
                                Rs.{(parsePrice(item.newPrice) * item.quantity).toFixed(2)}
                              </div>
                              {item.oldPrice && (
                                <div className="text-gray-400 line-through text-sm">
                                  Rs.{parsePrice(item.oldPrice).toFixed(2)}
                                </div>
                              )}
                            </div>
                            <div className="text-gray-500 mt-1 text-sm">
                              Rs.{parsePrice(item.newPrice).toFixed(2)} × {item.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Cart Actions */}
                <div className="p-4 flex justify-between gap-2 border-t border-gray-200">
                  <button 
                    onClick={clearCart} 
                    className="text-red-600 hover:text-red-800 text-sm py-2 px-4 bg-red-50 rounded-md transition-colors font-medium hover:bg-red-100"
                  >
                    Clear Cart
                  </button>
                  <Link 
                    to="/" 
                    className="text-purple-600 hover:text-purple-800 text-sm py-2 px-4 bg-purple-50 rounded-md transition-colors font-medium hover:bg-purple-100"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Column - Order Summary (Sticky Sidebar) */}
            <div className="w-full lg:w-3/12">
              <div className="sticky top-4 space-y-4">
                {/* Savings Card */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-t-xl">
                    <h2 className="font-bold text-gray-800 flex items-center text-base">
                      <span className="mr-2">💰</span> Your Savings
                    </h2>
                  </div>
                  
                  <div className="p-4 space-y-3 text-sm">
                    {cartItems.map((item, index) => (
                      item.oldPrice && (
                        <div key={`savings-${index}`} className="flex justify-between items-center">
                          <span className="text-gray-700 truncate">{item.name}</span>
                          <span className="text-green-600 font-medium">
                            -Rs.{(parsePrice(item.oldPrice) - parsePrice(item.newPrice)).toFixed(2)}
                          </span>
                        </div>
                      )
                    ))}
                    
                    {discount > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Coupon Discount</span>
                        <span className="text-green-600 font-medium">
                          -Rs.{discount.toFixed(2)}
                        </span>
                      </div>
                    )}
                    
                    {shipping === 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Free Shipping</span>
                        <span className="text-green-600 font-medium">
                          -Rs.200.00
                        </span>
                      </div>
                    )}
                    
                    <div className="pt-3 border-t border-gray-200 mt-2">
                      <div className="flex justify-between items-center text-base">
                        <span className="font-bold text-gray-800">Total Savings</span>
                        <span className="font-bold text-green-700">
                          Rs.{totalSavings.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Order Summary Card */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-t-xl">
                    <h2 className="font-bold text-gray-800 flex items-center text-base">
                      <span className="mr-2">📝</span> Order Summary
                    </h2>
                  </div>
                  
                  <div className="p-4 space-y-3 text-gray-700 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>Rs.{subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : `Rs.${shipping.toFixed(2)}`}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600 font-medium">
                        <span>Coupon Discount</span>
                        <span>-Rs.{discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="pt-3 border-t border-gray-200 mt-2">
                      <div className="flex justify-between font-bold text-purple-700 text-lg">
                        <span>Total</span>
                        <span>Rs.{totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Coupon Card */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200">
                  <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-t-xl">
                    <h2 className="font-bold text-gray-800 flex items-center text-base">
                      <span className="mr-2">🎫</span> Apply Coupon
                    </h2>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-l-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter Coupon (SAVE10)"
                        value={coupon}
                        onChange={e => setCoupon(e.target.value)}
                        disabled={couponApplied}
                      />
                      <button
                        onClick={applyCoupon}
                        disabled={couponApplied}
                        className={`bg-purple-600 text-white px-4 rounded-r-lg hover:bg-purple-700 transition text-sm font-medium ${
                          couponApplied ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        Apply
                      </button>
                    </div>
                    
                    {couponApplied && (
                      <button 
                        onClick={removeCoupon} 
                        className="text-sm text-red-500 hover:text-red-700 mt-3 font-medium"
                      >
                        Remove Coupon
                      </button>
                    )}
                    
                    <div className="mt-4 text-sm text-gray-600">
                      <p className="font-medium text-gray-800 mb-2">Available coupons:</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm font-bold mr-3">SAVE10</span>
                          <span className="text-gray-700">10% off entire order</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Checkout Button */}
                <Link 
                  to="/checkout" 
                  className="block text-center bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-4 rounded-xl font-bold hover:opacity-90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;