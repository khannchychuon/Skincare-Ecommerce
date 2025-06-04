"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Modal({ type, item, onClose, setRefreshTrigger }) {
  const [formData, setFormData] = useState(item || {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    try {
      let method = "POST";
      let url = "http://127.0.0.1:8000/api/admin/products";

      if (type === "editProduct" && item?.id) {
        method = "PUT";
        url = `http://127.0.0.1:8000/api/admin/products/${item.id}`;
      }

      if (type === "deleteProduct" && item?.id) {
        method = "DELETE";
        url = `http://127.0.0.1:8000/api/admin/products/${item.id}`;
      }

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: method !== "DELETE" ? JSON.stringify(formData) : null,
      });

      const result = await res.json();

      if (res.ok) {
        alert(result.message || "Action completed successfully");
        if (setRefreshTrigger) setRefreshTrigger((prev) => prev + 1);
        onClose();
      } else {
        console.error(result);
        alert("Failed to complete the action");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: inputType === "checkbox" ? checked : value,
    }));
  };
  const renderModalContent = () => {
    switch (type) {
      case "addProduct":
      case "editProduct":
        return (
          <div className="space-y-4 max-h-[80vh] overflow-y-auto p-2">
            <h2 className="text-lg font-semibold text-gray-900">
              {type === "addProduct" ? "Add New Product" : "Edit Product"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Brand */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand || ""}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category || ""}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                >
                  <option value="Serum">Serum</option>
                  <option value="Moisturizer">Moisturizer</option>
                  <option value="Sunscreens">Sunscreens</option>
                  <option value="Mask">Mask</option>
                  <option value="Toner">Toner</option>
                  <option value="Exfoliator">Exfoliator</option>
                  <option value="Haircare">Haircare</option>
                  <option value="Lotion">Lotion</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Bodycare">Bodycare</option>
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <input
                  type="text"
                  name="type"
                  value={formData.type || ""}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Ingredients */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Ingredients
                </label>
                <textarea
                  name="ingredients"
                  value={formData.ingredients || ""}
                  onChange={handleChange}
                  rows={2}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* How to Use */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  How to Use
                </label>
                <textarea
                  name="how_to_use"
                  value={formData.how_to_use || ""}
                  onChange={handleChange}
                  rows={2}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Price & Stock */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price || ""}
                    onChange={handleChange}
                    step="0.01"
                    required
                    className="mt-1 block w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock || ""}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>

              {/* Rating & Review Count */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating || ""}
                    onChange={handleChange}
                    step="0.1"
                    className="mt-1 block w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Review Count
                  </label>
                  <input
                    type="number"
                    name="review_count"
                    value={formData.review_count || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>

              {/* Images */}
              {["image", "image_2", "image_3", "image_4"].map((imgField, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-gray-700">
                    {imgField.replace("_", " ").toUpperCase()}
                  </label>
                  <input
                    type="text"
                    name={imgField}
                    value={formData[imgField] || ""}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="mt-1 block w-full border rounded-md px-3 py-2"
                  />
                </div>
              ))}

              {/* Buttons */}
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  {type === "addProduct" ? "Add Product" : "Update Product"}
                </button>
              </div>
            </form>
          </div>
        );

      case "deleteProduct":
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Delete Product
            </h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete "{item?.name}"? This action cannot
              be undone.
            </p>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        );

      case "viewOrder":
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Order Details
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Order ID:
                  </span>
                  <p className="text-sm text-gray-900">#{item?.id}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Customer:
                  </span>
                  <p className="text-sm text-gray-900">
                    {item?.user.first_name} {item?.user.last_name}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Phone:
                  </span>
                  <p className="text-sm text-gray-900">{item?.user.phone}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Date:
                  </span>
                  <p className="text-sm text-gray-900">{item?.created_at}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Note:
                  </span>
                  <p className="text-sm text-gray-900">{item?.note}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Address:
                  </span>
                  <p className="text-sm text-gray-900">{item?.address}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Payment:
                  </span>
                  <p className="text-sm text-gray-900 capitalize">
                    {item?.payment_type}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-gray-700">
                  Items:
                </span>
                <div className="mt-2 space-y-2">
                  {item?.items?.map((orderItem, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm ">
                        {orderItem.product_name} x {orderItem.quantity}
                      </span>
                      <span className="text-sm font-medium">
                        ${parseFloat(orderItem.price).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Subtotal:
                  </span>
                  <p className="text-sm text-gray-900">
                    ${parseFloat(item?.subtotal || 0).toFixed(2)}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Shipping:
                  </span>
                  <p className="text-sm text-gray-900">
                    ${parseFloat(item?.shipping || 0).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">
                    Total:
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    ${parseFloat(item?.total || 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        );

      case "updateOrderStatus":
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Update Order Status
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status || item?.status || ""}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Update Status
                </button>
              </div>
            </form>
          </div>
        );

      case "viewUser":
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              User Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-700">Name:</span>
                <p className="text-sm text-gray-900">{item?.name}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Email:
                </span>
                <p className="text-sm text-gray-900">{item?.email}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Phone:
                </span>
                <p className="text-sm text-gray-900">{item?.phone}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Total Orders:
                </span>
                <p className="text-sm text-gray-900">{item?.orders}</p>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        );

      case "blockUser":
        const isBlocking = item?.status === "Active";
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {isBlocking ? "Block User" : "Unblock User"}
            </h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to {isBlocking ? "block" : "unblock"} user "
              {item?.name}"?
            </p>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className={`px-4 py-2 text-sm text-white rounded-md ${
                  isBlocking
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {isBlocking ? "Block" : "Unblock"}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm bg-opacity-25">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        {renderModalContent()}
      </div>
    </div>
  );
}
