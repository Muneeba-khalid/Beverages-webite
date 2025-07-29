
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/bg.jpeg'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  // Define all styles as objects
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    formContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      width: '100%',
      maxWidth: '28rem',
      backdropFilter: 'blur(5px)'
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#1f2937'
    },
    inputContainer: {
      marginBottom: '1rem'
    },
    label: {
      display: 'block',
      color: '#374151',
      marginBottom: '0.25rem',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      outline: 'none',
      fontSize: '1rem',
      transition: 'all 0.2s ease'
    },
    inputError: {
      borderColor: '#ef4444'
    },
    errorText: {
      color: '#ef4444',
      fontSize: '0.75rem',
      marginTop: '0.25rem'
    },
    button: {
      width: '100%',
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '0.75rem 1rem',
      borderRadius: '0.375rem',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.2s ease'
    },
    buttonDisabled: {
      backgroundColor: '#9ca3af',
      cursor: 'not-allowed'
    },
    linkContainer: {
      textAlign: 'center',
      marginTop: '1.5rem',
      fontSize: '0.875rem'
    },
    linkText: {
      color: '#4b5563'
    },
    link: {
      color: '#2563eb',
      textDecoration: 'none',
      fontWeight: '500',
      marginLeft: '0.25rem'
    }
  }

  // Input focus/blur handlers
  const inputFocusHandler = (e) => {
    e.target.style.borderColor = '#3b82f6'
    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)'
  }

  const inputBlurHandler = (e) => {
    e.target.style.borderColor = errors[e.target.name] ? '#ef4444' : '#d1d5db'
    e.target.style.boxShadow = 'none'
  }

  // Button hover effect
  const buttonHoverHandler = (e, hover) => {
    if (!isLoading) {
      e.target.style.backgroundColor = hover ? '#1d4ed8' : '#2563eb'
      e.target.style.transform = hover ? 'translateY(-1px)' : 'none'
    }
  }

  // Form validation
  const validate = () => {
    const newErrors = {}
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match"
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Signup data:', formData)
    setIsLoading(false)
  }

  return (
    <div style={{ 
      ...styles.container,
      backgroundImage: `url(${backgroundImage})`
    }}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Create Account</h1>
        
        <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              onFocus={inputFocusHandler}
              onBlur={inputBlurHandler}
              required
              autoFocus
            />
          </div>
          
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              onFocus={inputFocusHandler}
              onBlur={inputBlurHandler}
              required
            />
          </div>
          
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.password && styles.inputError)
              }}
              onFocus={inputFocusHandler}
              onBlur={inputBlurHandler}
              required
            />
            {errors.password && (
              <p style={styles.errorText}>{errors.password}</p>
            )}
          </div>
          
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.confirmPassword && styles.inputError)
              }}
              onFocus={inputFocusHandler}
              onBlur={inputBlurHandler}
              required
            />
            {errors.confirmPassword && (
              <p style={styles.errorText}>{errors.confirmPassword}</p>
            )}
          </div>
          
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(isLoading && styles.buttonDisabled)
            }}
            onMouseEnter={(e) => buttonHoverHandler(e, true)}
            onMouseLeave={(e) => buttonHoverHandler(e, false)}
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
          
          <div style={styles.linkContainer}>
            <span style={styles.linkText}>Already have an account?</span>
            <Link 
              to="/login" 
              style={styles.link}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup