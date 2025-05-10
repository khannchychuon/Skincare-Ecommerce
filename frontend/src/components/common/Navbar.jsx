"use client";

import { useState } from "react";
import {
  Search,
  Phone,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function Navbar({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top navbar with logo and search */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/lipstick-icon.png" alt="" className="h-10 w-10" />
            <div className="ml-2">
              <span className="font-serif text-xl">Cosmetic</span>
              <span className="font-serif text-xl text-pink-500">Store</span>
              <p className="text-xs text-gray-500">Since 2010</p>
            </div>
          </div>

          {/* Categories dropdown - desktop */}
          <div className="hidden md:block relative">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md flex items-center">
              All Categories
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pink-500">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Hotline */}
          <div className="hidden lg:flex items-center">
            <div className="mr-2">
              <Phone size={20} className="text-pink-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Hotline 24/7</p>
              <p className="text-pink-500 font-semibold">(025) 3686 25 16</p>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-4">
            <button aria-label="User account">
              <User size={20} />
            </button>
            <button aria-label="Wishlist">
              <Heart size={20} />
            </button>
            <button aria-label="Shopping cart" className="relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom navbar with navigation links */}
      <nav className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex justify-between items-center py-3`}
          >
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a href="#" className="text-pink-500 font-medium">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-500 flex items-center"
                >
                  Shop <ChevronDown size={16} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-pink-500">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-500 flex items-center"
                >
                  Cheeks <ChevronDown size={16} className="ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-500 flex items-center"
                >
                  Pages <ChevronDown size={16} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-pink-500">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 flex items-center"
              >
                <span className="mr-2">🛒</span> Sell on Swoo
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-500 flex items-center"
              >
                <span className="mr-2">🔍</span> Order Tracking
              </a>
              <div className="relative">
                <button className="text-gray-700 hover:text-pink-500 flex items-center">
                  Recently Viewed <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
              <div className="relative">
                <button className="text-gray-700 hover:text-pink-500 flex items-center">
                  USD <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
              <div className="relative">
                <button className="text-gray-700 hover:text-pink-500 flex items-center">
                  <span className="mr-1">🇺🇸</span> Eng{" "}
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile search - only visible on mobile */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pink-500">
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
