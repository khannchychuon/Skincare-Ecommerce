"use client";

import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      axios
        .get("http://127.0.0.1:8000/api/admin/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setIsAuthenticated(true);
          setUser(response.data);
        })
        .catch(() => {
          logout();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (phone, password) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/admin/login",
        {
          phone,
          password,
        }
      );

      const { token, user } = response.data;
      localStorage.setItem("adminToken", token);
      setIsAuthenticated(true);
      setUser(user);
      return true;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      return false;
    }
  };

  const logout = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/admin/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.warn("Logout error:", error.response?.data || error.message);
    }

    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
