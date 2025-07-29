
import React, { useState } from 'react';
import { FaShoppingCart, FaRupeeSign, FaCheck, FaChevronLeft, FaStar } from 'react-icons/fa';
import { GiCoffeeCup, GiSodaCan, GiWineBottle, GiMartini } from 'react-icons/gi';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart = [] } = location.state || {};
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate total price using the same logic as SpecialDrinksPage
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity);
    }, 0).toFixed(2);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      navigate('/order-confirmation');
    }, 2000);
  };

  return (
    <div style={{
      background: 'radial-gradient(circle at center, #fff9f4 0%, #ffe9d6 100%)',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '"Poppins", sans-serif',
      color: '#5e3023',
      position: 'relative'
    }}>
      {/* Main Container */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
        border: '1px solid #e8d5cc'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '30px', position: 'relative' }}>
          <button 
            style={{
              background: 'none',
              border: 'none',
              color: '#8B7069',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
            onClick={() => navigate(-1)}
          >
            <FaChevronLeft /> Back to Menu
          </button>
          <h1 style={{
            fontSize: '2.2rem',
            textAlign: 'center',
            color: '#5e3023',
            fontWeight: '600',
            margin: '10px 0'
          }}>
            <FaShoppingCart /> Order Checkout
          </h1>
        </div>

        {/* Order Summary */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '1.6rem',
            borderBottom: '2px solid #8B7069',
            paddingBottom: '10px',
            marginBottom: '20px',
            color: '#5e3023',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FaStar /> Your Order
          </h2>
          
          {cart.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 0',
              color: '#8B7069'
            }}>
              <p>Your cart is empty</p>
              <button 
                style={{
                  backgroundColor: '#8B7069',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  marginTop: '20px',
                  cursor: 'pointer'
                }}
                onClick={() => navigate('/')}
              >
                Browse Drinks
              </button>
            </div>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 0',
                  borderBottom: '1px solid #f0e6e0'
                }}>
                  <div>
                    <h3 style={{ 
                      margin: '0', 
                      fontSize: '1.2rem', 
                      color: '#5e3023',
                      fontWeight: '600'
                    }}>
                      {item.name}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginTop: '5px',
                      color: '#8B7069'
                    }}>
                      <span>
                        {item.quantity} × <FaRupeeSign style={{ fontSize: '0.8em' }} />{item.price}
                      </span>
                      <span style={{
                        backgroundColor: '#f0e6e0',
                        padding: '3px 8px',
                        borderRadius: '10px',
                        fontSize: '0.8rem'
                      }}>
                        {item.size}
                      </span>
                    </div>
                  </div>
                  <div style={{
                    fontWeight: '700',
                    color: '#5e3023'
                  }}>
                    <FaRupeeSign /> {(item.quantity * parseFloat(item.price)).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Total - Using same calculation as cart */}
        {cart.length > 0 && (
          <div style={{
            backgroundColor: '#f9f2eb',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '30px',
            border: '1px solid #e8d5cc'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <span>Subtotal:</span>
              <span><FaRupeeSign /> {getTotalPrice()}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <span>Delivery Fee:</span>
              <span><FaRupeeSign /> 0.00</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '15px',
              paddingTop: '15px',
              borderTop: '1px solid #e8d5cc',
              fontWeight: '700',
              fontSize: '1.2rem'
            }}>
              <span>Total:</span>
              <span><FaRupeeSign /> {getTotalPrice()}</span>
            </div>
          </div>
        )}

        {/* Payment Button */}
        {cart.length > 0 && (
          <button 
            style={{
              backgroundColor: '#8B7069',
              color: '#fff',
              border: 'none',
              padding: '15px',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              opacity: isProcessing ? 0.7 : 1
            }}
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : (
              <>
                <FaCheck /> Confirm & Pay
              </>
            )}
          </button>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '40px 20px',
        color: '#7a4b3a',
        marginTop: '40px'
      }}>
        <h3 style={{ marginBottom: '5px' }}>Brew & Sip</h3>
        <p style={{ marginBottom: '20px' }}>Artisan Coffee Roasters</p>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div>
            <h4 style={{ marginBottom: '10px' }}>OUR MENU</h4>
            <p>Coffee</p>
            <p>Tea</p>
            <p>Juice</p>
            <p>Milkshakes</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>ABOUT US</h4>
            <p>Our Story</p>
            <p>Locations</p>
            <p>Careers</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>VISIT US</h4>
            <p>123 Coffee Lane</p>
            <p>Brew City, CA 90210</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '10px' }}>CONTACT</h4>
            <p>+92286599162</p>
            <p>muneebakhalid100@gmaol.com</p>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <p>© 2025 Brew & Sip Coffee Co. All rights reserved.</p>
          <div style={{ marginTop: '10px' }}>
            <a href="#" style={{ color: '#7a4b3a', margin: '0 10px' }}>Privacy Policy</a>
            <span>•</span>
            <a href="#" style={{ color: '#7a4b3a', margin: '0 10px' }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;