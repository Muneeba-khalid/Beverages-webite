// // import React from 'react';
// // import { FaCoffee, FaUsers, FaChartLine, FaAward, FaMapMarkerAlt } from 'react-icons/fa';

// // const CareersPage = () => {
// //   const jobOpenings = [
// //     {
// //       title: "Barista",
// //       type: "Full-time/Part-time",
// //       location: "Karachi, Lahore, Islamabad",
// //       description: "Prepare and serve premium coffee while creating exceptional customer experiences."
// //     },
// //     {
// //       title: "Shift Supervisor",
// //       type: "Full-time",
// //       location: "All Locations",
// //       description: "Lead our team in delivering outstanding service and maintaining quality standards."
// //     },
// //     {
// //       title: "Coffee Roaster",
// //       type: "Full-time",
// //       location: "Karachi HQ",
// //       description: "Craft our signature blends using premium Arabica beans from ethical sources."
// //     }
// //   ];

// //   const benefits = [
// //     { icon: <FaCoffee />, title: "Free Drinks", description: "Enjoy our menu during shifts" },
// //     { icon: <FaUsers />, title: "Growth", description: "Clear career progression paths" },
// //     { icon: <FaChartLine />, title: "Training", description: "Continuous skill development" },
// //     { icon: <FaAward />, title: "Recognition", description: "Performance bonuses & awards" }
// //   ];

// //   return (
// //     <div style={styles.page}>
// //       {/* Hero Section */}
// //       <section style={styles.hero}>
// //         <div style={styles.heroContent}>
// //           <h1 style={styles.heroTitle}>Brew Your Career With Us</h1>
// //           <p style={styles.heroSubtitle}>Join Pakistan's fastest growing coffee chain family</p>
// //         </div>
// //       </section>

// //       {/* Why Join Us */}
// //       <section style={styles.section}>
// //         <div style={styles.container}>
// //           <h2 style={styles.sectionTitle}>Why Join Our Team?</h2>
// //           <p style={styles.paragraph}>
// //             At [Your Coffee Brand], we're more than just coffee - we're a community of passionate 
// //             individuals dedicated to creating memorable experiences. We offer competitive 
// //             compensation, flexible schedules, and a vibrant work environment.
// //           </p>
          
// //           <div style={styles.benefitsGrid}>
// //             {benefits.map((benefit, index) => (
// //               <div key={index} style={styles.benefitCard}>
// //                 <div style={styles.benefitIcon}>{benefit.icon}</div>
// //                 <h3 style={styles.benefitTitle}>{benefit.title}</h3>
// //                 <p style={styles.benefitDesc}>{benefit.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Current Openings */}
// //       <section style={{...styles.section, backgroundColor: '#f9f9f9'}}>
// //         <div style={styles.container}>
// //           <h2 style={styles.sectionTitle}>Current Openings</h2>
          
