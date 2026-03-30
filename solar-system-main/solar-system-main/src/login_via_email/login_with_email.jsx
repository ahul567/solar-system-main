import React, { useState } from 'react'
import './login_with_email.css'

import AuraGreen from '../assets/AuraGreen.svg'
import ic_mail from '../assets/ic_outline-email.svg'
import ic_password from '../assets/password_icon.svg'
import ic_confirm_password from '../assets/Confirm_password_vectorsvg.svg'
import ic_user from '../assets/Name_Vector.svg'
import ic_hidden from '../assets/Vision_icon.svg'
import ic_phone from '../assets/proicons_call.svg'
export default function LoginWithEmail() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add signup logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className='signup-container'>
      <div className='signup-card'>
        {/* Logo */}
        <div className='logo-section'>
          <img className='aura-green-logo' src={AuraGreen} alt="Aura Green" />
        </div>

        {/* Signup Form */}
        <form className='signup-form' onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className='input-group'>
            <div className='input-field'>
              <img className='field-icon' src={ic_user} alt="Name" />
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className='form-input'
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className='input-group'>
            <div className='input-field'>

               <img src={ic_phone} alt="Phone" />
             
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Number"
                value={formData.phone}
                onChange={handleChange}
                className='form-input'
              />
            </div>
          </div>

          {/* Email Field */}
          <div className='input-group'>
            <div className='input-field'>
              <img className='field-icon' src={ic_mail} alt="Email" />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className='form-input'
              />
            </div>
          </div>

          {/* Password Field */}
          <div className='input-group'>
            <div className='input-field'>
              <img className='field-icon' src={ic_password} alt="Password" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                className='form-input'
              />
              <button
                type='button'
                className='toggle-password'
                onClick={() => setShowPassword(!showPassword)}
              >
                
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className='input-group'>
            <div className='input-field'>
              <img className='field-icon' src={ic_confirm_password} alt="Confirm Password" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className='form-input'
              />
              <button
                type='button'
                className='toggle-password'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <button type='submit' className='signup-btn'>Sign up</button>
        </form>

        {/* Login Link */}
        <div className='login-link-section'>
          <span className='link-text'>Don't have an account? </span>
          <a href='/login-via-email' className='signup-link'>Sign Up</a>
        </div>
      </div>
    </div>
  )
}
