
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiChevronDown } from 'react-icons/fi'; // Only removed FiShoppingCart
import logo from "../assets/Logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  // MENU ITEMS REMAIN EXACTLY THE SAME
  const menuItems = [
    { name: 'about', path: '/about' },
    { 
      name: 'menu', 
      path: '/',
      dropdown: [
        { name: 'All', path: '/FeaturedCategories' },
        { name: 'Coffee', path: '/coffee' },
        { name: 'Tea', path: '/tea' },
        { name: 'Milkshakes', path: '/milkshake' },
        { name: 'Juice', path: '/juice' }
      ] 
    },
    { name: 'franchising', path: '/franchising' },
    { name: 'careers', path: '/careers' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* 1. LOGO SECTION - COMPLETELY UNCHANGED */}
      <Link to="/" className="logo-link">
        <div className="logo-container">
          <img 
            src={logo} 
            alt="Brew & Sip Logo"
            className="logo-img"
          />
          <span className="logo-text">Brew & Sip</span>
        </div>
      </Link>

      {/* 2. DESKTOP NAV - COMPLETELY UNCHANGED */}
      <div className="desktop-nav">
        {menuItems.map((item) => (
          <div 
            key={item.name}
            className="nav-item"
            onMouseEnter={() => item.dropdown && toggleDropdown(item.name)}
            onMouseLeave={() => item.dropdown && toggleDropdown(null)}
          >
            <Link to={item.path} className="nav-link">
              <span className="nav-link-text">
                {item.name.toUpperCase()}
              </span>
              {item.dropdown && <FiChevronDown className="dropdown-icon" />}
            </Link>
            
            {item.dropdown && activeDropdown === item.name && (
              <div className="dropdown-menu">
                {item.dropdown.map((subItem) => (
                  <Link 
                    key={subItem.name}
                    to={subItem.path}
                    className="dropdown-item"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. AUTH SECTION - ONLY REMOVED CART ICON, KEPT STYLING */}
      <div className="desktop-auth">
        {/* ONLY REMOVED THE CART LINK, KEPT AUTH BUTTONS */}
        <div className="auth-buttons">
          <Link to="/login" className="auth-btn login-btn">
            <FiUser size={16} /> LOGIN
          </Link>
          <Link to="/signup" className="auth-btn signup-btn">
            SIGN UP
          </Link>
        </div>
      </div>

      {/* 4. MOBILE MENU BUTTON - UNCHANGED */}
      <button onClick={toggleMenu} className="mobile-menu-btn">
        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* 5. MOBILE MENU - ONLY REMOVED CART BUTTON */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <div key={item.name} className="mobile-nav-item">
              <div 
                className="mobile-nav-header"
                onClick={() => item.dropdown && toggleDropdown(item.name)}
              >
                <Link 
                  to={!item.dropdown ? item.path : '#'}
                  className="mobile-link"
                  onClick={!item.dropdown ? toggleMenu : undefined}
                >
                  {item.name.toUpperCase()}
                </Link>
                {item.dropdown && (
                  <FiChevronDown 
                    className={`dropdown-icon ${activeDropdown === item.name ? 'rotate' : ''}`} 
                  />
                )}
              </div>
              
              {item.dropdown && activeDropdown === item.name && (
                <div className="mobile-dropdown-menu">
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.name}
                      to={subItem.path}
                      className="mobile-dropdown-item"
                      onClick={toggleMenu}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="mobile-auth">
            {/* ONLY REMOVED MOBILE CART BUTTON HERE */}
            <div className="mobile-auth-btns">
              <Link to="/login" className="mobile-login-btn" onClick={toggleMenu}>
                <FiUser /> LOGIN
              </Link>
              <Link to="/signup" className="mobile-signup-btn" onClick={toggleMenu}>
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CSS Styles */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          height: 90px;
          background-color: #5e3023;
          color: #ffffff;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
          background-color: rgba(94, 48, 35, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          height: 80px;
        }
        
        /* Logo Styles */
        .logo-link {
          text-decoration: none;
          z-index: 1001;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .logo-container:hover {
          transform: scale(1.05);
        }
        
        .logo-img {
          height: 60px;
          width: 60px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid #d8b384;
        }
        
        .logo-text {
          font-size: 2rem;
          font-weight: 700;
          color: #f7f3e3;
          font-family: 'Playfair Display', serif;
          letter-spacing: 1px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
        }
        
        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-item {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }
        
        .nav-link {
          color: #f7f3e3;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 1rem 0;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link-text {
          position: relative;
          display: inline-block;
        }
        
        .nav-link-text::before {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #d8b384;
          transition: width 0.3s ease, transform 0.3s ease;
          transform-origin: left center;
        }
        
        .nav-link:hover .nav-link-text::before {
          width: 100%;
          transform: scaleX(1.1);
        }
        
        .nav-link:hover {
          color: #d8b384;
          transform: translateY(-2px);
        }
        
        .dropdown-icon {
          transition: transform 0.3s ease;
        }
        
        /* Enhanced Dropdown Menu */
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: #fff;
          min-width: 220px;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          border: 1px solid rgba(0,0,0,0.05);
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .nav-item:hover .dropdown-menu {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
          top: calc(100% + 5px);
        }
        
        .dropdown-item {
          display: block;
          padding: 14px 24px;
          color: #5e3023;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(94, 48, 35, 0.1);
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }
        
        .dropdown-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background-color: #d8b384;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.2s ease;
        }
        
        .dropdown-item:hover {
          background-color: #f7f3e3;
          padding-left: 28px;
          color: #d8b384;
        }
        
        .dropdown-item:hover::before {
          transform: scaleY(1);
        }
        
        .dropdown-item:last-child {
          border-bottom: none;
        }
        
        /* Auth Section */
        .desktop-auth {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .cart-icon {
          position: relative;
          display: flex;
          color: #f7f3e3;
          transition: all 0.3s ease;
        }
        
        .cart-icon:hover {
          color: #d8b384;
          transform: scale(1.1) translateY(-2px);
        }
        
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: #d8b384;
          color: #5e3023;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
        }
        
        .auth-buttons {
          display: flex;
          gap: 1.2rem;
        }
        
        .auth-btn {
          padding: 0.7rem 1.4rem;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .login-btn {
          background-color: transparent;
          border: 2px solid #d8b384;
          color: #f7f3e3;
        }
        
        .login-btn:hover {
          background-color: rgba(216, 179, 132, 0.2);
          transform: translateY(-2px);
        }
        
        .signup-btn {
          background-color: #d8b384;
          color: #5e3023;
          border: 2px solid #d8b384;
        }
        
        .signup-btn:hover {
          background-color: #f7f3e3;
          transform: translateY(-2px);
          border-color: #f7f3e3;
        }
        
        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          background-color: transparent;
          border: none;
          color: #f7f3e3;
          cursor: pointer;
          z-index: 1001;
          transition: transform 0.3s ease;
        }
        
        .mobile-menu-btn:hover {
          transform: scale(1.1);
        }
        
        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 90px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #5e3023;
          padding: 2rem 5%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          z-index: 1000;
          overflow-y: auto;
          transform: translateY(-20px);
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }
        
        @keyframes fadeIn {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .mobile-nav-item {
          border-bottom: 1px solid rgba(216, 179, 132, 0.2);
          transform: translateX(-10px);
          opacity: 0;
          animation: slideIn 0.3s ease forwards;
        }
        
        @keyframes slideIn {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        
        .mobile-link {
          color: #f7f3e3;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 600;
          position: relative;
        }
        
        .mobile-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #d8b384;
          transition: width 0.3s ease;
        }
        
        .mobile-link:hover::after {
          width: 100%;
        }
        
        .dropdown-icon.rotate {
          transform: rotate(180deg);
        }
        
        .mobile-dropdown-menu {
          display: flex;
          flex-direction: column;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .mobile-dropdown-item {
          color: #f7f3e3;
          text-decoration: none;
          padding: 0.9rem 0;
          font-size: 1.1rem;
          opacity: 0.9;
          border-left: 3px solid #d8b384;
          padding-left: 1.5rem;
          transition: all 0.2s ease;
        }
        
        .mobile-dropdown-item:hover {
          opacity: 1;
          padding-left: 2rem;
        }
        
        .mobile-auth {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .mobile-cart-btn, .mobile-login-btn, .mobile-signup-btn {
          padding: 1.2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .mobile-cart-btn, .mobile-login-btn {
          background-color: rgba(216, 179, 132, 0.1);
          border: 1px solid #d8b384;
          color: #f7f3e3;
        }
        
        .mobile-cart-btn:hover, .mobile-login-btn:hover {
          background-color: rgba(216, 179, 132, 0.2);
          transform: translateY(-2px);
        }
        
        .mobile-signup-btn {
          background-color: #d8b384;
          color: #5e3023;
          border: none;
        }
        
        .mobile-signup-btn:hover {
          background-color: #f7f3e3;
          transform: translateY(-2px);
        }
        
        .mobile-auth-btns {
          display: flex;
          gap: 1.5rem;
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .desktop-nav, .desktop-auth {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .navbar.scrolled {
            height: 90px;
          }
        }
        
        @media (max-width: 768px) {
          .navbar {
            height: 85px;
          }
          
          .navbar.scrolled {
            height: 80px;
          }
          
          .logo-img {
            height: 50px;
            width: 50px;
          }
          
          .logo-text {
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .logo-text {
            font-size: 1.6rem;
          }
          
          .mobile-auth-btns {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;