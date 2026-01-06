"use client"

import { useState } from "react"
import "./App.css"

export default function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    studentId: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add authentication logic here
  }

  return (
    <div className="auth-container">
      {/* School Image */}
      <img src="/images/pampanga-high-school.jpg" alt="Pampanga High School" className="auth-image" />

      {/* Auth Form */}
      <div className="auth-form">
        <div className="auth-header">
          <h1>PHS Club Hub</h1>
          <p>Pampanga High School</p>
          <p className="auth-subtitle">Club Organization & Management</p>
        </div>

        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <label htmlFor="email" className="auth-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@pampanga.edu.ph"
                className="auth-input"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="password" className="auth-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="auth-input"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button type="submit" className="auth-button">
                Login
              </button>

              <div className="auth-link">
                Don't have an account?{" "}
                <button type="button" onClick={() => setIsLogin(false)} className="auth-toggle">
                  Sign up here
                </button>
              </div>
            </>
          ) : (
            <>
              <label htmlFor="fullName" className="auth-label">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Juan dela Cruz"
                className="auth-input"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <label htmlFor="studentId" className="auth-label">
                Student ID
              </label>
              <input
                id="studentId"
                type="text"
                name="studentId"
                placeholder="2024-12345"
                className="auth-input"
                value={formData.studentId}
                onChange={handleChange}
                required
              />

              <label htmlFor="signup-email" className="auth-label">
                Email Address
              </label>
              <input
                id="signup-email"
                type="email"
                name="email"
                placeholder="your.email@pampanga.edu.ph"
                className="auth-input"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="signup-password" className="auth-label">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                name="password"
                placeholder="Create a strong password"
                className="auth-input"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <label htmlFor="confirmPassword" className="auth-label">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="auth-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <button type="submit" className="auth-button">
                Create Account
              </button>

              <div className="auth-link">
                Already have an account?{" "}
                <button type="button" onClick={() => setIsLogin(true)} className="auth-toggle">
                  Login here
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  )
}
