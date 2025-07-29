

import React, { useState, useEffect } from 'react';
import coffehero from '../assets/herocoffee.jpeg';
import herotea from '../assets/herotea.jpeg';
import herojuice from '../assets/herojuice.jpeg';
import heromilkshake from '../assets/heromilkshake4.jpeg';

const slideContent = {
  Tea: {
    image: herotea,
    desc: "Premium organic teas from around the world",
    color: '#8BB174',
    hoverColor: '#7CA066'
  },
  Juice: {
    image: herojuice,
    desc: "Freshly squeezed seasonal fruit juices",
    color: '#E77C64',
    hoverColor: '#D66B54'
  },
  Milkshake: {
    image: heromilkshake,
    desc: "Creamy handmade milkshakes with real ingredients",
    color: '#D2A06E',
    hoverColor: '#C1905E'
  }
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState('main');
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const preloadImages = async () => {
      const images = [coffehero, ...Object.values(slideContent).map(s => s.image)];
      await Promise.all(
        images.map(src => new Promise(res => {
          const img = new Image();
          img.src = src;
          img.onload = res;
        }))
      );
      setImagesLoaded(true);
    };
    preloadImages();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategoryClick = (category) => setCurrentSlide(category);
  const handleBackClick = () => setCurrentSlide('main');

  if (!imagesLoaded) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5EFE6'
      }}>
        <div style={{
          width: 50, height: 50,
          border: '5px solid #D2A06E',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      position: 'relative',
      fontFamily: 'sans-serif'
    }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        /* Removed body { overflow: hidden; } */
        .zoom-fade {
          animation: zoomFade 1s ease-in-out forwards;
        }
        @keyframes zoomFade {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .fade-slide-in {
          animation: fadeSlide 0.8s ease-out forwards;
        }
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background */}
      <div key={currentSlide} className="zoom-fade" style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <img
          src={currentSlide === 'main' ? coffehero : slideContent[currentSlide].image}
          alt={currentSlide}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: isMobile ? 'center center' : undefined
          }}
        />
      </div>

      {/* Overlay */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        background: isMobile 
          ? 'linear-gradient(to bottom, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.2) 60%, transparent)' 
          : 'linear-gradient(to right, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.2) 60%, transparent)',
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        padding: isMobile ? '6rem 1.5rem 0' : '0 0 0 6%',
        justifyContent: isMobile ? 'center' : undefined
      }}>
        <div className="fade-slide-in" style={{ 
          maxWidth: isMobile ? '100%' : '700px', 
          color: '#fff',
          textAlign: isMobile ? 'center' : 'left',
          padding: isMobile ? '1rem' : '0',
          marginTop: isMobile ? '4rem' : '0'
        }}>
          {currentSlide === 'main' ? (
            <>
              <h1 style={{
                fontSize: isMobile ? '3.2rem' : '5.2rem',
                fontWeight: '1000',
                textShadow: '4px 4px 10px rgba(0,0,0,0.9)',
                marginBottom: isMobile ? '1.5rem' : '2rem',
                letterSpacing: '1px',
                animation: 'fadeDown 1s ease-out both',
                lineHeight: isMobile ? '1.2' : '1.3'
              }}>
                WELCOME TO OUR CAFÉ
              </h1>

              <p style={{
                fontSize: isMobile ? '1.6rem' : '2.5rem',
                fontWeight: '600',
                marginBottom: isMobile ? '2rem' : '3rem',
                textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
                animation: 'fadeUp 1.2s ease-out both',
                lineHeight: isMobile ? '1.4' : '1.5'
              }}>
                Discover our premium selection of handcrafted beverages.
              </p>

              <button
                onClick={() => handleCategoryClick('Tea')}
                style={{
                  padding: isMobile ? '14px 32px' : '18px 48px',
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: '800',
                  backgroundColor: '#D2A06E',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
                  textTransform: 'uppercase',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  animation: 'fadeUp 1.4s ease-out both',
                  margin: isMobile ? '0 auto' : '0'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.07)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.4)';
                }}
              >
                View Menu
              </button>
            </>
          ) : (
            <>
              <h2 style={{
                fontSize: isMobile ? '3.5rem' : '5rem',
                fontWeight: '1000',
                color: slideContent[currentSlide].color,
                marginBottom: isMobile ? '1.2rem' : '1.8rem',
                textShadow: '4px 4px 10px rgba(0,0,0,0.8)',
                textTransform: 'uppercase',
                lineHeight: isMobile ? '1.2' : '1.3'
              }}>
                {currentSlide}
              </h2>
              <p style={{
                fontSize: isMobile ? '1.4rem' : '2rem',
                fontWeight: '600',
                marginBottom: isMobile ? '1.8rem' : '2.5rem',
                textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
                lineHeight: isMobile ? '1.4' : '1.5'
              }}>
                {slideContent[currentSlide].desc}
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '1rem' : '1.4rem',
                marginBottom: isMobile ? '1.8rem' : '2.5rem',
                alignItems: isMobile ? 'center' : 'flex-start'
              }}>
                {['Tea', 'Juice', 'Milkshake'].map(cat => (
                  <div
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    onMouseEnter={() => setHoveredCategory(cat)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                      transform: hoveredCategory === cat ? 'translateX(15px)' : 'none'
                    }}
                  >
                    <span
                      style={{
                        color: cat === currentSlide ? slideContent[cat].color :
                          (hoveredCategory === cat ? slideContent[cat].hoverColor : '#fff'),
                        fontSize: cat === currentSlide 
                          ? (isMobile ? '2.2rem' : '3.2rem') 
                          : (isMobile ? '1.6rem' : '2.3rem'),
                        fontWeight: cat === currentSlide ? '1000' : '800',
                        textTransform: 'uppercase',
                        display: 'inline-block',
                        position: 'relative',
                        paddingBottom: '5px'
                      }}
                    >
                      {cat}
                      {cat === currentSlide && (
                        <span style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: hoveredCategory === cat ? '0%' : '100%',
                          height: '3px',
                          backgroundColor: slideContent[cat].color,
                          transition: 'width 0.3s ease',
                          opacity: hoveredCategory === cat ? 0 : 1
                        }} />
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                <span
                  onClick={handleBackClick}
                  style={{
                    fontSize: isMobile ? '1.2rem' : '1.6rem',
                    color: '#fff',
                    fontWeight: '700',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateX(-5px)';
                    e.currentTarget.style.color = '#D2A06E';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  ← Back to Home
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
