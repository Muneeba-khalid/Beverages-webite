

import { useState, useEffect } from 'react';

const Achievements = () => {
  const [operatingCountries, setOperatingCountries] = useState(0);
  const [branchesPakistan, setBranchesPakistan] = useState(0);
  const [branchesWorldwide, setBranchesWorldwide] = useState(0);
  const [timeData, setTimeData] = useState({
    localTime: '12:00 AM',
    countries: [
      { name: 'PAKISTAN', time: '12:00 AM' },
      { name: 'CANADA', time: '12:00 AM' },
      { name: 'UAE', time: '12:00 AM' }
    ]
  });

  useEffect(() => {
    // Animate the counters
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setOperatingCountries(Math.floor(progress * 30));
      setBranchesPakistan(Math.floor(progress * 50));
      setBranchesWorldwide(Math.floor(progress * 700));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();

    // Update all times
    const updateTimes = () => {
      const now = new Date();
      
      // Local time
      const localTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      // Times for different countries
      const countries = [
        { 
          name: 'PAKISTAN',
          time: now.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Karachi',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          })
        },
        { 
          name: 'CANADA',
          time: now.toLocaleTimeString('en-US', {
            timeZone: 'America/Toronto',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          })
        },
        { 
          name: 'UAE',
          time: now.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Dubai',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          })
        }
      ];

      setTimeData({
        localTime,
        countries
      });
    };

    updateTimes();
    const timeInterval = setInterval(updateTimes, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  // Black/Brown color scheme
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '2rem',
      backgroundColor: '#1a1a1a', // Dark black background
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      color: '#f5f5f5'
    },
    item: {
      textAlign: 'center',
      margin: '1rem',
      padding: '1.5rem',
      minWidth: '200px',
      background: '#2a2a2a', // Slightly lighter black
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
    },
    counter: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#d2b48c', // Brown/tan color for counters
      marginBottom: '0.5rem',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)'
    },
    label: {
      fontSize: '0.9rem',
      color: '#b0b0b0', // Light gray
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      fontWeight: '500'
    },
    timeContainer: {
      width: '100%',
      textAlign: 'center',
      marginTop: '2rem'
    },
    timeTitle: {
      fontSize: '1.2rem',
      color: '#d2b48c', // Brown
      marginBottom: '1rem'
    },
    timeGrid: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1.5rem'
    },
    timeItem: {
      padding: '0.5rem 1rem',
      background: '#2a2a2a',
      borderRadius: '6px',
      minWidth: '120px'
    },
    countryName: {
      color: '#d2b48c', // Brown
      fontSize: '0.9rem',
      marginBottom: '0.3rem'
    },
    countryTime: {
      fontSize: '1.1rem',
      fontWeight: '500'
    },
    responsive: window.innerWidth <= 768 ? {
      flexDirection: 'column'
    } : {}
  };

  return (
    <div style={{...styles.container, ...styles.responsive}}>
      <div style={styles.item}>
        <div style={styles.counter}>{operatingCountries}+</div>
        <div style={styles.label}>OPERATING COUNTRIES</div>
      </div>
      
      <div style={styles.item}>
        <div style={styles.counter}>{branchesPakistan}+</div>
        <div style={styles.label}>BRANCHES IN PAKISTAN</div>
      </div>
      
      <div style={styles.item}>
        <div style={styles.counter}>{branchesWorldwide}+</div>
        <div style={styles.label}>BRANCHES WORLDWIDE</div>
      </div>
      
      <div style={styles.timeContainer}>
        <div style={styles.timeTitle}>CURRENT TIME IN OUR MARKETS</div>
        <div style={styles.timeGrid}>
          {timeData.countries.map((country, index) => (
            <div key={index} style={styles.timeItem}>
              <div style={styles.countryName}>{country.name}</div>
              <div style={styles.countryTime}>{country.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;