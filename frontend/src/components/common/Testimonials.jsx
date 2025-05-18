import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I've been using the Vitamin C serum for a month now and my skin has never looked better! The dark spots have faded and my skin is so much brighter.",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The hydrating cleanser is amazing! It doesn't strip my skin and leaves it feeling so soft. I've finally found a cleanser that works for my sensitive skin.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The night cream has completely transformed my skincare routine. I wake up with plump, hydrated skin every morning. Definitely worth the investment!",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-green-50 py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real results from real people who love our products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
