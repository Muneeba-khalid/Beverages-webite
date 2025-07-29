


import React, { useState, useEffect } from 'react';
import { SpecialDrinks } from '../data/SpecialDrinks';
import { FaShoppingCart, FaTimes, FaStar, FaGlassCheers, FaPlus, FaMinus, FaChevronRight } from 'react-icons/fa';
import { GiCoffeeCup, GiSodaCan, GiWineBottle, GiMartini, GiBeerBottle, GiWineGlass, GiWaterBottle } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
const SpecialDrinksPage = () => {
  const navigate = useNavigate(); 
  const [validatedDrinks, setValidatedDrinks] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [selectedSize, setSelectedSize] = useState('regular');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  // Floating icons only for this section
  const [beverageIcons, setBeverageIcons] = useState([
    { icon: <GiCoffeeCup />, size: 30, top: 5, left: 5, rotate: 10, xSpeed: 0.2, ySpeed: 0.1 },
    { icon: <GiSodaCan />, size: 40, top: 15, left: 85, rotate: -15, xSpeed: -0.15, ySpeed: 0.2 },
    { icon: <GiWineBottle />, size: 50, top: 70, left: 10, rotate: 5, xSpeed: 0.1, ySpeed: -0.1 },
    { icon: <GiMartini />, size: 35, top: 80, left: 80, rotate: -20, xSpeed: -0.2, ySpeed: 0.15 },
    { icon: <GiBeerBottle />, size: 45, top: 40, left: 50, rotate: 15, xSpeed: 0.15, ySpeed: 0.15 },
    { icon: <FaGlassCheers />, size: 30, top: 10, left: 60, rotate: -10, xSpeed: -0.1, ySpeed: -0.2 },
    { icon: <GiWineGlass />, size: 35, top: 30, left: 20, rotate: 25, xSpeed: 0.25, ySpeed: 0.1 },
    { icon: <GiWaterBottle />, size: 45, top: 50, left: 90, rotate: -10, xSpeed: -0.15, ySpeed: -0.25 },
  { icon: <GiCoffeeCup />, size: 36, top: 20, left: 10, rotate: 12 },       // Coffee
  { icon: <GiMartini />, size: 32, top: 60, left: 85, rotate: -15 },       // Milkshake / Mocktail
  { icon: <GiSodaCan />, size: 40, top: 35, left: 30, rotate: 8 },         // Juice
  { icon: <GiWineGlass />, size: 34, top: 75, left: 60, rotate: -18 },     // Tea
  { icon: <GiWaterBottle />, size: 30, top: 25, left: 70, rotate: 22 }, 
  ]);

  useEffect(() => {
    if (SpecialDrinks && Array.isArray(SpecialDrinks)) {
      const validDrinks = SpecialDrinks.filter(drink => drink && drink.id);
      setValidatedDrinks(validDrinks);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const moveIcons = () => {
      setBeverageIcons(prevIcons => 
        prevIcons.map(icon => {
          let newLeft = icon.left + icon.xSpeed;
          let newTop = icon.top + icon.ySpeed;
          
          if (newLeft > 95 || newLeft < 5) {
            newLeft = Math.max(5, Math.min(95, newLeft));
            return { ...icon, left: newLeft, xSpeed: -icon.xSpeed };
          }
          if (newTop > 95 || newTop < 5) {
            newTop = Math.max(5, Math.min(95, newTop));
            return { ...icon, top: newTop, ySpeed: -icon.ySpeed };
          }
          return { ...icon, left: newLeft, top: newTop };
        })
      );
    };

    const animationId = setInterval(moveIcons, 50);
    return () => clearInterval(animationId);
  }, []);

  const getSizePrice = (product, size) => {
    const basePrice = parseFloat(product.newPrice.replace(/[^0-9.]/g, ''));
    switch(size) {
      case 'small': return (basePrice * 0.8).toFixed(2);
      case 'large': return (basePrice * 1.3).toFixed(2);
      default: return basePrice.toFixed(2);
    }
  };

  const addToCart = (product, event) => {
    if (isAddingToCart) return;
    setIsAddingToCart(true);
    
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const existingItem = cart.find(item => 
      item.id === product.id && item.size === selectedSize
    );
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id && item.size === selectedSize
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { 
        ...product, 
        quantity: 1,
        size: selectedSize,
        price: getSizePrice(product, selectedSize)
      }]);
    }
    
    setNotificationMessage(`✓ ${product.name} (${selectedSize}) added to cart!`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
    
    setSelectedSize('regular');
    setTimeout(() => setIsAddingToCart(false), 500);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    ));
  };

  const decrementQuantity = (productId) => {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem.quantity > 1) {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ));
    } else {
      removeFromCart(productId);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity);
    }, 0).toFixed(2);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setSelectedSize('regular');
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    const scrollY = window.scrollY;
    setShowModal(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 10);
  };

  const toggleCartSidebar = () => {
    setShowCartSidebar(!showCartSidebar);
    if (!showCartSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const styles = {
    page: {
      background: 'radial-gradient(circle at center, #fff9f4 0%, #ffe9d6 100%)',
      padding: '0',
      margin: '0',
      color: '#5e3023',
      fontFamily: '"Poppins", sans-serif',
      minHeight: '100vh'
    },
    content: {
      position: 'relative'
    },
    headerContainer: {
      padding: isMobile ? '60px 20px 30px' : '100px 40px 50px',
      textAlign: 'center'
    },
    mainTitle: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      color: '#5e3023',
      fontWeight: '600',
      margin: '0',
      textShadow: '2px 2px 8px rgba(0,0,0,0.1)',
      letterSpacing: '1px',
      marginBottom: '15px'
    },
    subtitle: {
      fontSize: isMobile ? '1.2rem' : '1.8rem',
      margin: '0',
      color: '#7a4b3a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px'
    },
    productsContainer: {
      width: '100%',
      padding: isMobile ? '0 15px 40px' : '0 40px 60px',
      margin: '0 auto',
      position: 'relative',
      maxWidth: '1800px'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isMobile ? '20px' : '30px',
      marginTop: '30px'
    },
    productCard: {
      backgroundColor: '#362828',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      position: 'relative',
      border: '1px solid #63514F'
    },
    productBadge: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#8B7069',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: '20px',
      fontSize: '0.7rem',
      fontWeight: 'bold',
      zIndex: '1',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    productImageContainer: {
      backgroundColor: '#63514F',
      padding: '10px',
      height: isMobile ? '220px' : '320px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    productImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      borderRadius: '8px',
      transition: 'transform 0.3s ease',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)'
    },
    productInfo: {
      padding: '20px 15px',
      flex: '1',
      display: 'flex',
      flexDirection: 'column'
    },
    productTitle: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      fontWeight: '600',
      marginBottom: '12px',
      color: '#D1B8B0',
      minHeight: 'auto'
    },
    productRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      marginBottom: '12px',
      color: '#FFD700'
    },
    priceContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '15px',
      alignItems: 'center'
    },
    newPrice: {
      fontWeight: '700',
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      color: '#AF9284'
    },
    oldPrice: {
      textDecoration: 'line-through',
      color: '#8B7069',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    addToCartBtn: {
      backgroundColor: '#8B7069',
      color: '#fff',
      border: 'none',
      padding: '12px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: 'auto',
      fontSize: isMobile ? '1rem' : '1.1rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    cartCount: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#AF9284',
      color: '#0F0909',
      padding: '15px 20px',
      borderRadius: '50px',
      fontWeight: '700',
      boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
      zIndex: '999',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      width: 'auto',
      minWidth: '120px',
      height: '50px'
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(15, 9, 9, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1000',
      backdropFilter: 'blur(5px)'
    },
    productModal: {
      backgroundColor: '#362828',
      borderRadius: '12px',
      width: isMobile ? '90%' : '70%',
      maxWidth: '900px',
      maxHeight: '90vh',
      overflowY: 'auto',
      position: 'relative',
      boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
      border: '1px solid #63514F'
    },
    closeModal: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'rgba(139, 112, 105, 0.3)',
      border: 'none',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#D1B8B0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalContent: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      padding: '30px'
    },
    modalImageContainer: {
      flex: '1',
      padding: '20px',
      backgroundColor: '#63514F',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: isMobile ? '300px' : '450px'
    },
    modalImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      borderRadius: '8px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
    },
    modalDetails: {
      flex: '1',
      padding: isMobile ? '20px 0 0' : '0 0 0 30px',
      display: 'flex',
      flexDirection: 'column'
    },
    modalTitle: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#D1B8B0'
    },
    modalSubtitle: {
      fontSize: '1.1rem',
      color: '#AF9284',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    modalRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '20px',
      color: '#FFD700'
    },
    sizeOptions: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px'
    },
    sizeOption: {
      padding: '8px 15px',
      border: '2px solid #63514F',
      borderRadius: '20px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: '#362828',
      color: '#D1B8B0'
    },
    selectedSize: {
      borderColor: '#AF9284',
      backgroundColor: '#8B7069',
      color: '#fff'
    },
    modalPriceContainer: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      marginBottom: '25px'
    },
    modalNewPrice: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#AF9284'
    },
    modalOldPrice: {
      fontSize: '1.4rem',
      color: '#8B7069',
      textDecoration: 'line-through'
    },
    description: {
      lineHeight: '1.8',
      color: '#D1B8B0',
      marginBottom: '30px',
      fontSize: '1.2rem'
    },
    modalBenefits: {
      marginBottom: '30px'
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '10px',
      color: '#AF9284',
      fontSize: '1.1rem'
    },
    modalAddToCartBtn: {
      backgroundColor: '#8B7069',
      color: '#fff',
      border: 'none',
      padding: '15px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '1.2rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      marginTop: 'auto'
    },
    cartSidebar: {
      position: 'fixed',
      top: '0',
      right: '0',
      width: isMobile ? '100%' : '400px',
      height: '100vh',
      backgroundColor: '#362828',
      zIndex: '1001',
      transform: showCartSidebar ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '1px solid #63514F',
      boxShadow: '-10px 0 30px rgba(0,0,0,0.3)'
    },
    cartHeader: {
      padding: '20px',
      borderBottom: '1px solid #63514F',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#362828'
    },
    cartTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#D1B8B0',
      margin: '0'
    },
    closeCartBtn: {
      background: 'none',
      border: 'none',
      color: '#D1B8B0',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cartItems: {
      flex: '1',
      overflowY: 'auto',
      padding: '20px'
    },
    cartItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      paddingBottom: '20px',
      borderBottom: '1px solid #63514F'
    },
    cartItemImage: {
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginRight: '15px',
      backgroundColor: '#63514F',
      padding: '5px'
    },
    cartItemDetails: {
      flex: '1'
    },
    cartItemName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#D1B8B0',
      marginBottom: '5px'
    },
    cartItemSize: {
      fontSize: '0.9rem',
      color: '#8B7069',
      marginBottom: '5px'
    },
    cartItemPrice: {
      fontSize: '1rem',
      color: '#AF9284',
      marginBottom: '10px'
    },
    cartItemActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    quantityBtn: {
      backgroundColor: '#63514F',
      border: 'none',
      color: '#D1B8B0',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    quantityDisplay: {
      minWidth: '30px',
      textAlign: 'center',
      color: '#D1B8B0'
    },
    removeItemBtn: {
      marginLeft: 'auto',
      background: 'none',
      border: 'none',
      color: '#AF9284',
      cursor: 'pointer',
      fontSize: '1rem'
    },
    cartFooter: {
      padding: '20px',
      borderTop: '1px solid #63514F'
    },
    cartTotal: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    },
    totalText: {
      fontSize: '1.2rem',
      color: '#D1B8B0',
      fontWeight: '600'
    },
    totalAmount: {
      fontSize: '1.3rem',
      color: '#AF9284',
      fontWeight: '700'
    },
    checkoutBtn: {
      width: '100%',
      backgroundColor: '#8B7069',
      color: '#fff',
      border: 'none',
      padding: '15px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    emptyCart: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: '#AF9284',
      textAlign: 'center',
      padding: '20px'
    },
    emptyCartIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      color: '#8B7069'
    },
    emptyCartText: {
      fontSize: '1.2rem',
      marginBottom: '20px'
    },
    overlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(15, 9, 9, 0.7)',
      zIndex: '1000',
      display: showCartSidebar ? 'block' : 'none',
      backdropFilter: 'blur(3px)'
    },
    notification: {
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#8B7069',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      zIndex: 1002,
      animation: 'fadeInOut 2s ease-in-out',
      maxWidth: '90%',
      textAlign: 'center',
      willChange: 'transform'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.content}>
        {/* Header Section */}
        <div style={styles.headerContainer}>
          <h1 style={styles.mainTitle}>Signature Special Drinks</h1>
          <p style={styles.subtitle}>
            <FaGlassCheers style={{ 
              fontSize: '1.5em',
              color: '#7a4b3a',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
              animation: 'drinkFloat 3s ease-in-out infinite 1s' 
            }} /> 
            Unique & Refreshing Creations
          </p>
        </div>

        {/* Products Container with Floating Icons */}
        <div style={styles.productsContainer}>
          {/* Floating Icons - Only in this section */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.9,
            overflow: 'hidden'
          }}>
            {beverageIcons.map((beverage, index) => (
              <div 
                key={index}
                style={{
                  position: 'absolute',
                  fontSize: `${beverage.size}px`,
                  top: `${beverage.top}%`,
                  left: `${beverage.left}%`,
                  transform: `rotate(${beverage.rotate}deg)`,
                  color: 'rgba(94, 48, 35, 0.4)',
                  transition: 'all 0.5s linear',
                  willChange: 'transform',
                  filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.2))'
                }}
              >
                {beverage.icon}
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div style={styles.productsGrid}>
            {validatedDrinks.map((product) => (
              <div
                key={product.id}
                style={{
                  ...styles.productCard,
                  transform: isHovered === product.id ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: isHovered === product.id ? '0 15px 30px rgba(0,0,0,0.3)' : '0 8px 20px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={() => setIsHovered(product.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {product.isNew && (
                  <div style={styles.productBadge}>
                    <FaStar /> New
                  </div>
                )}
                <div 
                  style={styles.productImageContainer} 
                  onClick={() => openProductDetails(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{
                      ...styles.productImage,
                      transform: isHovered === product.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                </div>
                <div style={styles.productInfo}>
                  <h3 style={styles.productTitle}>{product.name}</h3>
                  <div style={styles.productRating}>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <span style={{ color: '#AF9284', fontSize: '0.9rem' }}>(24)</span>
                  </div>
                  <div style={styles.priceContainer}>
                    <span style={styles.newPrice}>{product.newPrice}</span>
                    {product.oldPrice && <span style={styles.oldPrice}>{product.oldPrice}</span>}
                  </div>
                  <button 
                    style={styles.addToCartBtn}
                    onClick={(e) => {
                      setSelectedProduct(product);
                      setShowModal(true);
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showModal && selectedProduct && (
          <div style={styles.modalOverlay} onClick={closeModal}>
            <div style={styles.productModal} onClick={(e) => e.stopPropagation()}>
              <button style={styles.closeModal} onClick={closeModal}>
                <FaTimes />
              </button>
              <div style={styles.modalContent}>
                <div style={styles.modalImageContainer}>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    style={styles.modalImage}
                  />
                </div>
                <div style={styles.modalDetails}>
                  <h2 style={styles.modalTitle}>{selectedProduct.name}</h2>
                  <p style={styles.modalSubtitle}>
                    <FaGlassCheers /> Unique & Refreshing
                  </p>
                  <div style={styles.modalRating}>
                    <div>
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span style={{ color: '#AF9284' }}>4.8 (24 reviews)</span>
                  </div>

                  <div style={styles.sizeOptions}>
                    {['small', 'regular', 'large'].map(size => (
                      <div 
                        key={size}
                        style={{
                          ...styles.sizeOption,
                          ...(selectedSize === size ? styles.selectedSize : {})
                        }}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </div>
                    ))}
                  </div>

                  <div style={styles.modalPriceContainer}>
                    <span style={styles.modalNewPrice}>
                      RS: {getSizePrice(selectedProduct, selectedSize)}
                    </span>
                    {selectedProduct.oldPrice && (
                      <span style={styles.modalOldPrice}>{selectedProduct.oldPrice}</span>
                    )}
                  </div>

                  <p style={styles.description}>
                    {selectedProduct.description || "Our signature special drink is crafted with premium ingredients to deliver a unique and refreshing experience. Each sip offers a perfect balance of flavors that will delight your taste buds."}
                  </p>
                  <div style={styles.modalBenefits}>
                    <div style={styles.benefitItem}>
                      <FaGlassCheers /> Premium ingredients
                    </div>
                    <div style={styles.benefitItem}>
                      <FaGlassCheers /> Unique flavor profile
                    </div>
                    <div style={styles.benefitItem}>
                      <FaGlassCheers /> Refreshing taste
                    </div>
                    <div style={styles.benefitItem}>
                      <FaGlassCheers /> Perfectly balanced
                    </div>
                  </div>
                  <button 
                    style={styles.modalAddToCartBtn}
                    onClick={(e) => {
                      addToCart(selectedProduct, e);
                      closeModal();
                    }}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <div style={styles.cartCount} onClick={toggleCartSidebar}>
            <FaShoppingCart /> {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''}
          </div>
        )}

        <div 
          style={styles.overlay} 
          onClick={toggleCartSidebar}
        />

        {/* Cart Sidebar with Close Button */}
        <div style={styles.cartSidebar}>
          <div style={styles.cartHeader}>
            <h3 style={styles.cartTitle}>Your Cart</h3>
            <button 
              style={styles.closeCartBtn} 
              onClick={toggleCartSidebar}
              aria-label="Close cart"
            >
              <FaTimes />
            </button>
          </div>
          
          <div style={styles.cartItems}>
            {cart.length === 0 ? (
              <div style={styles.emptyCart}>
                <FaShoppingCart style={styles.emptyCartIcon} />
                <p style={styles.emptyCartText}>Your cart is empty</p>
                <button 
                  style={styles.addToCartBtn}
                  onClick={toggleCartSidebar}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className={`cart-item cart-item-${index}`}
                  style={styles.cartItem}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={styles.cartItemImage}
                  />
                  <div style={styles.cartItemDetails}>
                    <h4 style={styles.cartItemName}>{item.name}</h4>
                    <div style={styles.cartItemSize}>Size: {item.size}</div>
                    <div style={styles.cartItemPrice}>RS: {item.price}</div>
                    <div style={styles.cartItemActions}>
                      <button 
                        style={styles.quantityBtn}
                        onClick={() => decrementQuantity(item.id)}
                      >
                        <FaMinus />
                      </button>
                      <span style={styles.quantityDisplay}>{item.quantity}</span>
                      <button 
                        style={styles.quantityBtn}
                        onClick={() => incrementQuantity(item.id)}
                      >
                        <FaPlus />
                      </button>
                      <button 
                        style={styles.removeItemBtn}
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {cart.length > 0 && (
            <div style={styles.cartFooter}>
              <div style={styles.cartTotal}>
                <span style={styles.totalText}>Total:</span>
                <span style={styles.totalAmount}>RS: {getTotalPrice()}</span>
              </div>
              {/* <button style={styles.checkoutBtn}>
                Proceed to Checkout <FaChevronRight />
              </button> */}
              <button 
  style={styles.checkoutBtn}
  onClick={() => {
    toggleCartSidebar(); // Close the cart sidebar
    navigate('/checkout'); // Navigate to checkout page
  }}
>
  Proceed to Checkout <FaChevronRight />
</button>
            </div>
          )}
        </div>

        {showNotification && (
          <div style={styles.notification}>
            {notificationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialDrinksPage;