// //           <div style={styles.jobsContainer}>
// //             {jobOpenings.map((job, index) => (
// //               <div key={index} style={styles.jobCard}>
// //                 <h3 style={styles.jobTitle}>{job.title}</h3>
// //                 <div style={styles.jobMeta}>
// //                   <span style={styles.jobType}>{job.type}</span>
// //                   <span style={styles.jobLocation}>
// //                     <FaMapMarkerAlt style={{marginRight: '5px'}} />
// //                     {job.location}
// //                   </span>
// //                 </div>
// //                 <p style={styles.jobDesc}>{job.description}</p>
// //                 <button style={styles.applyButton}>Apply Now</button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Culture Section */}
// //       <section style={styles.section}>
// //         <div style={styles.container}>
// //           <h2 style={styles.sectionTitle}>Our Work Culture</h2>
// //           <div style={styles.cultureGrid}>
// //             <div style={styles.cultureText}>
// //               <p style={styles.paragraph}>
// //                 We believe in fostering a positive, inclusive environment where every team member 
// //                 can thrive. Our culture is built on:
// //               </p>
// //               <ul style={styles.cultureList}>
// //                 <li>Passion for coffee and people</li>
// //                 <li>Continuous learning and growth</li>
// //                 <li>Teamwork and mutual respect</li>
// //                 <li>Work-life balance</li>
// //                 <li>Celebrating successes together</li>
// //               </ul>
// //             </div>
// //             <div style={styles.cultureImage}>
// //               {/* Replace with your team photo */}
// //               <div style={styles.imagePlaceholder}></div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section style={{...styles.section, textAlign: 'center', backgroundColor: '#6F4E37', color: 'white'}}>
// //         <div style={styles.container}>
// //           <h2 style={{...styles.sectionTitle, color: 'white'}}>Ready to Join Our Team?</h2>
// //           <p style={{...styles.paragraph, color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto 30px'}}>
// //             Can't find the perfect role? Send us your resume anyway - we're always looking for talented individuals!
// //           </p>
// //           <button style={styles.ctaButton}>Submit General Application</button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // const styles = {
// //   page: {
// //     fontFamily: "'Open Sans', sans-serif",
// //     color: '#333',
// //     lineHeight: 1.6
// //   },
// //   hero: {
// //     height: '60vh',
// //     minHeight: '400px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     textAlign: 'center',
// //     backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center',
// //     backgroundColor: '#6F4E37',
// //     color: 'white',
// //     padding: '0 20px'
// //   },
// //   heroContent: {
// //     maxWidth: '800px',
// //     margin: '0 auto'
// //   },
// //   heroTitle: {
// //     fontSize: '2.8rem',
// //     fontWeight: '700',
// //     marginBottom: '20px'
// //   },
// //   heroSubtitle: {
// //     fontSize: '1.4rem',
// //     opacity: 0.9,
// //     marginBottom: '40px'
// //   },
// //   section: {
// //     padding: '80px 0'
// //   },
// //   container: {
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     padding: '0 20px'
// //   },
// //   sectionTitle: {
// //     fontSize: '2.2rem',
// //     fontWeight: '700',
// //     marginBottom: '30px',
// //     color: '#6F4E37'
// //   },
// //   paragraph: {
// //     fontSize: '1.1rem',
// //     lineHeight: 1.8,
// //     color: '#555',
// //     marginBottom: '30px'
// //   },
// //   benefitsGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// //     gap: '30px',
// //     marginTop: '50px'
// //   },
// //   benefitCard: {
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     padding: '30px',
// //     textAlign: 'center',
// //     boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
// //   },
// //   benefitIcon: {
// //     fontSize: '2rem',
// //     color: '#c19a6b',
// //     marginBottom: '20px'
// //   },
// //   benefitTitle: {
// //     fontSize: '1.3rem',
// //     marginBottom: '15px',
// //     color: '#6F4E37'
// //   },
// //   benefitDesc: {
// //     color: '#666',
// //     lineHeight: 1.6
// //   },
// //   jobsContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '20px',
// //     marginTop: '40px'
// //   },
// //   jobCard: {
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     padding: '30px',
// //     boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
// //   },
// //   jobTitle: {
// //     fontSize: '1.5rem',
// //     marginBottom: '10px',
// //     color: '#6F4E37'
// //   },
// //   jobMeta: {
// //     display: 'flex',
// //     gap: '20px',
// //     marginBottom: '15px',
// //     color: '#666'
// //   },
// //   jobType: {
// //     backgroundColor: '#f0f0f0',
// //     padding: '5px 10px',
// //     borderRadius: '4px',
// //     fontSize: '0.9rem'
// //   },
// //   jobLocation: {
// //     display: 'flex',
// //     alignItems: 'center'
// //   },
// //   jobDesc: {
// //     marginBottom: '20px',
// //     lineHeight: 1.7
// //   },
// //   applyButton: {
// //     backgroundColor: '#6F4E37',
// //     color: 'white',
// //     border: 'none',
// //     padding: '10px 25px',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '1rem',
// //     fontWeight: '600'
// //   },
// //   cultureGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: '1fr 1fr',
// //     gap: '50px',
// //     alignItems: 'center'
// //   },
// //   cultureList: {
// //     fontSize: '1.1rem',
// //     lineHeight: 2,
// //     paddingLeft: '20px'
// //   },
// //   imagePlaceholder: {
// //     backgroundColor: '#eee',
// //     height: '350px',
// //     borderRadius: '8px'
// //   },
// //   ctaButton: {
// //     backgroundColor: 'white',
// //     color: '#6F4E37',
// //     border: 'none',
// //     padding: '15px 40px',
// //     fontSize: '1.1rem',
// //     fontWeight: '600',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     transition: 'all 0.3s ease'
// //   }
// // };

// // export default CareersPage;

// import React, { useState } from 'react';
// import { FaCoffee, FaUsers, FaChartLine, FaAward, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

// const CareersPage = () => {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     coverLetter: ''
//   });

//   const jobCategories = [
//     { name: "All Job Category", value: "all" },
//     { name: "Cafe Management", value: "management" },
//     { name: "Barista", value: "barista" },
//     { name: "GRO", value: "gro" }
//   ];

//   const jobTypes = [
//     { name: "All Job Type", value: "all" },
//     { name: "Full Time", value: "full-time" },
//     { name: "Part Time", value: "part-time" }
//   ];

