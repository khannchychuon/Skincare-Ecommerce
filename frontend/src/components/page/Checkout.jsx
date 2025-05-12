"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"

const Checkout = () => {
  const { cartItems } = useCart()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  })

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + shipping

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send the order to your Laravel backend
    console.log("Order submitted:", { formData, items: cartItems, total })
    alert("Order placed successfully! This is a demo, so no actual order was processed.")
  }

  if (cartItems.length === 0) {
    return (
      <div className="section-container">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600">You need to add items to your cart before checking out.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="section-container">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
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
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State / Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="expMonth" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Month
                    </label>
                    <select
                      id="expMonth"
                      name="expMonth"
                      value={formData.expMonth}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                        <option key={month} value={month.toString().padStart(2, "0")}>
                          {month.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expYear" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Year
                    </label>
                    <select
                      id="expYear"
                      name="expYear"
                      value={formData.expYear}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="XXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:hidden">
              <button type="submit" className="w-full btn-primary">
                Place Order
              </button>
            </div>
          </form>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="flow-root">
              <ul className="-my-4 divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-4 flex">
                    <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between text-base text-gray-600">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-base text-gray-600 mt-2">
                <p>Shipping</p>
                <p>${shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 mt-4">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
            <div className="mt-6 hidden md:block">
              <button type="submit" form="checkout-form" className="w-full btn-primary">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
