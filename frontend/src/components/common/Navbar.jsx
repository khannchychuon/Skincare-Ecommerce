"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white sticky top-0 z-50  ">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
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
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 shadow-sm focus:ring-2 focus:ring-pink-300 focus:outline-none"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pink-500"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center space-x-7 py-2 bg-white">
            <Link
              to="/"
              className="text-gray-700 hover:text-pink-500 text-lg font-bold"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-pink-500 text-lg font-bold"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-pink-500 text-lg font-bold"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-pink-500 text-lg font-bold"
            >
              Contact
            </Link>
          </div>
          {/* User + Cart Icons */}
          <div className="px-4">
            <div className="flex items-center space-x-5">
              <button
                className="text-gray-700 hover:text-pink-400"
                aria-label="User Profile"
              >
                <User size={24} />
              </button>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-pink-400 relative"
                aria-label="View Cart"
              >
                <ShoppingBag size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full rounded-full border border-gray-300 py-2 px-4 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md px-4 pt-2 pb-4 transition-all duration-200">
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
