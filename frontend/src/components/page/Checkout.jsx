"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();
  const backendBaseUrl = "http://127.0.0.1:8000";

  const [formData, setFormData] = useState({
    note: "",
    address: "",
    paymentType: "",
  });

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const [orderSuccess, setOrderSuccess] = useState(false);

  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/images/placeholder-product.png";
    if (imagePath.startsWith("http")) return imagePath;
    return `${backendBaseUrl}/${imagePath}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { formData, items: cartItems, total });

    // Simulate a successful order
    setOrderSuccess(true);
  };

  if (cartItems.length === 0) {
    return (
      <div className="section-container">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600">
            You need to add items to your cart before checking out.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="section-container">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} id="checkout-form">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Shipping Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="note"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Note
                    </label>
                    <input
                      type="text"
                      id="note"
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Current Address
                    </label>
                    <select
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    >
                      <option value="">-- Select Address --</option>
                      <option value="Phnom Penh">Phnom Penh</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="paymentType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Payment Type
                    </label>
                    <select
                      id="paymentType"
                      name="paymentType"
                      value={formData.paymentType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    >
                      <option value="">-- Select Payment --</option>
                      <option value="cod">Cash on Delivery</option>
                      <option value="qr">QR Code</option>
                    </select>
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
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Order Summary
            </h2>
            <div className="flow-root">
              <ul className="-my-4 divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-4 flex">
                    <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Qty {item.quantity}
                      </p>
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
              <button
                type="submit"
                form="checkout-form"
                className="w-full btn-primary"
              >
                Place Order
              </button>
            </div>
          </div>

          {orderSuccess && (
            <div className="fixed inset-0 bg-amber-300 bg-opacity-50- flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center w-full max-w-md">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                  Order Success!
                </h2>
                <p className="text-gray-700 mb-6">
                  Your order has been placed successfully. Thank you for
                  shopping with us!
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
