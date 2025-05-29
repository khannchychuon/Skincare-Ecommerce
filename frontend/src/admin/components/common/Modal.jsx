"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Modal({ type, item, onClose }) {
  const [formData, setFormData] = useState(item || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call
    console.log(`${type} action performed:`, formData);
    alert(`${type} completed successfully!`);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const renderModalContent = () => {
    switch (type) {
      case "addProduct":
      case "editProduct":
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {type === "addProduct" ? "Add New Product" : "Edit Product"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
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
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
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
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Audio">Audio</option>
                  <option value="Wearables">Wearables</option>
                  <option value="Home Appliances">Home Appliances</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
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
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
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
                  <p className="text-sm text-gray-900">{item?.customer}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Email:
                  </span>
                  <p className="text-sm text-gray-900">{item?.email}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Date:
                  </span>
                  <p className="text-sm text-gray-900">{item?.date}</p>
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
                      <span className="text-sm">
                        {orderItem.name} x {orderItem.quantity}
                      </span>
                      <span className="text-sm font-medium">
                        ${orderItem.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">
                    Total:
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    ${item?.total?.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
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
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
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
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
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
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    Name:
                  </span>
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
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        );

      case "blockUser":
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {item?.status === "Active" ? "Block User" : "Unblock User"}
            </h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to{" "}
              {item?.status === "Active" ? "block" : "unblock"} user "
              {item?.name}"?
            </p>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
                  item?.status === "Active"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {item?.status === "Active" ? "Block User" : "Unblock User"}
              </button>
            </div>
          </div>
        );

      case "approveReview":
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Approve Review
            </h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to approve this review for "{item?.product}
              "?
            </p>
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-900">"{item?.comment}"</p>
              <p className="text-xs text-gray-500 mt-1">- {item?.user}</p>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Approve Review
              </button>
            </div>
          </div>
        );

      case "rejectReview":
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Reject Review
            </h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to reject this review for "{item?.product}"?
            </p>
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-900">"{item?.comment}"</p>
              <p className="text-xs text-gray-500 mt-1">- {item?.user}</p>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Reject Review
              </button>
            </div>
          </div>
        );

      default:
        return <div>Unknown modal type</div>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity  bg-opacity-75"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg sm:max-w-lg">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>

          {renderModalContent()}
        </div>
      </div>
    </div>
  );
}