//   const jobLocations = [
//     { name: "All Job Location", value: "all" },
//     { name: "Islamabad", value: "islamabad" },
//     { name: "Lahore", value: "lahore" },
//     { name: "Karachi", value: "karachi" }
//   ];

//   const allJobs = [
//     {
//       id: 1,
//       title: "Shift Supervisor",
//       category: "management",
//       type: "full-time",
//       location: "islamabad",
//       description: "Lead our team in delivering outstanding service and maintaining quality standards."
//     },
//     {
//       id: 2,
//       title: "Cafe Experts",
//       category: "management",
//       type: "full-time",
//       location: "lahore",
//       description: "Provide exceptional customer service and coffee expertise."
//     },
//     {
//       id: 3,
//       title: "Cafe Managers",
//       category: "management",
//       type: "full-time",
//       location: "lahore",
//       description: "Oversee cafe operations and team management."
//     },
//     {
//       id: 4,
//       title: "GRO",
//       category: "gro",
//       type: "full-time",
//       location: "lahore",
//       description: "Guest Relations Officer for premium customer experiences."
//     },
//     {
//       id: 5,
//       title: "GRO",
//       category: "gro",
//       type: "part-time",
//       location: "islamabad",
//       description: "Guest Relations Officer for premium customer experiences."
//     },
//     {
//       id: 6,
//       title: "Barista",
//       category: "barista",
//       type: "part-time",
//       location: "islamabad",
//       description: "Prepare and serve premium coffee drinks."
//     }
//   ];

//   const [filteredJobs, setFilteredJobs] = useState(allJobs);
//   const [filters, setFilters] = useState({
//     category: "all",
//     type: "all",
//     location: "all"
//   });

//   const handleFilterChange = (filterType, value) => {
//     const newFilters = { ...filters, [filterType]: value };
//     setFilters(newFilters);
    
//     const filtered = allJobs.filter(job => {
//       return (
//         (newFilters.category === "all" || job.category === newFilters.category) &&
//         (newFilters.type === "all" || job.type === newFilters.type) &&
//         (newFilters.location === "all" || job.location === newFilters.location)
//       );
//     });
    
//     setFilteredJobs(filtered);
//   };

//   const handleJobClick = (job) => {
//     setSelectedJob(job);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedJob(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     alert(`Application submitted for ${selectedJob.title}`);
//     setShowModal(false);
//     setFormData({ name: '', email: '', phone: '', coverLetter: '' });
//   };

//   return (
//     <div style={styles.page}>
//       {/* Hero Section */}
//       <section style={styles.hero}>
//         <div style={styles.heroContent}>
//           <h1 style={styles.heroTitle}>Join Our Team</h1>
//           <p style={styles.heroSubtitle}>Brew your career with Pakistan's premier coffee experience</p>
//         </div>
//       </section>

//       {/* Job Filters */}
//       <section style={styles.section}>
//         <div style={styles.container}>
//           <div style={styles.filterContainer}>
//             <div style={styles.filterGroup}>
//               <label style={styles.filterLabel}>Category:</label>
//               <select 
//                 style={styles.filterSelect}
//                 onChange={(e) => handleFilterChange('category', e.target.value)}
//                 value={filters.category}
//               >
//                 {jobCategories.map((category) => (
//                   <option key={category.value} value={category.value}>{category.name}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div style={styles.filterGroup}>
//               <label style={styles.filterLabel}>Type:</label>
//               <select 
//                 style={styles.filterSelect}
//                 onChange={(e) => handleFilterChange('type', e.target.value)}
//                 value={filters.type}
//               >
//                 {jobTypes.map((type) => (
//                   <option key={type.value} value={type.value}>{type.name}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div style={styles.filterGroup}>
//               <label style={styles.filterLabel}>Location:</label>
//               <select 
//                 style={styles.filterSelect}
//                 onChange={(e) => handleFilterChange('location', e.target.value)}
//                 value={filters.location}
//               >
//                 {jobLocations.map((location) => (
//                   <option key={location.value} value={location.value}>{location.name}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Job Listings */}
//       <section style={{...styles.section, backgroundColor: '#f9f9f9'}}>
//         <div style={styles.container}>
//           <h2 style={styles.sectionTitle}>Current Openings</h2>
          
