"use client"
import { Link } from "react-router-dom"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "../context/CartContext"

const Cart = () => {
  const { cartItems, updateCartItemQuantity, removeFromCart } = useCart()

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center py-16">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="section-container">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link to={`/products/${item.id}`} className="hover:text-pink-400">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => updateCartItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 py-1 text-gray-900">{item.quantity}</span>
                            <button
                              onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="flow-root">
              <div className="border-t border-gray-200 py-4">
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
            </div>
            <Link to="/checkout" className="w-full btn-primary mt-6 flex items-center justify-center">
              Proceed to Checkout
            </Link>
            <div className="mt-6 text-center">
              <Link to="/products" className="text-sm text-pink-400 hover:text-pink-500">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
