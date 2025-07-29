
import React, { useState, useEffect, useRef } from 'react';
import { 
  FaHandshake, FaStore, FaChartLine, FaUsers, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronRight 
} from 'react-icons/fa';
import bannerImage from '../assets/loc4sup.jpeg';
import branch1 from '../assets/b1.jpeg';
import branch2 from '../assets/b2.jpeg';
import branch3 from '../assets/b3.jpeg';
import branch4 from '../assets/b4.jpeg';
import branch5 from '../assets/b5.jpeg';
import branch6 from '../assets/loc2.jpeg';
import testimonial1 from '../assets/testi1.png';
import testimonial2 from '../assets/testi2.jpeg';
import contactback from '../assets/contactback.jpeg'
const FranchisingPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    benefits: false,
    process: false,
    investment: false,
    testimonials: false,
    faq: false,
    cta: false,
    branches: false
  });
  const [stats, setStats] = useState({
    locations: 0,
    satisfaction: 0,
    roi: 0
  });

  const sectionRefs = {
    hero: useRef(null),
    benefits: useRef(null),
    process: useRef(null),
    investment: useRef(null),
    testimonials: useRef(null),
    faq: useRef(null),
    cta: useRef(null),
    branches: useRef(null)
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.dataset.section;
          setVisibleSections(prev => ({ ...prev, [section]: true }));
        }
      });
    }, { threshold: 0.1 });
    
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    // Animate stats counting
    const statsInterval = setInterval(() => {
      setStats(prev => ({
        locations: prev.locations < 150 ? prev.locations + 5 : 150,
        satisfaction: prev.satisfaction < 95 ? prev.satisfaction + 5 : 95,
        roi: prev.roi < 3 ? prev.roi + 1 : 3
      }));
    }, 50);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      clearInterval(statsInterval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const benefits = [
    {
      icon: <FaHandshake />,
      title: "Proven Business Model",
      desc: "Leverage our established systems and operational expertise"
    },
    {
      icon: <FaStore />,
      title: "Prime Locations",
      desc: "Strategic site selection and lease negotiation support"
    },
    {
      icon: <FaChartLine />,
      title: "Strong ROI",
      desc: "Attractive profit margins with multiple revenue streams"
    },
    {
      icon: <FaUsers />,
      title: "Training & Support",
      desc: "Comprehensive training programs and ongoing operational support"
    }
  ];

  const processSteps = [
    "Initial Inquiry",
    "Discovery Meeting",
    "Application Review",
    "Site Selection",
    "Training",
    "Grand Opening"
  ];

  const testimonials = [
    {
      quote: "The training and support I received was exceptional. I felt prepared from day one.",
      name: "Sarah K., Franchise Owner since 2019",
      location: "Lahore, Pakistan",
      image: testimonial1
    },
    {
      quote: "Best business decision I ever made. The brand recognition brings customers in daily.",
      name: "Michael T., Multi-unit Franchisee",
      location: "Karachi, Pakistan",
      image: testimonial2
    }
  ];

  const branches = [
    {
      city: "Karachi",
      address: "123 Coffee Street, Clifton",
      image: branch1,
      features: ["Free WiFi", "Outdoor Seating", "Parking Available"],
      brand: "Brew & Sip"
    },
    {
      city: "Lahore",
      address: "456 Brew Avenue, DHA",
      image: branch2,
      features: ["Conference Room", "Art Gallery", "Live Music"],
      brand: "Brew & Sip"
    },
    {
      city: "Islamabad",
      address: "789 Roast Road, F-7",
      image: branch3,
      features: ["Mountain View", "Book Club", "Vegan Options"],
      brand: "Brew & Sip"
    },
    {
      city: "Peshawar",
      address: "101 Khyber Lane, University Town",
      image: branch4,
      features: ["Traditional Decor", "Cultural Events", "Spacious"],
      brand: "Brew & Sip"
    },
    {
      city: "Quetta",
      address: "202 Baloch Street, Jinnah Town",
      image: branch5,
      features: ["Local Flavors", "Cozy Atmosphere", "24/7 Open"],
      brand: "Brew & Sip"
    },
    {
      city: "Faisalabad",
      address: "303 Textile Road, Canal View",
      image: branch6,
      features: ["Industrial Chic", "Study Area", "Specialty Brews"],
      brand: "Brew & Sip"
    }
  ];

  const getAnimationStyle = (section, delay = 0) => {
    const isVisible = visibleSections[section];
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`
    };
  };

  const getFadeInStyle = (section, delay = 0) => {
    const isVisible = visibleSections[section];
    return {
      opacity: isVisible ? 1 : 0,
      transition: `opacity 0.8s ease ${delay}s`
    };
  };

  const getTestimonialAnimation = (index) => {
    return {
      opacity: activeTestimonial === index ? 1 : 0,
      transform: activeTestimonial === index ? 'translateX(0)' : 'translateX(50px)',
      transition: 'all 0.5s ease'
    };
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div 
        ref={sectionRefs.hero}
        data-section="hero"
        style={{
          ...styles.hero,
          backgroundImage: `url(${bannerImage})`,
          opacity: visibleSections.hero ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      >
        <div style={styles.imageOverlay} />
        <div style={styles.heroContent}>
          <h1 
            style={{
              ...styles.heroTitle,
              ...getAnimationStyle('hero', 0.3)
            }}
          >
            Own a Piece of Our Success
          </h1>
          <p 
            style={{
              ...styles.heroSubtitle,
              ...getAnimationStyle('hero', 0.5)
            }}
          >
            Join Pakistan's fastest growing coffee franchise opportunity
          </p>
          <div style={getFadeInStyle('hero', 0.8)}>
            <button style={styles.ctaButton}>
              Explore Franchise Opportunities <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={styles.statsBar}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>{stats.locations}+</h3>
              <p style={styles.statLabel}>Locations Nationwide</p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>{stats.satisfaction}%</h3>
              <p style={styles.statLabel}>Franchisee Satisfaction</p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>{stats.roi}-{stats.roi + 0.5}</h3>
              <p style={styles.statLabel}>Years ROI</p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>24/7</h3>
              <p style={styles.statLabel}>Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Franchise Section */}
      <section 
        ref={sectionRefs.benefits}
        data-section="benefits"
        style={{
          ...styles.section,
          opacity: visibleSections.benefits ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      >
        <div style={styles.container}>
          <h2 style={{
            ...styles.sectionTitle,
            ...getAnimationStyle('benefits')
          }}>
            Why Franchise With Us?
          </h2>
          <div style={styles.grid}>
            {benefits.map((item, index) => (
              <div 
                key={index}
                style={{
                  ...styles.card,
                  ...getAnimationStyle('benefits', index * 0.1),
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <div style={styles.cardIcon}>{item.icon}</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section 
        ref={sectionRefs.branches}
        data-section="branches"
        style={{
          ...styles.section,
          backgroundColor: '#f9f9f9',
          opacity: visibleSections.branches ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      >
        <div style={styles.container}>
          <h2 style={{
            ...styles.sectionTitle,
            ...getAnimationStyle('branches')
          }}>
            Our Flagship Branches
          </h2>
          <p style={{
            ...styles.sectionSubtitle,
            ...getAnimationStyle('branches', 0.2)
          }}>
            Visit our existing locations to experience the brand firsthand
          </p>
          
          <div style={styles.branchesGrid}>
            {branches.map((branch, index) => (
              <div 
                key={index}
                style={{
                  ...styles.branchCard,
                  ...getAnimationStyle('branches', index * 0.1),
                  animation: visibleSections.branches ? `fadeInUp 0.5s ease ${index * 0.1}s forwards` : 'none'
                }}
              >
                <div style={styles.branchImageContainer}>
                  <img 
                    src={branch.image} 
                    alt={`${branch.city} branch`} 
                    style={styles.branchImage}
                  />
                  <div style={styles.branchOverlay}>
                    <div style={styles.brandTag}>{branch.brand}</div>
                    <h3 style={styles.branchCity}>{branch.city}</h3>
                  </div>
                </div>
                <div style={styles.branchInfo}>
                  <p style={styles.branchAddress}>
                    <FaMapMarkerAlt style={{marginRight: '8px'}} />
                    {branch.address}
                  </p>
                  <div style={styles.branchFeatures}>
                    {branch.features.map((feature, i) => (
                      <span key={i} style={styles.featureTag}>{feature}</span>
                    ))}
                  </div>
                  <button style={styles.branchButton}>
                    View Details <FaChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={sectionRefs.process}
        data-section="process"
        style={{
          ...styles.section,
          opacity: visibleSections.process ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      >
        <div style={styles.container}>
          <h2 style={{
            ...styles.sectionTitle,
            ...getAnimationStyle('process')
          }}>
            Our 6-Step Franchising Process
          </h2>
          <div style={styles.processContainer}>
            {processSteps.map((step, index) => (
              <div 
                key={index}
                style={{
                  ...styles.processStep,
                  ...getAnimationStyle('process', index * 0.1)
                }}
              >
                <div style={styles.stepNumber}>{index + 1}</div>
                <div style={styles.stepContent}>
                  <h3 style={styles.stepTitle}>{step}</h3>
                  <p style={styles.stepDesc}>
                    {index === 0 && "Complete our online inquiry form"}
                    {index === 1 && "Meet with our franchising team"}
                    {index === 2 && "We review your application"}
                    {index === 3 && "Find the perfect location"}
                    {index === 4 && "Complete our training program"}
                    {index === 5 && "Launch your business"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section 
        ref={sectionRefs.investment}
        data-section="investment"
        style={{
          ...styles.section,
          opacity: visibleSections.investment ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      >
        <div style={styles.container}>
          <h2 style={{
            ...styles.sectionTitle,
            ...getAnimationStyle('investment')
          }}>
            Investment Overview
          </h2>
          <div style={{...styles.flexContainer, flexDirection: isMobile ? 'column' : 'row'}}>
            <div style={styles.investmentInfo}>
              <h3 style={styles.subSectionTitle}>Financial Requirements</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>Minimum liquid capital: $100,000</li>
                <li style={styles.listItem}>Net worth requirement: $300,000+</li>
                <li style={styles.listItem}>Franchise fee: $35,000</li>
                <li style={styles.listItem}>Total investment: $250,000 - $500,000</li>
              </ul>
              
              <h3 style={{...styles.subSectionTitle, marginTop: '30px'}}>What's Included</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>Comprehensive training program</li>
                <li style={styles.listItem}>Site selection assistance</li>
                <li style={styles.listItem}>Marketing and branding support</li>
                <li style={styles.listItem}>Ongoing operational guidance</li>
              </ul>
            </div>
            
            <div style={styles.investmentCalculator}>
              <h3 style={styles.subSectionTitle}>ROI Calculator</h3>
              <div style={styles.calculator}>
                <div style={styles.calculatorInput}>
                  <label>Estimated Location Size (sq ft)</label>
                  <input type="range" min="800" max="2000" step="100" />
                </div>
                <div style={styles.calculatorInput}>
                  <label>Projected Monthly Revenue</label>
                  <input type="range" min="10000" max="50000" step="1000" />
                </div>
                <div style={styles.calculatorResult}>
                  <h4>Estimated ROI Period:</h4>
                  <p style={styles.roiValue}>2.5 - 3.5 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={sectionRefs.testimonials}
        data-section="testimonials"
        style={{
          ...styles.section,
          backgroundColor: '#f5f5f5',
          opacity: visibleSections.testimonials ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      >
        <div style={styles.container}>
          <h2 style={{
            ...styles.sectionTitle,
            ...getAnimationStyle('testimonials')
          }}>
            Hear From Our Franchisees
          </h2>
          
          <div style={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                style={{
                  ...styles.testimonialCard,
                  ...getTestimonialAnimation(index),
                  display: activeTestimonial === index ? 'flex' : 'none'
                }}
              >
                <div style={styles.testimonialImageContainer}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    style={styles.testimonialImage}
                  />
                </div>
                <div style={styles.testimonialContent}>
                  <p style={styles.quote}>"{testimonial.quote}"</p>
                  <div style={styles.testimonialFooter}>
                    <p style={styles.name}>{testimonial.name}</p>
                    <p style={styles.location}>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div style={styles.testimonialDots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  style={{
                    ...styles.dot,
                    backgroundColor: index === activeTestimonial ? '#c19a6b' : '#ddd'
                  }}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        ref={sectionRefs.faq}
        data-section="faq"
        style={{
          ...styles.section,
          opacity: visibleSections.faq ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      >
        <div style={styles.container}>
          <h2 style={{
            ...styles.sectionTitle,
            ...getAnimationStyle('faq')
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={styles.faqContainer}>
            {[
              {
                question: "How much can I earn as a franchise owner?",
                answer: "Our average franchise generates $300,000-$600,000 in annual revenue with a 15-25% profit margin."
              },
              {
                question: "How long does it take to open a franchise?",
                answer: "Typically 4-6 months from signing the agreement to grand opening."
              },
              {
                question: "Do you provide financing options?",
                answer: "We have partnerships with lenders who specialize in franchise financing."
              },
              {
                question: "Can I own multiple locations?",
                answer: "Yes, we offer multi-unit franchise opportunities for qualified candidates."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                style={{
                  ...styles.faqItem,
                  ...getAnimationStyle('faq', index * 0.1)
                }}
              >
                <h3 style={styles.faqQuestion}>{faq.question}</h3>
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section with Transparent Image Background */}
<section 
  ref={sectionRefs.cta}
  data-section="cta"
  style={{
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden',
    opacity: visibleSections.cta ? 1 : 0,
    transition: 'opacity 0.8s ease'
  }}
>
  {/* Your Downloaded Background */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${contactback})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.2,
    zIndex: 0
  }} />
  
  {/* Dark Overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(74, 52, 39, 0.7)',
    zIndex: 1
  }} />

  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 2 // Content above overlay
  }}>
    <h2 style={{
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '40px',
      color: 'white',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    }}>
      Let's Brew Success Together
    </h2>
    
    <div style={{
      display: 'flex',
      gap: '40px',
      alignItems: 'flex-start',
      flexDirection: isMobile ? 'column' : 'row'
    }}>
      {/* Form Container */}
      <div style={{
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent white
        padding: '40px',
        borderRadius: '8px',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: '600',
          marginBottom: '15px',
          color: '#6F4E37' // Coffee brown
        }}>Franchise Inquiry Form</h3>
        
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Name Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{
              display: 'block',
              marginBottom: '5px',
              fontSize: '1.1rem',
              color: '#6F4E37',
              fontWeight: '500'
            }}>Full Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                padding: '12px 15px',
                borderRadius: '4px',
                border: '1px solid #d4c9b8',
                fontSize: '1rem',
                backgroundColor: 'white',
                width: '100%',
                boxSizing: 'border-box',
                '::placeholder': {
                  color: '#b8a98f'
                },
                ':focus': {
                  outline: '2px solid #c19a6b',
                  borderColor: 'transparent'
                }
              }}
            />
          </div>
          
          {/* Email Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{
              display: 'block',
              marginBottom: '5px',
              fontSize: '1.1rem',
              color: '#6F4E37',
              fontWeight: '500'
            }}>Email*</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                padding: '12px 15px',
                borderRadius: '4px',
                border: '1px solid #d4c9b8',
                fontSize: '1rem',
                backgroundColor: 'white',
                width: '100%',
                boxSizing: 'border-box',
                '::placeholder': {
                  color: '#b8a98f'
                },
                ':focus': {
                  outline: '2px solid #c19a6b',
                  borderColor: 'transparent'
                }
              }}
            />
          </div>
          
          {/* Phone Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{
              display: 'block',
              marginBottom: '5px',
              fontSize: '1.1rem',
              color: '#6F4E37',
              fontWeight: '500'
            }}>Phone*</label>
            <input
              type="tel"
              name="phone"
              placeholder="+92 300 1234567"
              value={formData.phone}
              onChange={handleInputChange}
              required
              style={{
                padding: '12px 15px',
                borderRadius: '4px',
                border: '1px solid #d4c9b8',
                fontSize: '1rem',
                backgroundColor: 'white',
                width: '100%',
                boxSizing: 'border-box',
                '::placeholder': {
                  color: '#b8a98f'
                },
                ':focus': {
                  outline: '2px solid #c19a6b',
                  borderColor: 'transparent'
                }
              }}
            />
          </div>
          
          {/* Submit Button */}
          <button type="submit" style={{
            backgroundColor: '#6F4E37',
            color: 'white',
            border: 'none',
            padding: '15px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            ':hover': {
              backgroundColor: '#8B6B4D',
              transform: 'translateY(-2px)'
            }
          }}>
            Get Franchise Details <FaChevronRight />
          </button>
        </form>
      </div>
      
      {/* Contact Info - Glass Morphism Style */}
      <div style={{
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '8px',
        padding: '30px',
        color: 'white',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: '600',
          marginBottom: '25px',
          color: 'white'
        }}>Our Contact Details</h3>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              backgroundColor: 'rgba(193, 154, 107, 0.3)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <FaPhoneAlt style={{ fontSize: '1.2rem', color: '#c19a6b' }} />
            </div>
            <div>
              <p style={{ fontWeight: '500', marginBottom: '5px' }}>Call Us</p>
              <p style={{ fontSize: '1.1rem' }}>+92 300 1234567</p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              backgroundColor: 'rgba(193, 154, 107, 0.3)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <FaEnvelope style={{ fontSize: '1.2rem', color: '#c19a6b' }} />
            </div>
            <div>
              <p style={{ fontWeight: '500', marginBottom: '5px' }}>Email Us</p>
              <p style={{ fontSize: '1.1rem' }}>franchise@coffeebrand.com</p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              backgroundColor: 'rgba(193, 154, 107, 0.3)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <FaMapMarkerAlt style={{ fontSize: '1.2rem', color: '#c19a6b' }} />
            </div>
            <div>
              <p style={{ fontWeight: '500', marginBottom: '5px' }}>Visit Us</p>
              <p style={{ fontSize: '1.1rem' }}>123 Coffee Street, Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Animation keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Open Sans', sans-serif",
    color: '#333',
    lineHeight: 1.6,
    overflowX: 'hidden'
  },
  hero: {
    position: 'relative',
    height: '100vh',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    padding: '0 20px'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '40px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  },
  ctaButton: {
    backgroundColor: '#c19a6b',
    color: 'white',
    border: 'none',
    padding: '15px 40px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    ':hover': {
      backgroundColor: '#a5825d'
    }
  },
  statsBar: {
    backgroundColor: '#fff',
    padding: '40px 0',
    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
    position: 'relative',
    zIndex: 3,
    marginTop: '-50px'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    textAlign: 'center'
  },
  statItem: {
    padding: '20px',
    borderRight: '1px solid #eee'
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#c19a6b',
    marginBottom: '10px'
  },
  statLabel: {
    fontSize: '1rem',
    color: '#666'
  },
  section: {
    padding: '100px 0',
    position: 'relative'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '60px',
    color: '#2a2a2a',
    position: 'relative'
  },
  sectionSubtitle: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '50px',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '40px 30px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  },
  cardIcon: {
    fontSize: '3rem',
    color: '#c19a6b',
    marginBottom: '25px'
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#2a2a2a'
  },
  cardDesc: {
    color: '#666',
    fontSize: '1.1rem'
  },
  branchesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px'
  },
  branchCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    opacity: 0,
    transform: 'translateY(30px)',
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
      '& img': {
        transform: 'scale(1.1)'
      }
    }
  },
  branchImageContainer: {
    height: '200px',
    position: 'relative',
    overflow: 'hidden'
  },
  branchImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  branchOverlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'linear-gradient(to top, rgba(94, 48, 35, 0.8), transparent)',
    padding: '20px',
    color: 'white'
  },
  brandTag: {
    backgroundColor: '#c19a6b',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    display: 'inline-block',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  branchCity: {
    fontSize: '1.8rem',
    fontWeight: '600',
    margin: '0',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
  },
  branchInfo: {
    padding: '20px'
  },
  branchAddress: {
    color: '#666',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    fontSize: '0.95rem'
  },
  branchFeatures: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px'
  },
  featureTag: {
    backgroundColor: '#f3e9e1',
    color: '#5e3023',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#c19a6b',
      color: 'white'
    }
  },
  branchButton: {
    backgroundColor: '#5e3023',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    ':hover': {
      backgroundColor: '#4a271d',
      animation: 'pulse 0.5s ease'
    }
  },
  processContainer: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  processStep: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '30px',
    position: 'relative'
  },
  stepNumber: {
    backgroundColor: '#c19a6b',
    color: 'white',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginRight: '30px',
    flexShrink: 0
  },
  stepContent: {
    textAlign: 'left',
    paddingTop: '10px'
  },
  stepTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#2a2a2a'
  },
 
  stepDesc: {
    color: '#666',
    fontSize: '1.1rem'
  },
  flexContainer: {
    display: 'flex',
    gap: '50px'
  },
  investmentInfo: {
    flex: 1
  },
  subSectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#2a2a2a'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    padding: '15px 0',
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '1.1rem'
  },
  investmentCalculator: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: '30px',
    borderRadius: '8px'
  },
  calculator: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  calculatorInput: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  calculatorResult: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    marginTop: '20px'
  },
  roiValue: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#c19a6b',
    marginTop: '10px'
  },
  testimonialContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative'
  },
  testimonialCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    minHeight: '300px'
  },
  testimonialImageContainer: {
    flex: 1,
    minHeight: '200px',
    position: 'relative',
    overflow: 'hidden'
  },
  testimonialImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  testimonialContent: {
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  quote: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    marginBottom: '25px',
    lineHeight: 1.8,
    color: '#555'
  },
  testimonialFooter: {
    display: 'flex',
    flexDirection: 'column'
  },
  name: {
    fontWeight: '600',
    color: '#c19a6b',
    fontSize: '1.1rem',
    marginBottom: '5px'
  },
  location: {
    color: '#777',
    fontSize: '0.9rem'
  },
  testimonialDots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '30px'
  },

  // Compact Form Styles
  formContainer: {
    flex: 1,
    maxWidth: '500px'
  },
  formTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: 'white'
  },
  input: {
    padding: '12px 15px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '1rem',
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    ':focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px #c19a6b'
    }
  },
  submitButton: {
    backgroundColor: '#5e3023',
    color: 'white',
    border: 'none',
    padding: '14px',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    ':hover': {
      backgroundColor: '#4a271d',
      transform: 'translateY(-2px)'
    }
  },

  // Contact Info Styles
  contactContainer: {
    flex: 1,
    maxWidth: '400px'
  },
  contactTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: 'white'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '1rem',
    color: 'white'
  },
  contactIcon: {
    color: '#c19a6b',
    fontSize: '1.1rem'
  },
  contactSubtitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: 'white'
  }
};

export default FranchisingPage;