//           <div style={styles.jobsGrid}>
//             {filteredJobs.map((job) => (
//               <div key={job.id} style={styles.jobCard} onClick={() => handleJobClick(job)}>
//                 <h3 style={styles.jobTitle}>{job.title}</h3>
//                 <div style={styles.jobMeta}>
//                   <span style={styles.jobType}>{jobTypes.find(t => t.value === job.type)?.name}</span>
//                   <span style={styles.jobLocation}>
//                     <FaMapMarkerAlt style={{marginRight: '5px'}} />
//                     {jobLocations.find(l => l.value === job.location)?.name}
//                   </span>
//                 </div>
//                 <p style={styles.jobDesc}>{job.description}</p>
//                 <button style={styles.detailsButton}>More Details →</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Job Description Modal */}
//       {showModal && selectedJob && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <button style={styles.closeButton} onClick={handleCloseModal}>
//               <FaTimes />
//             </button>
            
//             <h2 style={styles.modalTitle}>{selectedJob.title}</h2>
//             <div style={styles.modalMeta}>
//               <span style={styles.modalType}>{jobTypes.find(t => t.value === selectedJob.type)?.name}</span>
//               <span style={styles.modalLocation}>
//                 <FaMapMarkerAlt style={{marginRight: '5px'}} />
//                 {jobLocations.find(l => l.value === selectedJob.location)?.name}
//               </span>
//             </div>
            
//             <div style={styles.jobDescription}>
//               <h3 style={styles.subTitle}>Purpose:</h3>
//               <ul style={styles.descriptionList}>
//                 <li>To interact with and create lasting genuine relationships with every guest</li>
//                 <li>Encourage and cater to customer loyalty and repeat business</li>
//                 <li>Maintain a high level of service by being a leader for the business</li>
//               </ul>
              
//               <h3 style={styles.subTitle}>Key Responsibilities:</h3>
//               <h4 style={styles.subSection}>Guest Service:</h4>
//               <ul style={styles.descriptionList}>
//                 <li>Greet all guests with a friendly smile</li>
//                 <li>Demonstrate passion and confidence for our brand</li>
//                 <li>Provide quick, friendly and genuine advice</li>
//                 <li>Generate guest satisfaction and respond appropriately to concerns</li>
//               </ul>
              
//               <h4 style={styles.subSection}>Product Quality:</h4>
//               <ul style={styles.descriptionList}>
//                 <li>Maintain high standards for all product preparation</li>
//                 <li>Follow all standard recipes at all times</li>
//                 <li>Ensure product quality before service</li>
//               </ul>
              
//               <h3 style={styles.subTitle}>Requirements:</h3>
//               <ul style={styles.descriptionList}>
//                 <li>Guest service skills with caring attitude</li>
//                 <li>Strong teamwork skills</li>
//                 <li>Previous retail or food service experience preferred</li>
//                 <li>Ability to multitask</li>
//                 <li>Maintain positive morale and professional attitude</li>
//               </ul>
              
//               <h3 style={styles.subTitle}>Benefits:</h3>
//               <ul style={styles.descriptionList}>
//                 <li>Competitive salary + daily tips</li>
//                 <li>Health insurance</li>
//                 <li>Paid leave</li>
//                 <li>Training and growth opportunities</li>
//               </ul>
//             </div>
            
//             <form style={styles.applicationForm} onSubmit={handleSubmit}>
//               <h3 style={styles.formTitle}>Apply for this position</h3>
              
//               <div style={styles.formGroup}>
//                 <label style={styles.formLabel}>Full Name *</label>
//                 <input 
//                   type="text" 
//                   name="name" 
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   style={styles.formInput}
//                   required 
//                 />
//               </div>
              
//               <div style={styles.formGroup}>
//                 <label style={styles.formLabel}>Email *</label>
//                 <input 
//                   type="email" 
//                   name="email" 
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   style={styles.formInput}
//                   required 
//                 />
//               </div>
              
//               <div style={styles.formGroup}>
//                 <label style={styles.formLabel}>Phone *</label>
//                 <input 
//                   type="tel" 
//                   name="phone" 
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   style={styles.formInput}
//                   required 
//                 />
//               </div>
              
//               <div style={styles.formGroup}>
//                 <label style={styles.formLabel}>Cover Letter *</label>
//                 <textarea 
//                   name="coverLetter" 
//                   value={formData.coverLetter}
//                   onChange={handleInputChange}
//                   style={{...styles.formInput, minHeight: '100px'}}
//                   required 
//                 />
//               </div>
              
