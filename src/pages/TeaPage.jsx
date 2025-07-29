import React, { useState, useEffect } from 'react';
import { products } from '../data/product';
import teaBanner from '../assets/teabanner.jpeg'; // Make sure to add this image
import { FaShoppingCart, FaTimes, FaStar, FaLeaf, FaPlus, FaMinus, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const TeaPage = () => {
  const navigate = useNavigate(); 
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [selectedSize, setSelectedSize] = useState('regular');

  useEffect(() => {
    document.body.style.backgroundColor = '#0F0909';
    document.body.style.overscrollBehavior = 'none';
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.overscrollBehavior = '';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes cartItemEntrance {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes bannerImageEntrance {
        from { transform: scale(1.1); opacity: 0.7; }
        to { transform: scale(1); opacity: 1; }
      }
      @keyframes textEntrance {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes leafFloat {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
      .cart-item-0 { animation-delay: 0.1s; }
      .cart-item-1 { animation-delay: 0.2s; }
      .cart-item-2 { animation-delay: 0.3s; }
      .cart-item-3 { animation-delay: 0.4s; }
      .cart-item-4 { animation-delay: 0.5s; }
      .cart-item {
        animation: cartItemEntrance 0.5s ease-out forwards;
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const teaProducts = products.filter(product => product.brand === 'Tea');

  const getSizePrice = (product, size) => {
    const basePrice = parseFloat(product.newPrice.replace(/[^0-9.]/g, ''));
    switch(size) {
      case 'small': return (basePrice * 0.8).toFixed(2);
      case 'large': return (basePrice * 1.3).toFixed(2);
      default: return basePrice.toFixed(2);
    }
  };

  const addToCart = (product) => {
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
    
    setSelectedSize('regular');
    
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = `✓ ${product.name} (${selectedSize}) added to cart!`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
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
    setShowModal(false);
    document.body.style.overflow = 'auto';
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
      backgroundColor: '#0F0909',
      padding: '0',
      margin: '0',
      color: '#AF9284',
      fontFamily: '"Poppins", sans-serif',
      overflowX: 'hidden',
      minHeight: '100vh',
      position: 'relative'
    },
    banner: {
      width: '100vw',
      height: isMobile ? '250px' : '400px',
      position: 'relative',
      marginBottom: '40px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    },
    bannerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      animation: 'bannerImageEntrance 2s ease-out forwards'
    },
    bannerText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      width: '90%',
      zIndex: 2
    },
    bannerTitle: {
      fontSize: isMobile ? '2rem' : '3.5rem',
      fontWeight: '700',
      margin: '0',
      color: '#fff',
      textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
      letterSpacing: '1px',
      animation: 'textEntrance 1s ease-out forwards',
      position: 'relative'
    },
    bannerSubtitle: {
      fontSize: isMobile ? '1rem' : '1.5rem',
      marginTop: '15px',
      color: 'white ',
      textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      animation: 'textEntrance 1s ease-out 0.3s forwards',
      opacity: 0
    },
    productsContainer: {
      width: '100%',
      padding: isMobile ? '0 15px 40px' : '0 40px 60px',
      boxSizing: 'border-box',
      maxWidth: '1800px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '600',
      color: '#D1B8B0',
      marginBottom: '30px',
      textAlign: 'center',
      position: 'relative',
      paddingBottom: '10px'
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
      gap: '8px',
      ':hover': {
        backgroundColor: '#6F4E37',
        transform: 'translateY(-2px)'
      }
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
      transition: 'all 0.3s ease',
      ':hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 7px 25px rgba(0,0,0,0.4)'
      }
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
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      ':hover': {
        background: 'rgba(139, 112, 105, 0.5)',
        transform: 'rotate(90deg)'
      }
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
      marginTop: 'auto',
      ':hover': {
        backgroundColor: '#6F4E37',
        transform: 'translateY(-2px)'
      }
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
      alignItems: 'center'
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
      padding: '5px'
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
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      ':hover': {
        backgroundColor: '#8B7069'
      }
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
      fontSize: '1rem',
      transition: 'all 0.2s ease',
      ':hover': {
        color: '#D1B8B0'
      }
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
      gap: '10px',
      ':hover': {
        backgroundColor: '#6F4E37',
        transform: 'translateY(-2px)'
      }
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
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        <img src={teaBanner} alt="Tea Banner" style={styles.bannerImage} />
        <div style={styles.bannerText}>
          <h1 style={styles.bannerTitle}>Premium Tea Collection</h1>
          <p style={styles.bannerSubtitle}>
            <FaLeaf style={{ animation: 'leafFloat 3s ease-in-out infinite 1s' }} /> 
            100% Natural & Aromatic Blends
          </p>
        </div>
      </div>

      <div style={styles.productsContainer}>
        <h2 style={styles.sectionTitle}>Our Tea Collection</h2>
        <div style={styles.productsGrid}>
          {teaProducts.map((product) => (
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
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowModal(true);
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
                  <FaLeaf /> Aromatic, Soothing & Refreshing
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
                  {selectedProduct.description || "Our premium tea blends are crafted from the finest leaves and natural ingredients. Each cup offers a perfect balance of flavor and aroma, providing a soothing experience that rejuvenates both body and mind."}
                </p>
                <div style={styles.modalBenefits}>
                  <div style={styles.benefitItem}>
                    <FaLeaf /> Rich in antioxidants
                  </div>
                  <div style={styles.benefitItem}>
                    <FaLeaf /> Natural calming properties
                  </div>
                  <div style={styles.benefitItem}>
                    <FaLeaf /> No artificial flavors
                  </div>
                  <div style={styles.benefitItem}>
                    <FaLeaf /> Hand-picked premium leaves
                  </div>
                </div>
                <button 
                  style={styles.modalAddToCartBtn}
                  onClick={() => {
                    addToCart(selectedProduct);
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

      <div style={styles.cartSidebar}>
        <div style={styles.cartHeader}>
          <h3 style={styles.cartTitle}>Your Cart</h3>
          <button style={styles.closeCartBtn} onClick={toggleCartSidebar}>
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
    </div>
  );
};

export default TeaPage;