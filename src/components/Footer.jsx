
import { FaFacebookF, FaInstagram, FaTwitter, FaHeart } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="brew-sip-footer">
      <div className="footer-grid">
        
        {/* Brand Column */}
        <div className="brand-column">
          <div className="brand-logo">
            <img src={logo} alt="Brew & Sip" className="logo-img" />
            <div className="brand-text">
              <h2>Brew & Sip</h2>
              <p className="tagline">Artisan Coffee Roasters</p>
            </div>
          </div>
          {/* Social Icons moved here in horizontal layout */}
          <div className="social-links">
            <a href="https://facebook.com/brewnsip" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/brewnsip" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/brewnsip" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Menu Column */}
        <div className="menu-column">
          <h3>OUR MENU</h3>
          <ul>
            <li><a href="/menu/coffee">Coffee</a></li>
            <li><a href="/menu/tea">Tea</a></li>
            <li><a href="/menu/juice">Juice</a></li>
            <li><a href="/menu/milkshake">Milkshakes</a></li>
          </ul>
        </div>

        {/* About Column */}
        <div className="about-column">
          <h3>ABOUT US</h3>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/locations">Locations</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="contact-column">
          <div className="contact-card">
            <MdLocationOn className="contact-icon" />
            <div>
              <h4>VISIT US</h4>
              <p>123 Coffee Lane</p>
              <p>Brew City, CA 90210</p>
            </div>
          </div>
          <div className="contact-card">
            <MdPhone className="contact-icon" />
            <div>
              <h4>CALL US</h4>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="contact-card">
            <MdEmail className="contact-icon" />
            <div>
              <h4>EMAIL US</h4>
              <p>hello@brewnsip.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-bar">
        <p>
          © 2025 Brew & Sip Coffee Co. All rights reserved. 
          <span className="heart-icon"><FaHeart /></span>
        </p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <span>•</span>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// CSS Styles
const styles = `
.brew-sip-footer {
  background: #5e3023;
  color: #f8f1e5;
  padding: 3.5rem 2rem 1rem;
  font-family: 'Montserrat', sans-serif;
}

.footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 1rem;
  padding-bottom: 3rem;
}

/* Brand Column */
.brand-column {
  display: flex;
  flex-direction: column;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.logo-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #d4a762;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.brand-text h2 {
  font-size: 1.8rem;
  margin: 0;
  color: #f8f1e5;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
}

.tagline {
  font-size: 0.85rem;
  margin: 0.3rem 0 0;
  color: #d4a762;
  font-style: italic;
}

.social-links {
  display: flex;
  gap: 15px; /* Adjust the space between icons as needed */
}

.social-links a {
  color: inherit; /* Or specify a color */
  text-decoration: none;
  font-size: 1.2rem; /* Adjust icon size */
}

.social-links a:hover {
  color: #d4a762;
  transform: translateY(-2px);
}

/* Menu Column */
.menu-column,
.about-column {
  padding-left: 1rem;
}

.menu-column h3,
.about-column h3 {
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
  color: #d4a762;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.menu-column ul,
.about-column ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.menu-column li,
.about-column li {
  margin-bottom: 0.8rem;
}

.menu-column a,
.about-column a {
  color: #f8f1e5;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  position: relative;
  padding-left: 1rem;
}

.menu-column a:hover,
.about-column a:hover {
  color: #d4a762;
}

.menu-column a:before,
.about-column a:before {
  content: "•";
  color: #d4a762;
  position: absolute;
  left: 0;
}

/* Contact Column */
.contact-column {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.contact-card {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
}

.contact-icon {
  color: #d4a762;
  font-size: 1.5rem;
  min-width: 24px;
  margin-top: 0.2rem;
}

.contact-card h4 {
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
  color: #d4a762;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.contact-card p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Copyright Bar */
.copyright-bar {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(248, 241, 229, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
}

.copyright-bar p {
  margin: 0;
  color: rgba(248, 241, 229, 0.7);
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.heart-icon {
  color: #ff6b6b;
  font-size: 0.9rem;
}

.legal-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.legal-links a {
  color: rgba(248, 241, 229, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.8rem;
}

.legal-links a:hover {
  color: #d4a762;
}

.legal-links span {
  color: rgba(248, 241, 229, 0.4);
}

/* Responsive */
@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .copyright-bar {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
`;

// Add styles to document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default Footer;