//               <button type="submit" style={styles.submitButton}>Submit Application</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   page: {
//     fontFamily: "'Open Sans', sans-serif",
//     color: '#333',
//     lineHeight: 1.6,
//     position: 'relative'
//   },
//   hero: {
//     height: '50vh',
//     minHeight: '300px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//     backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundColor: '#6F4E37',
//     color: 'white',
//     padding: '0 20px'
//   },
//   heroContent: {
//     maxWidth: '800px',
//     margin: '0 auto'
//   },
//   heroTitle: {
//     fontSize: '2.5rem',
//     fontWeight: '700',
//     marginBottom: '15px'
//   },
//   heroSubtitle: {
//     fontSize: '1.3rem',
//     opacity: 0.9,
//     marginBottom: '30px'
//   },
//   section: {
//     padding: '60px 0'
//   },
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 20px'
//   },
//   sectionTitle: {
//     fontSize: '2rem',
//     fontWeight: '700',
//     marginBottom: '30px',
//     color: '#6F4E37'
//   },
//   filterContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     marginBottom: '30px'
//   },
//   filterGroup: {
//     flex: '1',
//     minWidth: '200px'
//   },
//   filterLabel: {
//     display: 'block',
//     marginBottom: '8px',
//     fontWeight: '600'
//   },
//   filterSelect: {
//     width: '100%',
//     padding: '10px',
//     borderRadius: '4px',
//     border: '1px solid #ddd'
//   },
//   jobsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//     gap: '20px'
//   },
//   jobCard: {
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     padding: '25px',
//     boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
//     cursor: 'pointer',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     ':hover': {
//       transform: 'translateY(-5px)',
//       boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
//     }
//   },
//   jobTitle: {
//     fontSize: '1.3rem',
//     marginBottom: '10px',
//     color: '#6F4E37'
//   },
//   jobMeta: {
//     display: 'flex',
//     gap: '15px',
//     marginBottom: '15px',
//     fontSize: '0.9rem',
//     color: '#666'
//   },
//   jobType: {
//     backgroundColor: '#f0f0f0',
//     padding: '3px 8px',
//     borderRadius: '4px'
//   },
//   jobLocation: {
//     display: 'flex',
//     alignItems: 'center'
//   },
//   jobDesc: {
//     marginBottom: '20px',
//     lineHeight: 1.6,
//     color: '#555'
//   },
//   detailsButton: {
//     color: '#6F4E37',
//     background: 'none',
//     border: 'none',
//     padding: '0',
//     cursor: 'pointer',
//     fontWeight: '600',
//     display: 'flex',
//     alignItems: 'center',
//     ':hover': {
//       textDecoration: 'underline'
//     }
//   },
//   modalOverlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.7)',
//     zIndex: 1000,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//     overflowY: 'auto'
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     width: '100%',
//     maxWidth: '800px',
//     maxHeight: '90vh',
//     overflowY: 'auto',
//     padding: '30px',
//     position: 'relative'
//   },
//   closeButton: {
//     position: 'absolute',
//     top: '15px',
//     right: '15px',
//     background: 'none',
//     border: 'none',
//     fontSize: '1.5rem',
//     cursor: 'pointer',
//     color: '#666',
//     ':hover': {
//       color: '#333'
//     }
//   },
//   modalTitle: {
//     fontSize: '1.8rem',
//     fontWeight: '700',
//     marginBottom: '10px',
//     color: '#6F4E37'
//   },
//   modalMeta: {
//     display: 'flex',
//     gap: '20px',
//     marginBottom: '30px',
//     color: '#666'
//   },
//   modalType: {
//     backgroundColor: '#f0f0f0',
//     padding: '5px 10px',
//     borderRadius: '4px'
//   },
//   modalLocation: {
//     display: 'flex',
//     alignItems: 'center'
//   },
//   jobDescription: {
//     marginBottom: '30px'
//   },
//   subTitle: {
//     fontSize: '1.3rem',
//     margin: '25px 0 15px',
//     color: '#6F4E37'
//   },
//   subSection: {
//     fontSize: '1.1rem',
//     margin: '20px 0 10px',
//     color: '#555'
//   },
//   descriptionList: {
//     paddingLeft: '20px',
//     marginBottom: '15px'
//   },
//   applicationForm: {
//     marginTop: '30px',
//     paddingTop: '30px',
//     borderTop: '1px solid #eee'
//   },
//   formTitle: {
//     fontSize: '1.3rem',
//     marginBottom: '20px',
//     color: '#6F4E37'
//   },
//   formGroup: {
//     marginBottom: '20px'
//   },
//   formLabel: {
//     display: 'block',
//     marginBottom: '8px',
//     fontWeight: '600'
//   },
//   formInput: {
//     width: '100%',
//     padding: '10px',
//     borderRadius: '4px',
//     border: '1px solid #ddd',
//     fontSize: '1rem'
//   },
//   submitButton: {
//     backgroundColor: '#6F4E37',
//     color: 'white',
//     border: 'none',
//     padding: '12px 25px',
//     fontSize: '1rem',
//     fontWeight: '600',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginTop: '10px',
//     ':hover': {
//       backgroundColor: '#8B6B4D'
//     }
//   }
// };

