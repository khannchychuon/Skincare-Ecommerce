import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-pink-400">GlowSkin</h3>
            <p className="text-gray-600 text-sm">
              Your skin deserves the best. Natural, effective skincare products
              for all skin types.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pink-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-400">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-pink-400"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=cleansers"
                  className="text-gray-600 hover:text-pink-400"
                >
                  Cleansers
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=moisturizers"
                  className="text-gray-600 hover:text-pink-400"
                >
                  Moisturizers
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=serums"
                  className="text-gray-600 hover:text-pink-400"
                >
                  Serums
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=masks"
                  className="text-gray-600 hover:text-pink-400"
                >
                  Masks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pink-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-pink-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-pink-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-pink-400"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-pink-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-600 hover:text-pink-400"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-pink-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-pink-400">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} GlowSkin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
