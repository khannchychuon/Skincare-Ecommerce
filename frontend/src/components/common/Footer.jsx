import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/lipstick-icon.png" alt="" className="h-8 w-8" />
              <div className="ml-2">
                <span className="font-serif text-lg">Cosmetic</span>
                <span className="font-serif text-lg text-pink-500">Store</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Your one-stop destination for all beauty needs. Quality products
              at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Makeup
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Skincare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Haircare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Fragrances
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Tools & Brushes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest products and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Cosmetic Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
