


import { Link } from 'react-router-dom';
import coffee_main from '../assets/coffee_main.jpeg';
import tea_main from '../assets/tea_main.jpeg';
import milkshakes_main from '../assets/milkshakes_main.jpeg';
import juice_main from '../assets/juice_main.jpeg';
import { useEffect, useRef, useState } from 'react';

const FeaturedCategories = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const categories = [
    { 
      name: 'Coffee', 
      image: coffee_main, 
      path: '/coffee',
      description: 'Artisanal blends from exotic locations',
      variants: ['Espresso', 'Cappuccino', 'Cold Brew', 'Latte'],
      icon: '☕'
    },
    { 
      name: 'Tea', 
      image: tea_main, 
      path: '/tea',
      description: 'Ancient brews with modern elegance',
      variants: ['Green Tea', 'Chai', 'Oolong', 'Matcha'],
      icon: '🍃'
    },
    { 
      name: 'Milkshake', 
      image: milkshakes_main, 
      path: '/milkshake',
      description: 'Creamy indulgences for every mood',
      variants: ['Chocolate', 'Strawberry', 'Vanilla', 'Caramel'],
      icon: '🥤'
    },
    { 
      name: 'Juice', 
      image: juice_main, 
      path: '/juice',
      description: 'Nature\'s nectar in every sip',
      variants: ['Orange', 'Pomegranate', 'Watermelon', 'Detox Green'],
      icon: '🍊'
    },
  ];

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Add animation class after component mounts
    if (headingRef.current) {
      headingRef.current.classList.add('animate-heading');
    }
    if (paragraphRef.current) {
      setTimeout(() => {
        paragraphRef.current.classList.add('animate-paragraph');
      }, 300);
    }
  }, []);

  const handleMouseEnter = (item, e) => {
    setHoveredItem(item);
    setPopupPosition({
      x: e.currentTarget.getBoundingClientRect().left + e.currentTarget.offsetWidth / 2,
      y: e.currentTarget.getBoundingClientRect().top
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section style={{
      padding: '8rem 2rem',
      background: 'radial-gradient(circle at center, #fff9f4 0%, #ffe9d6 100%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      opacity: 0,
      animation: 'fadeIn 0.8s ease-out forwards'
    }}>
      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          @keyframes slideDown {
            from { transform: translateY(-30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes floatText {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          @keyframes highlightWords {
            0% { color: inherit; }
            50% { color: #d4a373; }
            100% { color: inherit; }
          }
          .animate-heading {
            animation: slideDown 0.6s ease-out forwards;
          }
          .animate-paragraph span {
            display: inline-block;
          }
          .animate-paragraph span:nth-child(1) {
            animation: floatText 3s ease-in-out infinite, highlightWords 6s ease-in-out infinite;
          }
          .animate-paragraph span:nth-child(2) {
            animation: floatText 3s ease-in-out infinite 0.5s, highlightWords 6s ease-in-out infinite 1s;
          }
        `}
      </style>

      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23d4a373\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        opacity: 0,
        animation: 'fadeIn 1s ease-out 0.3s forwards'
      }}></div>

      <div style={{
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h2 
          ref={headingRef}
          style={{
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            marginBottom: '1.5rem',
            color: '#5e3023',
            fontWeight: '700',
            fontFamily: '"Playfair Display", serif',
            letterSpacing: '0.5px',
            textTransform: 'capitalize',
            position: 'relative',
            display: 'inline-block',
            opacity: 0,
            '::after': {
              content: '""',
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(to right, #d4a373, #f8ad9d, #d4a373)',
              borderRadius: '2px',
              animation: 'widthGrow 0.8s ease-out 0.6s forwards',
              transformOrigin: 'center'
            }
          }}
        >
          OUR DELICIOUS MENU
        </h2>
        
        <div 
          ref={paragraphRef}
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
            color: '#7a4b3a',
            maxWidth: '800px',
            margin: '2rem auto 4rem',
            lineHeight: '1.8',
            fontFamily: '"Crimson Text", serif',
            fontStyle: 'italic',
            textShadow: '0 1px 2px rgba(0,0,0,0.05)',
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out 0.6s forwards'
          }}
        >
          <span style={{ display: 'inline-block' }}>
            Savor the journey
          </span> of flavors with our handcrafted selections. Each sip tells a story of{' '}
          <span style={{ display: 'inline-block' }}>
            tradition, passion, and innovation
          </span>. Explore our collections and discover your new favorite today.
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginTop: '3rem'
        }}>
          {categories.map((cat) => (
            <div 
              key={cat.name}
              style={{
                transition: 'all 0.4s ease',
                ':hover': {
                  transform: 'translateY(-10px)'
                }
              }}
              onMouseEnter={(e) => handleMouseEnter(cat, e)}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to={cat.path} 
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: '#5e3023',
                  boxShadow: '0 15px 30px rgba(94, 48, 35, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  zIndex: 1,
                  display: 'block',
                  ':hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 25px 40px rgba(94, 48, 35, 0.2)'
                  },
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: 'linear-gradient(to right, #d4a373, #f8ad9d)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <div 
                  style={{
                    width: '100%',
                    height: '280px',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.5s ease'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.1) 100%)',
                    zIndex: 1
                  }}/>
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s ease'
                    }}
                  />
                </div>
                <div style={{
                  padding: '2rem 1.5rem',
                  position: 'relative'
                }}>
                  <div 
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '40px',
                      height: '40px',
                      background: '#fff',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      zIndex: 2,
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <span style={{ 
                      fontSize: '1.2rem',
                      display: 'inline-block',
                      transition: 'transform 0.3s ease'
                    }}>
                      {cat.icon}
                    </span>
                  </div>
                  <h3 style={{
                    margin: '0.5rem 0 1rem',
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    fontFamily: '"Playfair Display", serif',
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}>
                    {cat.name}
                  </h3>
                  <p style={{
                    margin: '0.5rem 0 0',
                    color: '#7a4b3a',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    fontFamily: '"Crimson Text", serif',
                    transition: 'transform 0.3s ease'
                  }}>
                    {cat.description}
                  </p>
                  
                  <div style={{
                    margin: '1rem 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    justifyContent: 'center'
                  }}>
                    {cat.variants.map(variant => (
                      <span 
                        key={variant}
                        style={{
                          background: 'rgba(212, 163, 115, 0.1)',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          color: '#5e3023',
                          border: '1px solid rgba(212, 163, 115, 0.2)',
                          transition: 'all 0.3s ease',
                          ':hover': {
                            transform: 'scale(1.1)',
                            backgroundColor: 'rgba(212, 163, 115, 0.2)'
                          }
                        }}
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                  
                  <div 
                    style={{
                      marginTop: '1rem',
                      display: 'inline-block',
                      color: '#d4a373',
                      fontWeight: '500',
                      fontSize: '0.9rem',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease',
                      ':hover': {
                        letterSpacing: '1.5px',
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    Discover More →
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popup for hovered item */}
      {hoveredItem && (
        <div style={{
          position: 'fixed',
          left: `${popupPosition.x}px`,
          top: `${popupPosition.y}px`,
          transform: 'translateX(-50%) translateY(-100%)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '1rem 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          border: '1px solid rgba(212, 163, 115, 0.3)',
          minWidth: '200px',
          textAlign: 'center',
          pointerEvents: 'none',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <div style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#5e3023',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <span>{hoveredItem.icon}</span>
            <span>{hoveredItem.name}</span>
          </div>
          <div style={{
            fontSize: '0.9rem',
            color: '#7a4b3a'
          }}>
            Click to explore our {hoveredItem.name.toLowerCase()} collection
          </div>
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: '20px',
            height: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRight: '1px solid rgba(212, 163, 115, 0.3)',
            borderBottom: '1px solid rgba(212, 163, 115, 0.3)',
            zIndex: -1
          }}></div>
        </div>
      )}

      <style>
        {`
          @keyframes widthGrow {
            from { width: 0; opacity: 0; }
            to { width: 80px; opacity: 1; }
          }
          h2:hover::after {
            background: 'linear-gradient(to right, #f8ad9d, #d4a373, #f8ad9d)';
          }
          .animate-paragraph span:hover {
            color: #d4a373;
            transform: translateY(-3px);
          }
        `}
      </style>
    </section>
  );
};

export default FeaturedCategories;