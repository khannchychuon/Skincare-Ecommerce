import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-pink-50 ">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Discover Your Natural Glow
            </h1>
            <p className="text-lg text-gray-600">
              Clean, effective skincare formulated with natural ingredients to
              reveal your skin's natural radiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary text-center">
                Shop Now
              </Link>
              <Link to="/about" className="btn-secondary text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Skincare products"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md hidden md:block">
              <p className="font-medium text-gray-900">100% Natural</p>
              <p className="text-sm text-gray-600">Cruelty-free & Vegan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
