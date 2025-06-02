"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
const mockProducts = [
  {
    id: 9,
    name: "Cosrx Gel Cleanser",
    category: "Cleanser",
    price: 9.0,
    image: "/images/products/cosrx-gel-cleanser.webp",
  },
  {
    id: 13,
    name: "3CE Blush",
    category: "Makeup",
    price: 23.0,
    image: "/images/products/3ec-blush.webp",
  },
  {
    id: 15,
    name: "Brightening Serum",
    category: "Serum",
    price: 17.2,
    image: "/images/products/jumiso-brightening-serum.webp",
  },
  {
    id: 27,
    name: "Romand Lasting Tint",
    category: "Makeup",
    price: 11.95,
    image: "/images/products/romand-juicy-lasting-tint.webp",
  },
  {
    id: 26,
    name: "Romand Blur Fudge Tint",
    category: "Makeup",
    price: 12.69,
    image: "/images/products/romand-blur-fudge-tint.webp",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Handle product search
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = mockProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(results.length > 0);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching:", searchQuery);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch(e);
  };

  const closeResults = () => setTimeout(() => setShowResults(false), 200);

  const handleAccountClick = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/userprofile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/lipstick-icon.png"
              alt="Logo"
              className="h-10 w-10"
            />
            <span className="font-serif text-xl">Cosmetic</span>
            <span className="font-serif text-xl text-pink-500">Store</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 shadow-sm focus:ring-2 focus:ring-[#2f4f4f] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => searchQuery && setShowResults(true)}
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#2f4f4f]"
              onClick={handleSearch}
            >
              <Search size={20} />
            </button>

            {showResults && (
              <div className="absolute top-full left-0 right-0 bg-white border rounded-md shadow-lg z-50 mt-1 max-h-96 overflow-y-auto">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100"
                    onClick={closeResults}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium truncate">{product.name}</div>
                      <div className="text-sm text-gray-500">
                        {product.category}
                      </div>
                    </div>
                    <div className="font-semibold text-[#2f4f4f]">
                      ${product.price.toFixed(2)}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex justify-center space-x-7 py-2">
            <Link
              to="/"
              className="text-[#2f4f4f] hover:text-teal-500 text-lg font-bold"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-[#2f4f4f] hover:text-teal-500 text-lg font-bold"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-[#2f4f4f] hover:text-teal-500 text-lg font-bold"
            >
              About
            </Link>
          </div>

          {/* Account + Cart */}
          <div className="flex items-center space-x-5">
            <button
              onClick={handleAccountClick}
              aria-label="Account"
              className="text-[#2f4f4f] hover:text-teal-500"
            >
              <User size={24} />
            </button>
            <Link
              to="/cart"
              className="text-[#2f4f4f] hover:text-teal-500 relative"
            >
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4 relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border border-gray-300 py-2 px-4 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => searchQuery && setShowResults(true)}
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600"
            onClick={handleSearch}
          >
            <Search size={18} />
          </button>

          {showResults && (
            <div className="absolute top-full left-0 right-0 bg-white border rounded-md shadow-lg z-50 mt-1 max-h-96 overflow-y-auto">
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100"
                  onClick={() => {
                    closeResults();
                    setIsMenuOpen(false);
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="font-medium truncate">{product.name}</div>
                    <div className="text-sm text-gray-500">
                      {product.category}
                    </div>
                  </div>
                  <div className="font-semibold text-pink-500">
                    ${product.price.toFixed(2)}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md px-4 pt-2 pb-4">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-pink-500 font-medium"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
