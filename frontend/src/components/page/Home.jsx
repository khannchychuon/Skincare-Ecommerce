import { Link } from "react-router-dom";
import FeaturedProducts from "../common/FeaturedProducts";
import Testimonials from "../common/Testimonials";
import HeroBanner from "../../how/HeroBanner";

const Home = () => {
  return (
    <div>
      <HeroBanner />

      <FeaturedProducts />

      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/placeholder.svg?height=500&width=500"
            alt="Natural ingredients"
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Clean Beauty, Real Results
            </h2>
            <p className="text-gray-600">
              At GlowSkin, we believe that skincare should be effective,
              sustainable, and transparent. That's why we formulate all our
              products with clean, natural ingredients that deliver real results
              without compromising your health or the environment.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">100% Natural Ingredients</span>
              </li>
              <li className="flex items-center">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">Cruelty-Free & Vegan</span>
              </li>
              <li className="flex items-center">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">Sustainable Packaging</span>
              </li>
              <li className="flex items-center">
                <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">Dermatologist Tested</span>
              </li>
            </ul>
            <Link to="/about" className="btn-secondary inline-block">
              Learn More About Our Ingredients
            </Link>
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="section-container">
        <div className="bg-pink-100 rounded-lg p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-gray-700 mb-6">
              Subscribe to get special offers, free giveaways, and skincare tips
              delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
