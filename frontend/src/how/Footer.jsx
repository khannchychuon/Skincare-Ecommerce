import { Link } from "react-router-dom"; // Add this import
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  Youtube,
} from "lucide-react";
import { Heart } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#2f4f4f] border-t border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="h-12 w-12 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Heart
                      size={20}
                      className="text-white"
                      fill="currentColor"
                    />
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
            </div>
            <p className="text-white mb-6">Welcome to our skincare website.</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link to="/about" className="hover:text-teal-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-teal-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-teal-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact us</h3>
            <ul className="space-y-3 text-white">
              <li>
                <a
                  href="tel:+855973967856"
                  className="flex items-center space-x-2 text-white hover:text-teal-500"
                  aria-label="Phone"
                >
                  <Phone size={24} />
                  <span>+855 97 396 7856</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+855889916521"
                  className="flex items-center space-x-2 text-white hover:text-teal-500"
                  aria-label="Phone"
                >
                  <Phone size={24} />
                  <span>+855 88 498 0839</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pilo00054@gmail.com"
                  className="flex items-center space-x-2 text-white hover:text-teal-500"
                  aria-label="Email"
                >
                  <Mail size={24} />{" "}
                  {/* Changed from Email to Mail for most icon libraries */}
                  <span>pilo00054@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:chounkhannchy@gmail.com"
                  className="flex items-center space-x-2 text-white hover:text-teal-500"
                  aria-label="Email"
                >
                  <Mail size={24} />{" "}
                  {/* Changed from Email to Mail for most icon libraries */}
                  <span>chounkhannchy0@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-white hover:text-teal-500"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-white hover:text-teal-500"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-white hover:text-teal-500"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-white hover:text-teal-500"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center border-t border-gray-200 pt-6">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Cosmetic Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
