

// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Load from localStorage initially
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   // Save to localStorage whenever cartItems change
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.id === product.id);
      
//       if (existingItem) {
//         // Update quantity if already in cart
//         const updatedCart = prevItems.map(item => 
//           item.id === product.id 
//             ? { ...item, quantity: item.quantity + 1 } 
//             : item
//         );
//         return updatedCart;
//       } else {
//         // Add new item to cart
//         const updatedCart = [...prevItems, { ...product, quantity: 1 }];
//         return updatedCart;
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(prevItems => 
//       prevItems.filter(item => item.id !== productId)
//     );
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) return;
    
//     setCartItems(prevItems => 
//       prevItems.map(item => 
//         item.id === productId 
//           ? { ...item, quantity: newQuantity } 
//           : item
//       )
//     );
//   };

//   // Calculate total cart count
//   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <CartContext.Provider value={{ 
//       cartItems, 
//       addToCart,
//       removeFromCart,
//       updateQuantity,
//       cartCount
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load from localStorage initially
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if already in cart
        const updatedCart = prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
        return updatedCart;
      } else {
        // Add new item to cart
        const updatedCart = [...prevItems, { ...product, quantity: 1 }];
        return updatedCart;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  // Calculate total cart count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart,
      removeFromCart,
      updateQuantity,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;