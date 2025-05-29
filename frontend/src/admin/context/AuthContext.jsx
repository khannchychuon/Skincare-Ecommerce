"use client"

import { useState, useEffect, createContext, useContext } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("adminToken")
    if (token) {
      setIsAuthenticated(true)
      setUser({ email: localStorage.getItem("adminEmail"), role: "admin" })
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // Mock authentication - in a real app, this would call an API
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("adminToken", "mock-jwt-token")
      localStorage.setItem("adminEmail", email)
      setIsAuthenticated(true)
      setUser({ email, role: "admin" })
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminEmail")
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
