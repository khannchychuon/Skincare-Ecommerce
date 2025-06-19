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

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("authToken"));
  }, []);

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

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          className="md:hidden p-2 rounded-lg hover:bg-teal-50 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-teal-600" />
          ) : (
            <Menu size={24} className="hover:text-teal-600" />
          )}
        </button>

        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="h-12 w-12 bg-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-transform group-hover:scale-105">
              <Heart size={20} className="text-white" fill="currentColor" />
            </div>
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 rounded-full animate-pulse"></span>
          </div>
          <div className="text-xl font-bold text-gray-800">
            <span className="text-teal-600">Cosmetic</span> Store
            <p className="text-xs text-gray-500">Beauty & Elegance</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center flex-1 max-w-lg mx-6 relative">
          <div className="relative w-full group">
            <input
              type="text"
              placeholder="Search for beauty products..."
              className="w-full border border-gray-200 rounded-full py-2 px-6 pr-12 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => searchQuery && setShowResults(true)}
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-teal-600 text-white rounded-full shadow hover:bg-teal-700"
            >
              <Search size={18} />
            </button>

            {showResults && (
              <div className="absolute top-full left-0 right-0 bg-white border border-teal-100 rounded-xl shadow-lg mt-2 z-50 max-h-80 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((product) => (
                      <li
                        key={product.id}
                        className="px-4 py-2 hover:bg-teal-50"
                      >
                        <Link
                          to={`/products/${product.id}`}
                          onClick={closeResults}
                          className="flex items-center gap-3"
                        >
                          <img
                            src={getImageUrl(product.image)}
                            alt={product.name}
                            className="w-10 h-10 rounded-full border"
                            onError={(e) =>
                              (e.target.src = "/images/placeholder-product.png")
                            }
                          />
                          <span className="text-sm text-gray-700">
                            {product.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center text-sm text-gray-500 p-4">
                    <Search size={24} className="mx-auto text-teal-300" />
                    <p>No results found for "{searchQuery}"</p>
                    <p className="text-xs">
                      Try searching "lipstick", "foundation", or "skincare"
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex justify-center space-x-2">
          {navLinks.map((link) => (
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

        {isMenuOpen && (
          <div className="md:hidden absolute top-full  left-0 right-0 bg-white border-t mt-2 shadow-lg z-40 p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-teal-600 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

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
    </nav>
  );
};

export default Navbar;
