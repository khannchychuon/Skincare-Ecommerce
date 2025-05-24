"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Star, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "../context/CartContext"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const { addToCart } = useCart()

  useEffect(() => {
    const getProduct = async () => {
      try {
        // In a real implementation, this would fetch from your Laravel API
        // const data = await fetchProductById(id);

        // For now, we'll use mock data
        const mockProduct = {
          id: Number.parseInt(id),
          name: "Vitamin C Brightening Serum",
          category: "Serums",
          price: 39.99,
          image: "/placeholder.svg?height=600&width=600",
          description:
            "Our Vitamin C Brightening Serum is formulated with 15% pure vitamin C to brighten skin tone, reduce dark spots, and boost collagen production. This powerful antioxidant serum protects against environmental damage while improving skin texture and radiance.",
          ingredients: 
            "Water, Ascorbic Acid (Vitamin C), Glycerin, Propanediol, Hyaluronic Acid, Ferulic Acid, Vitamin E, Aloe Barbadensis Leaf Juice, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Limon (Lemon) Peel Oil, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.",
          how_to_use:
            "Apply 3-4 drops to clean, dry skin in the morning before moisturizer and sunscreen. Gently pat into skin and allow to absorb completely before applying additional products.",
          rating: 4.8,
          review_count: 124,
        }

        setProduct(mockProduct)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching product:", error)
        setLoading(false)
      }
    }

    getProduct()
  }, [id])

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        quantity,
      })
    }
  }

  if (loading) {
    return (
      <div className="section-container">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-pink-400 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">Loading product...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="section-container">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full rounded-lg shadow-md" />
          <div className="grid grid-cols-4 gap-2 mt-4">
            <img
              src={product.image || "/placeholder.svg"}
              alt={`${product.name} thumbnail`}
              className="rounded-md cursor-pointer border-2 border-pink-400"
            />
            <img
              src="/placeholder.svg?height=100&width=100"
              alt={`${product.name} thumbnail`}
              className="rounded-md cursor-pointer"
            />
            <img
              src="/placeholder.svg?height=100&width=100"
              alt={`${product.name} thumbnail`}
              className="rounded-md cursor-pointer"
            />
            <img
              src="/placeholder.svg?height=100&width=100"
              alt={`${product.name} thumbnail`}
              className="rounded-md cursor-pointer"
            />
          </div>
        </div>

        <div>
          <div className="mb-2 text-sm text-gray-500">{product.category}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.review_count} reviews)
            </span>
          </div>

          <div className="text-2xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="mr-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button onClick={decreaseQuantity} className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 text-gray-900">{quantity}</span>
                  <button onClick={increaseQuantity} className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            <button onClick={handleAddToCart} className="w-full btn-primary flex items-center justify-center">
              <ShoppingBag size={18} className="mr-2" />
              Add to Cart
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex border-b border-gray-200">
              <button
                className={`pb-2 px-4 text-sm font-medium ${
                  activeTab === "description"
                    ? "text-pink-400 border-b-2 border-pink-400"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`pb-2 px-4 text-sm font-medium ${
                  activeTab === "ingredients"
                    ? "text-pink-400 border-b-2 border-pink-400"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </button>
              <button
                className={`pb-2 px-4 text-sm font-medium ${
                  activeTab === "how_to_use"
                    ? "text-pink-400 border-b-2 border-pink-400"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("how_to_use")}
              >
                How to Use
              </button>
            </div>

            <div className="py-4">
              {activeTab === "description" && <p className="text-gray-600">{product.description}</p>}

              {activeTab === "ingredients" && <p className="text-gray-600">{product.ingredients}</p>}

              {activeTab === "how_to_use" && <p className="text-gray-600">{product.how_to_use}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
