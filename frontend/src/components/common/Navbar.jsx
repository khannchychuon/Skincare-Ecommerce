"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Search, User, ShoppingBag, Menu, X, Heart } from "lucide-react";

const backendBaseUrl = "http://localhost:8000";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  // Fetch all products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${backendBaseUrl}/api/products`);
        const data = await response.json();
        setAllProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products on search
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchQuery, allProducts]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching:", searchQuery);
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/images/placeholder-product.png";
    if (imagePath.startsWith("http")) return imagePath;
    return `${backendBaseUrl}/${imagePath}`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch(e);
  };

  const closeResults = () => setTimeout(() => setShowResults(false), 200);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    navigate("/");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // The rest of your JSX remains unchanged...

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50  ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-teal-50 transition-colors duration-200 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-teal-600" />
            ) : (
              <Menu size={24} className="hover:text-teal-600" />
            )}
          </button>

          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="h-12 w-12 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Heart size={20} className="text-white" fill="currentColor" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-serif text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                  Cosmetic
                </span>
                <span className="font-serif text-2xl font-bold text-gray-800 ml-1">
                  Store
                </span>
              </div>
              <span className="text-xs text-gray-500 -mt-1">
                Beauty & Elegance
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center flex-1 max-w-lg mx-6 relative">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Search for beauty products..."
                className="w-full border-2 border-gray-200 rounded-full py-3 px-6 pr-12 shadow-sm focus:ring-4 focus:ring-teal-100 focus:border-teal-400 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white group-hover:border-teal-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => searchQuery && setShowResults(true)}
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-2 rounded-full hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg"
                onClick={handleSearch}
              >
                <Search size={18} />
              </button>
            </div>

            {showResults && (
              <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border border-teal-100 rounded-2xl shadow-2xl z-50 mt-2 max-h-96 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((product) => (
                      <li
                        key={product.id}
                        className="px-4 py-2 hover:bg-teal-50 cursor-pointer flex items-center gap-3"
                      >
                        <Link
                          to={`/products/${product.id}`}
                          onClick={closeResults}
                          className="flex items-center gap-3"
                        >
                          <img
                            src={getImageUrl(product.image)}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded-full border border-teal-100"
                            onError={(e) => {
                              e.target.src = "/images/placeholder-product.png";
                            }}
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {product.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-6 text-gray-500 text-center text-sm">
                    <Search size={24} className="mx-auto mb-2 text-teal-300" />
                    <p>No results found for "{searchQuery}"</p>
                    <p className="text-xs mt-1">
                      Try searching for lipstick, foundation, or skincare
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="hidden md:flex justify-center space-x-2">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-gray-700 hover:text-teal-600 text-lg font-semibold transition-all duration-200 rounded-lg hover:bg-teal-50 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                aria-label="Account"
                className="group relative p-3 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 hover:from-teal-100 hover:to-teal-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <User
                  size={20}
                  className="text-gray-600 group-hover:text-teal-600 transition-colors"
                />
                {isLoggedIn && (
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></div>
                )}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl z-50 border border-teal-100 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    {!isLoggedIn ? (
                      <>
                        <Link
                          to="/login"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:text-teal-700 transition-all duration-200 rounded-xl group"
                        >
                          <User
                            size={16}
                            className="mr-3 group-hover:text-teal-600"
                          />
                          Sign In
                        </Link>
                        <Link
                          to="/register"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:text-teal-700 transition-all duration-200 rounded-xl group"
                        >
                          <Heart
                            size={16}
                            className="mr-3 group-hover:text-teal-600"
                          />
                          Create Account
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/userprofile"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:text-teal-700 transition-all duration-200 rounded-xl group"
                        >
                          <User
                            size={16}
                            className="mr-3 group-hover:text-teal-600"
                          />
                          My Profile
                        </Link>
                        <div className="h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent my-2"></div>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 rounded-xl group"
                        >
                          <X size={16} className="mr-3" />
                          Sign Out
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/cart"
              className="relative group p-3 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 hover:from-teal-100 hover:to-teal-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <ShoppingBag
                size={20}
                className="text-gray-600 group-hover:text-teal-600 transition-colors"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full h-6 w-6 flex items-center justify-center shadow-lg font-bold animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
