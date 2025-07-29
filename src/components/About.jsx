import React, { useState, useEffect, useRef } from 'react';
import { FaHistory, FaLeaf, FaUsers, FaAward, FaCoffee, FaMapMarkerAlt } from 'react-icons/fa';
import aboutHero from '../assets/about.jpeg';
import teamPhoto from '../assets/team.jpeg';
import coffeeFarm from '../assets/coffeefarm.jpeg';

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    history: false,
    mission: false,
    team: false,
    values: false
  });

  // Create individual refs for each section
  const heroRef = useRef(null);
  const historyRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();
    
    // Set up event listener
    window.addEventListener('resize', handleResize);
    
    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.dataset.section;
            setVisibleSections((prev) => ({
              ...prev,
              [section]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const refs = [heroRef, historyRef, missionRef, teamRef, valuesRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const getAnimationStyle = (section, delay = 0) => {
    const isVisible = visibleSections[section];
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.8s ease ${delay}s`
    };
  };

  const coreValues = [
    { icon: <FaLeaf />, title: "Sustainability", desc: "Ethically sourced beans from certified farms" },
    { icon: <FaCoffee />, title: "Quality", desc: "Premium Arabica beans roasted to perfection" },
    { icon: <FaUsers />, title: "Community", desc: "Supporting local businesses and baristas" },
    { icon: <FaAward />, title: "Excellence", desc: "Consistent quality across all locations" }
  ];

  const milestones = [
    { year: "2010", event: "First cafe opened in Karachi" },
    { year: "2014", event: "Launched franchise program" },
    { year: "2018", event: "50 locations nationwide" },
    { year: "2022", event: "International expansion began" },
    { year: "2023", event: "Recognized as Top Coffee Chain" }
  ];

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        data-section="hero"
        style={{
          ...styles.hero,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: visibleSections.hero ? 1 : 0,
          transition: 'opacity 1s ease'
        }}
      >
        <div style={styles.heroContent}>
          <h1 style={{...styles.heroTitle, ...getAnimationStyle('hero')}}>
            Our Coffee Journey
          </h1>
          <p style={{...styles.heroSubtitle, ...getAnimationStyle('hero', 0.3)}}>
            Passion brewed into every cup since 2010
          </p>
        </div>
      </section>

      {/* History Section */}
      <section 
        ref={historyRef}
        data-section="history"
        style={styles.section}
      >
        <div style={styles.container}>
          <div style={{
            ...styles.flexContainer,
            flexDirection: isMobile ? 'column' : 'row',
            gap: '50px'
          }}>
            <div style={{ flex: 1, ...getAnimationStyle('history') }}>
              <h2 style={styles.sectionTitle}>
                <FaHistory style={{ marginRight: '15px' }} />
                Our Story
              </h2>
              <p style={styles.paragraph}>
                Founded in 2010 by two coffee enthusiasts in Karachi, we started as a small 
                neighborhood cafe with a simple mission: to serve exceptional coffee in a 
                warm, welcoming environment.
              </p>
              <p style={styles.paragraph}>
                What began as a single location has grown into Pakistan's most beloved 
                coffee chain, with over 150 locations nationwide and international 
                expansion underway.
              </p>
              
              <div style={styles.milestones}>
                {milestones.map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      ...styles.milestoneItem,
                      ...getAnimationStyle('history', index * 0.1)
                    }}
                  >
                    <div style={styles.milestoneYear}>{item.year}</div>
                    <div style={styles.milestoneEvent}>{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{
              flex: 1,
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              ...getAnimationStyle('history', 0.2)
            }}>
              <img 
                src={coffeeFarm} 
                alt="Coffee farm" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  minHeight: isMobile ? '300px' : 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        ref={missionRef}
        data-section="mission"
        style={{
          ...styles.section,
          backgroundColor: '#f9f9f9'
        }}
      >
        <div style={styles.container}>
          <h2 style={{
            ...styles.sectionTitle,
            textAlign: 'center',
            ...getAnimationStyle('mission')
          }}>
            Our Mission & Vision
          </h2>
          
          <div style={{
            ...styles.missionCard,
            ...getAnimationStyle('mission', 0.2)
          }}>
            <h3 style={styles.missionTitle}>Mission</h3>
            <p style={styles.missionText}>
              To create meaningful connections through exceptional coffee experiences, 
              while supporting sustainable farming practices and local communities.
            </p>
            
            <h3 style={{...styles.missionTitle, marginTop: '40px'}}>Vision</h3>
            <p style={styles.missionText}>
              To become the most respected coffee brand in Asia by 2030, known for 
              quality, innovation, and social responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        data-section="team"
        style={styles.section}
      >
        <div style={styles.container}>
          <div style={{
            ...styles.flexContainer,
            flexDirection: isMobile ? 'column-reverse' : 'row',
            gap: '50px'
          }}>
            <div style={{
              flex: 1,
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              ...getAnimationStyle('team')
            }}>
              <img 
                src={teamPhoto} 
                alt="Our team" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  minHeight: isMobile ? '300px' : 'auto'
                }}
              />
            </div>
            
            <div style={{ flex: 1, ...getAnimationStyle('team', 0.2) }}>
              <h2 style={styles.sectionTitle}>Meet Our Family</h2>
              <p style={styles.paragraph}>
                Our team of 500+ passionate coffee professionals includes award-winning 
                baristas, master roasters, and hospitality experts dedicated to creating 
                memorable experiences.
              </p>
              
              <div style={{ marginTop: '30px' }}>
                <div style={styles.statItem}>
                  <h3 style={styles.statNumber}>150+</h3>
                  <p style={styles.statLabel}>Certified Baristas</p>
                </div>
                <div style={styles.statItem}>
                  <h3 style={styles.statNumber}>12</h3>
                  <p style={styles.statLabel}>Master Roasters</p>
                </div>
                <div style={styles.statItem}>
                  <h3 style={styles.statNumber}>98%</h3>
                  <p style={styles.statLabel}>Employee Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
    
      <section 
  ref={valuesRef}
  data-section="values"
  style={{
    ...styles.section,
    backgroundColor: '#6F4E37',
    color: 'white',
    padding: '80px 0'
  }}
>
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  }}>
    <h2 style={{
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '50px',
      textAlign: 'center',
      color: 'white'
    }}>
      Our Core Values
    </h2>
    
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap'
    }}>
      {coreValues.map((value, index) => (
        <div 
          key={index}
          style={{
            flex: '1',
            minWidth: '250px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '30px',
            textAlign: 'center'
          }}
        >
          <div style={{
            fontSize: '2rem',
            color: '#c19a6b',
            marginBottom: '20px'
          }}>
            {value.icon}
          </div>
          <h3 style={{
            fontSize: '1.4rem',
            marginBottom: '15px',
            fontWeight: '600'
          }}>{value.title}</h3>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.6'
          }}>{value.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Locations CTA */}
      <section style={{
        padding: '80px 0',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f8f4e8 0%, #ffffff 100%)'
      }}>
        <div style={styles.container}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#6F4E37'
          }}>
            Visit Us Today
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Experience our passion for coffee at any of our 150+ locations nationwide
          </p>
          <button style={{
            backgroundColor: '#6F4E37',
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
            ':hover': {
              backgroundColor: '#8B6B4D',
              transform: 'translateY(-3px)'
            }
          }}>
            <FaMapMarkerAlt /> Find Nearest Location
          </button>
        </div>
      </section>
    </div>
  );
};

// Style object
const styles = {
  page: {
    fontFamily: "'Open Sans', sans-serif",
    color: '#333',
    lineHeight: 1.6
  },
  hero: {
    position: 'relative',
    height: '70vh',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  heroContent: {
    maxWidth: '800px',
    padding: '0 20px',
    zIndex: 2
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: 'white',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '40px',
    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
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
  flexContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '40px',
    color: '#6F4E37',
    display: 'flex',
    alignItems: 'center'
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#555',
    marginBottom: '20px'
  },
  milestones: {
    marginTop: '40px'
  },
  milestoneItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px',
    paddingBottom: '25px',
    borderBottom: '1px dashed #ddd'
  },
  milestoneYear: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#c19a6b',
    minWidth: '100px'
  },
  milestoneEvent: {
    fontSize: '1.1rem',
    paddingLeft: '20px',
    borderLeft: '3px solid #c19a6b'
  },
  missionCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '50px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
    maxWidth: '800px',
    margin: '0 auto'
  },
  missionTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#6F4E37',
    marginBottom: '20px',
    position: 'relative',
    paddingBottom: '10px',
    ':after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '60px',
      height: '3px',
      backgroundColor: '#c19a6b'
    }
  },
  missionText: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#555'
  },
  statItem: {
    display: 'inline-block',
    marginRight: '40px',
    marginBottom: '20px'
  },
  statNumber: {
    fontSize: '2.2rem',
    fontWeight: '700',
    color: '#c19a6b',
    marginBottom: '5px'
  },
  statLabel: {
    fontSize: '1rem',
    color: '#666'
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  valueCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '8px',
    padding: '40px 30px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(5px)',
    ':hover': {
      transform: 'translateY(-10px)',
      backgroundColor: 'rgba(255,255,255,0.15)'
    }
  },
  valueIcon: {
    fontSize: '2.5rem',
    color: '#c19a6b',
    marginBottom: '25px'
  },
  valueTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: 'white'
  },
  valueDesc: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1rem'
  }
};

export default AboutPage;