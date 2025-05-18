const About = () => {
  return (
    <div>
      <div className="bg-pink-50 py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">About GlowSkin</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're on a mission to transform skincare with clean, effective products that enhance your natural beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/placeholder.svg?height=500&width=500" alt="Our story" className="rounded-lg shadow-lg" />
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600">
                GlowSkin was founded in 2018 by a team of skincare enthusiasts who were frustrated with the lack of
                transparency in the beauty industry. We set out to create a brand that prioritizes clean ingredients,
                sustainability, and real results.
              </p>
              <p className="text-gray-600">
                What started as a small operation in our founder's kitchen has grown into a beloved skincare brand
                trusted by thousands of customers worldwide. Despite our growth, we remain committed to our core values:
                honesty, quality, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Ingredients</h3>
            <p className="text-gray-600">
              We carefully select each ingredient for its efficacy and safety. No harmful chemicals, ever.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Practices</h3>
            <p className="text-gray-600">
              From recyclable packaging to ethical sourcing, sustainability is at the heart of everything we do.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Science-Backed</h3>
            <p className="text-gray-600">
              Our formulations are developed by dermatologists and backed by scientific research for proven results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
            <p className="text-gray-600">
              At GlowSkin, we believe that skincare should be effective, sustainable, and transparent. We're committed
              to creating products that not only deliver results but also align with our values.
            </p>
            <ul className="space-y-4">
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-gray-900">Transparency</h4>
                  <p className="text-gray-600">
                    We're open about our ingredients, sourcing, and manufacturing processes.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-gray-900">Inclusivity</h4>
                  <p className="text-gray-600">We create products for all skin types, tones, and concerns.</p>
                </div>
              </li>
              <li className="flex">
                <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-gray-900">Sustainability</h4>
                  <p className="text-gray-600">We're committed to reducing our environmental impact at every step.</p>
                </div>
              </li>
            </ul>
          </div>
          <img
            src="/placeholder.svg?height=500&width=500"
            alt="Our values"
            className="rounded-lg shadow-lg order-1 md:order-2"
          />
        </div>
      </div>

      <div className="bg-green-50 py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mt-4">
              The passionate people behind GlowSkin who are dedicated to transforming your skincare routine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
              { name: "David Chen", role: "Chief Formulator", image: "/placeholder.svg?height=300&width=300" },
              {
                name: "Emma Rodriguez",
                role: "Head of Sustainability",
                image: "/placeholder.svg?height=300&width=300",
              },
              { name: "Michael Kim", role: "Creative Director", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
