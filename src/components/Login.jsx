
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/bg.jpeg'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const inputFocusHandler = (e) => {
    e.target.style.borderColor = '#3b82f6'
    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)'
  }

  const inputBlurHandler = (e) => {
    e.target.style.borderColor = '#d1d5db'
    e.target.style.boxShadow = 'none'
  }

  const buttonHoverHandler = (e, hover) => {
    e.target.style.backgroundColor = hover ? '#1d4ed8' : '#2563eb'
    e.target.style.transform = hover ? 'translateY(-1px)' : 'none'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Login data:', formData)
    setIsLoading(false)
  }

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${backgroundImage})`,
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

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Welcome Back</h1>
        
        <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
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
              autoFocus
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
              style={styles.input}
              onFocus={inputFocusHandler}
              onBlur={inputBlurHandler}
              required
            />
          </div>
          
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => buttonHoverHandler(e, true)}
            onMouseLeave={(e) => buttonHoverHandler(e, false)}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          
          <div style={styles.linkContainer}>
            <span style={styles.linkText}>Don't have an account?</span>
            <Link 
              to="/signup" 
              style={styles.link}
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login