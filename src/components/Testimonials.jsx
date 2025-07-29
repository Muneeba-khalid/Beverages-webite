

import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Testi1 from '../assets/testi1.png';
import Testi2 from '../assets/testi2.jpeg';
import Testi3 from '../assets/testi3.png';
import Testi4 from '../assets/testi4.jpg';
import Testi5 from '../assets/testi5.jpeg';
import Testi6 from '../assets/testi6.jpg';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "Sarah Johnson", content: "Best coffee ever!", avatar: Testi1, rating: 5 },
    { id: 2, name: "Ahmed Raza", content: "My daily morning stop", avatar: Testi2, rating: 5 },
    { id: 3, name: "Emma Wilson", content: "Perfect work spot", avatar: Testi3, rating: 4 },
    { id: 4, name: "Michael Brown", content: "Excellent service", avatar: Testi4, rating: 5 },
    { id: 5, name: "Fatima Khan", content: "Love the seasonal drinks", avatar: Testi5, rating: 5 },
    { id: 6, name: "David Miller", content: "Great atmosphere", avatar: Testi6, rating: 4 }
  ];

  // Split into two rows of 3 testimonials each
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Customer Testimonials</h2>
      
      {/* First row with 3 testimonials */}
      <div style={styles.testimonialsRow}>
        {firstRow.map(testimonial => (
          <div key={testimonial.id} style={styles.testimonialCard}>
            <div style={styles.avatarContainer}>
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                style={styles.avatar}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />
              <div style={styles.avatarOverlay}></div>
            </div>
            <FaQuoteLeft style={styles.quoteIcon} />
            <p style={styles.content}>{testimonial.content}</p>
            <div style={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} style={{ 
                  color: i < testimonial.rating ? '#FFD700' : '#E0E0E0', 
                  fontSize: '1.8rem',
                  filter: i < testimonial.rating ? 'drop-shadow(0 0 3px rgba(255,215,0,0.5))' : 'none'
                }} />
              ))}
            </div>
            <h3 style={styles.name}>{testimonial.name}</h3>
          </div>
        ))}
      </div>

      {/* Second row with 3 testimonials */}
      <div style={styles.testimonialsRow}>
        {secondRow.map(testimonial => (
          <div key={testimonial.id} style={styles.testimonialCard}>
            <div style={styles.avatarContainer}>
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                style={styles.avatar}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />
              <div style={styles.avatarOverlay}></div>
            </div>
            <FaQuoteLeft style={styles.quoteIcon} />
            <p style={styles.content}>{testimonial.content}</p>
            <div style={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} style={{ 
                  color: i < testimonial.rating ? '#FFD700' : '#E0E0E0', 
                  fontSize: '1.8rem',
                  filter: i < testimonial.rating ? 'drop-shadow(0 0 3px rgba(255,215,0,0.5))' : 'none'
                }} />
              ))}
            </div>
            <h3 style={styles.name}>{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 2rem',
    textAlign: 'center',
    maxWidth: '1600px',
    margin: '0 auto',
    background: 'linear-gradient(to bottom, #f9f9f9, #ffffff)'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '4rem',
    color: '#333',
    fontWeight: 'bold',
    textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
  },
  testimonialsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  },
  testimonialCard: {
    flex: '0 0 30%',
    minWidth: '380px',
    padding: '2.5rem',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
    }
  },
  avatarContainer: {
    position: 'relative',
    width: '160px',
    height: '160px',
    margin: '0 auto 2rem',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
  },
  avatar: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(1.05) contrast(1.1)',
    transition: 'transform 0.3s ease'
  },
  avatarOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)',
    borderRadius: '50%'
  },
  quoteIcon: {
    color: '#FFD700',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    opacity: 0.7,
    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.1))'
  },
  content: {
    fontStyle: 'italic',
    marginBottom: '2rem',
    color: '#555',
    fontSize: '1.3rem',
    lineHeight: '1.7',
    minHeight: '80px'
  },
  rating: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))'
  },
  name: {
    fontSize: '1.6rem',
    color: '#333',
    margin: 0,
    fontWeight: '600',
    letterSpacing: '0.5px'
  }
};

export default Testimonials;