// export default CareersPage;

import React, { useState } from 'react';
import { FaCoffee, FaUsers, FaChartLine, FaAward, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });

  const jobCategories = [
    { name: "All Job Category", value: "all" },
    { name: "Cafe Management", value: "management" },
    { name: "Barista", value: "barista" },
    { name: "GRO", value: "gro" }
  ];

  const jobTypes = [
    { name: "All Job Type", value: "all" },
    { name: "Full Time", value: "full-time" },
    { name: "Part Time", value: "part-time" }
  ];

  const jobLocations = [
    { name: "All Job Location", value: "all" },
    { name: "Islamabad", value: "islamabad" },
    { name: "Lahore", value: "lahore" },
    { name: "Karachi", value: "karachi" }
  ];

  const allJobs = [
    {
      id: 1,
      title: "Shift Supervisor",
      category: "management",
      type: "full-time",
      location: "islamabad",
      description: "Lead our team in delivering outstanding service and maintaining quality standards."
    },
    {
      id: 2,
      title: "Cafe Experts",
      category: "management",
      type: "full-time",
      location: "lahore",
      description: "Provide exceptional customer service and coffee expertise."
    },
    {
      id: 3,
      title: "Cafe Managers",
      category: "management",
      type: "full-time",
      location: "lahore",
      description: "Oversee cafe operations and team management."
    },
    {
      id: 4,
      title: "GRO",
      category: "gro",
      type: "full-time",
      location: "lahore",
      description: "Guest Relations Officer for premium customer experiences."
    },
    {
      id: 5,
      title: "GRO",
      category: "gro",
      type: "part-time",
      location: "islamabad",
      description: "Guest Relations Officer for premium customer experiences."
    },
    {
      id: 6,
      title: "Barista",
      category: "barista",
      type: "part-time",
      location: "islamabad",
      description: "Prepare and serve premium coffee drinks."
    }
  ];

  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const [filters, setFilters] = useState({
    category: "all",
    type: "all",
    location: "all"
  });

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    const filtered = allJobs.filter(job => {
      return (
        (newFilters.category === "all" || job.category === newFilters.category) &&
        (newFilters.type === "all" || job.type === newFilters.type) &&
        (newFilters.location === "all" || job.location === newFilters.location)
      );
    });
    
    setFilteredJobs(filtered);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDialogMessage(`Thank you for applying to the ${selectedJob.title} position! We'll review your application and contact you soon.`);
    setShowDialog(true);
    setFormData({ name: '', email: '', phone: '', coverLetter: '' });
  };

  const closeDialog = () => {
    setShowDialog(false);
    setShowModal(false);
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
     

<section style={{
  ...styles.hero,
  background: 'linear-gradient(135deg, #2c1a0a 0%, #6F4E37 50%, #f8f4e8 100%)',
  padding: '100px 0'
}}>
  <div style={styles.heroContent}>
    <h1 style={styles.heroTitle}>Join Our Brew & Sip Family</h1>
    <p style={styles.heroSubtitle}>
      At [Our Brew & Sip], we're more than just coffee - we're a community of passionate individuals 
      dedicated to crafting exceptional experiences. Whether you're an experienced barista or just 
      beginning your journey in the coffee world, we have opportunities to grow with us.
    </p>
    
    <div style={styles.heroStats}>
      <div style={styles.heroStat}>
        <FaUsers style={styles.statIcon} />
        <div>
          <h3 style={styles.statNumber}>200+</h3>
          <p style={styles.statLabel}>Team Members</p>
        </div>
      </div>
      
      <div style={styles.heroStat}>
        <FaMapMarkerAlt style={styles.statIcon} />
        <div>
          <h3 style={styles.statNumber}>50+</h3>
          <p style={styles.statLabel}>Locations Nationwide</p>
        </div>
      </div>
      
      <div style={styles.heroStat}>
        <FaAward style={styles.statIcon} />
        <div>
          <h3 style={styles.statNumber}>5</h3>
          <p style={styles.statLabel}>Industry Awards</p>
        </div>
      </div>
    </div>
    
    <div style={styles.heroBenefits}>
      <h3 style={styles.benefitsTitle}>Why Choose Us?</h3>
      <ul style={styles.benefitsList}>
        <li>Competitive salaries with performance bonuses</li>
        <li>Comprehensive training programs</li>
        <li>Career growth opportunities</li>
        <li>Free coffee during shifts</li>
        <li>Positive, inclusive work environment</li>
      </ul>
    </div>
  </div>
</section>
      {/* Job Filters */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.filterContainer}>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Category:</label>
              <select 
                style={styles.filterSelect}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                value={filters.category}
              >
                {jobCategories.map((category) => (
                  <option key={category.value} value={category.value}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Type:</label>
              <select 
                style={styles.filterSelect}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                value={filters.type}
              >
                {jobTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.name}</option>
                ))}
              </select>
            </div>
            
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Location:</label>
              <select 
                style={styles.filterSelect}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                value={filters.location}
              >
                {jobLocations.map((location) => (
                  <option key={location.value} value={location.value}>{location.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section style={{...styles.section, backgroundColor: '#f9f9f9'}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Current Openings</h2>
          
          <div style={styles.jobsGrid}>
            {filteredJobs.map((job) => (
              <div key={job.id} style={styles.jobCard} onClick={() => handleJobClick(job)}>
                <h3 style={styles.jobTitle}>{job.title}</h3>
                <div style={styles.jobMeta}>
                  <span style={styles.jobType}>{jobTypes.find(t => t.value === job.type)?.name}</span>
                  <span style={styles.jobLocation}>
                    <FaMapMarkerAlt style={{marginRight: '5px'}} />
                    {jobLocations.find(l => l.value === job.location)?.name}
                  </span>
                </div>
                <p style={styles.jobDesc}>{job.description}</p>
                <button style={styles.detailsButton}>More Details →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Description Modal */}
      {showModal && selectedJob && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button style={styles.closeButton} onClick={handleCloseModal}>
              <FaTimes />
            </button>
            
            <h2 style={styles.modalTitle}>{selectedJob.title}</h2>
            <div style={styles.modalMeta}>
              <span style={styles.modalType}>{jobTypes.find(t => t.value === selectedJob.type)?.name}</span>
              <span style={styles.modalLocation}>
                <FaMapMarkerAlt style={{marginRight: '5px'}} />
                {jobLocations.find(l => l.value === selectedJob.location)?.name}
              </span>
            </div>
            
            <div style={styles.jobDescription}>
              <h3 style={styles.subTitle}>Purpose:</h3>
              <ul style={styles.descriptionList}>
                <li>To interact with and create lasting genuine relationships with every guest</li>
                <li>Encourage and cater to customer loyalty and repeat business</li>
                <li>Maintain a high level of service by being a leader for the business</li>
              </ul>
              
              <h3 style={styles.subTitle}>Key Responsibilities:</h3>
              <h4 style={styles.subSection}>Guest Service:</h4>
              <ul style={styles.descriptionList}>
                <li>Greet all guests with a friendly smile</li>
                <li>Demonstrate passion and confidence for our brand</li>
                <li>Provide quick, friendly and genuine advice</li>
                <li>Generate guest satisfaction and respond appropriately to concerns</li>
              </ul>
              
              <h4 style={styles.subSection}>Product Quality:</h4>
              <ul style={styles.descriptionList}>
                <li>Maintain high standards for all product preparation</li>
                <li>Follow all standard recipes at all times</li>
                <li>Ensure product quality before service</li>
              </ul>
              
              <h3 style={styles.subTitle}>Requirements:</h3>
              <ul style={styles.descriptionList}>
                <li>Guest service skills with caring attitude</li>
                <li>Strong teamwork skills</li>
                <li>Previous retail or food service experience preferred</li>
                <li>Ability to multitask</li>
                <li>Maintain positive morale and professional attitude</li>
              </ul>
              
              <h3 style={styles.subTitle}>Benefits:</h3>
              <ul style={styles.descriptionList}>
                <li>Competitive salary + daily tips</li>
                <li>Health insurance</li>
                <li>Paid leave</li>
                <li>Training and growth opportunities</li>
              </ul>
            </div>
            
            <form style={styles.applicationForm} onSubmit={handleSubmit}>
              <h3 style={styles.formTitle}>Apply for this position</h3>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  required 
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  required 
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Phone *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  required 
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Cover Letter *</label>
                <textarea 
                  name="coverLetter" 
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  style={{...styles.formInput, minHeight: '100px'}}
                  required 
                />
              </div>
              
              <button type="submit" style={styles.submitButton}>Submit Application</button>
            </form>
          </div>
        </div>
      )}

      {/* Dialog Box */}
      {showDialog && (
        <div style={styles.dialogOverlay}>
          <div style={styles.dialogBox}>
            <div style={styles.dialogContent}>
              <h3 style={styles.dialogTitle}>Application Submitted</h3>
              <p style={styles.dialogMessage}>{dialogMessage}</p>
              <button 
                style={styles.dialogButton}
                onClick={closeDialog}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Open Sans', sans-serif",
    color: '#333',
    lineHeight: 1.6,
    position: 'relative'
  },
  hero: {
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#6F4E37',
    padding: '0 20px'
  },
  heroContent: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 1
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '25px',
     marginTop: '55px', 
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    lineHeight: '1.2'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto 40px',
    lineHeight: '1.8',
    opacity: 0.9
  },
  heroStats: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    margin: '40px 0'
  },
  heroStat: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: '20px 30px',
    borderRadius: '8px',
    backdropFilter: 'blur(5px)',
    minWidth: '200px'
  },
  statIcon: {
    fontSize: '2.5rem',
    color: '#c19a6b'
  },
  statNumber: {
    fontSize: '2.2rem',
    fontWeight: '700',
    margin: '0 0 5px 0',
    lineHeight: '1'
  },
  statLabel: {
    fontSize: '1rem',
    margin: '0',
    opacity: 0.9
  },
  heroBenefits: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '30px',
    borderRadius: '8px',
    maxWidth: '700px',
    margin: '40px auto 0',
    backdropFilter: 'blur(5px)'
  },
  benefitsTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#c19a6b'
  },
  benefitsList: {
    textAlign: 'left',
    listStyle: 'none',
    padding: '0',
    margin: '0 auto',
    maxWidth: '500px'
  },
  'benefitsList li': {
    position: 'relative',
    paddingLeft: '25px',
    marginBottom: '15px',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    ':before': {
      content: '"•"',
      position: 'absolute',
      left: '0',
      color: '#c19a6b',
      fontSize: '1.5rem',
      lineHeight: '1'
    }
  },
  section: {
    padding: '60px 0'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '30px',
    color: '#6F4E37'
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '30px'
  },
  filterGroup: {
    flex: '1',
    minWidth: '200px'
  },
  filterLabel: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600'
  },
  filterSelect: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd'
  },
  jobsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    }
  },
  jobTitle: {
    fontSize: '1.3rem',
    marginBottom: '10px',
    color: '#6F4E37'
  },
  jobMeta: {
    display: 'flex',
    gap: '15px',
    marginBottom: '15px',
    fontSize: '0.9rem',
    color: '#666'
  },
  jobType: {
    backgroundColor: '#f0f0f0',
    padding: '3px 8px',
    borderRadius: '4px'
  },
  jobLocation: {
    display: 'flex',
    alignItems: 'center'
  },
  jobDesc: {
    marginBottom: '20px',
    lineHeight: 1.6,
    color: '#555'
  },
  detailsButton: {
    color: '#6F4E37',
    background: 'none',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    overflowY: 'auto'
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '800px',
    maxHeight: '90vh',
    overflowY: 'auto',
    padding: '30px',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#666',
    ':hover': {
      color: '#333'
    }
  },
  modalTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#6F4E37'
  },
  modalMeta: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    color: '#666'
  },
  modalType: {
    backgroundColor: '#f0f0f0',
    padding: '5px 10px',
    borderRadius: '4px'
  },
  modalLocation: {
    display: 'flex',
    alignItems: 'center'
  },
  jobDescription: {
    marginBottom: '30px'
  },
  subTitle: {
    fontSize: '1.3rem',
    margin: '25px 0 15px',
    color: '#6F4E37'
  },
  subSection: {
    fontSize: '1.1rem',
    margin: '20px 0 10px',
    color: '#555'
  },
  descriptionList: {
    paddingLeft: '20px',
    marginBottom: '15px'
  },
  applicationForm: {
    marginTop: '30px',
    paddingTop: '30px',
    borderTop: '1px solid #eee'
  },
  formTitle: {
    fontSize: '1.3rem',
    marginBottom: '20px',
    color: '#6F4E37'
  },
  formGroup: {
    marginBottom: '20px'
  },
  formLabel: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600'
  },
  formInput: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  },
  submitButton: {
    backgroundColor: '#6F4E37',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    ':hover': {
      backgroundColor: '#8B6B4D'
    }
  },
  dialogOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000
  },
  dialogBox: {
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '500px',
    padding: '30px',
    boxShadow: '0 5px 30px rgba(0,0,0,0.3)'
  },
  dialogContent: {
    textAlign: 'center'
  },
  dialogTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#6F4E37'
  },
  dialogMessage: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    marginBottom: '30px'
  },
  dialogButton: {
    backgroundColor: '#6F4E37',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#8B6B4D'
    }
  }
};

export default CareersPage;