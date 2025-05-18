"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real implementation, this would send the form data to your Laravel backend
    // For demo purposes, we'll simulate a successful submission after a delay
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div>
      <div className="bg-pink-50 py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Have questions or feedback? We'd love to hear from you. Our team is always here to help.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-pink-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">info@glowskin.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-pink-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-pink-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">
                      123 Skincare Lane
                      <br />
                      Beauty City, BC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-pink-400">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-pink-400">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-pink-400">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent mr-2"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 w-full">
              {/* In a real implementation, you would embed a Google Map here */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container mt-16">
        <div className="bg-pink-100 rounded-lg p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 mb-8">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>

            <div className="text-left space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">What are your shipping options?</h3>
                <p className="text-gray-600">
                  We offer standard shipping (3-5 business days), express shipping (1-2 business days), and free
                  shipping on orders over $50.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Do you offer international shipping?</h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by
                  location.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you
                  can return it for a full refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
