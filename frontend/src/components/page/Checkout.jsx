"use client";

import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();
  const backendBaseUrl = "http://127.0.0.1:8000";

  const [formData, setFormData] = useState({
    note: "",
    address: "",
    paymentType: "",
  });

  const [orderSuccess, setOrderSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/images/placeholder-product.png";
    if (imagePath.startsWith("http")) return imagePath;
    return `${backendBaseUrl}/${imagePath}`;
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken")?.trim() || null;
    console.log("Token from localStorage:", savedToken);
    if (savedToken) {
      setToken(savedToken);
    } else {
      setToken(null);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("You must be logged in to place an order.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${backendBaseUrl}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({
          note: formData.note,
          address: formData.address,
          payment_type: formData.paymentType,
          items: cartItems.map((item) => ({
            product_id: item.id,
            name: item.name,
            image: item.image ?? "",
            price: item.price,
            quantity: item.quantity,
          })),
          total: total,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to place order");
      }

      const data = await response.json();
      console.log("Order successful:", data);
      setOrderSuccess(true);
    } catch (error) {
      console.error("Order error:", error);
      alert(`Failed to place order: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      <div className="grid md:grid-cols-3 gap-8">
        {/* FORM */}
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
                      placeholder="ទីតាំង,ក្រុមហ៊ុនដឹកជញ្ញូន......"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                      required
                    />
                  </div>

                  <div className="w-full flex flex-col sm:flex-row gap-4">
                    {/* Address Field */}
                    <div className="flex-1">
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
                        <option value="Province">Province</option>
                      </select>
                    </div>

                    {/* Payment Type Field */}
                    <div className="flex-1">
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
            </div>

            {/* MOBILE BUTTON */}
            <div className="mt-8 md:hidden">
              <button
                type="submit"
                className="w-full btn-primary"
                disabled={loading}
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </form>
        </div>

        {/* ORDER SUMMARY */}
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

            {/* DESKTOP BUTTON */}
            <div className="mt-6 hidden md:block">
              <button
                type="submit"
                form="checkout-form"
                className="w-full btn-primary"
                disabled={loading}
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </div>

          {/* ORDER SUCCESS POPUP */}
          {orderSuccess && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm  flex items-center justify-center z-50">
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
