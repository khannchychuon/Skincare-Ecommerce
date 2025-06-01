"use client";

import { useEffect, useState } from "react";
import { User, Phone, Package, Calendar, DollarSign } from "lucide-react";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    first_name: "",
    last_name: "",
    phone: "",
  });

  const [orderHistory, setOrderHistory] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Sync editForm with userProfile whenever userProfile changes
  useEffect(() => {
    setEditForm(userProfile);
  }, [userProfile]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No authentication token found");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const { first_name, last_name, phone } = data;
        setUserProfile({ first_name, last_name, phone });
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        setStatusMessage("Failed to load user profile.");
        setTimeout(() => setStatusMessage(""), 3000);
      }
    };

    const fetchOrderHistory = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/user/orders", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setOrderHistory(data.orders || []);
      } catch (error) {
        console.error("Failed to fetch order history:", error);
        setStatusMessage("Failed to load order history.");
        setTimeout(() => setStatusMessage(""), 3000);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchUserProfile(), fetchOrderHistory()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!editForm.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!editForm.last_name.trim())
      newErrors.last_name = "Last name is required";
    if (!editForm.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[1-9][\d\s-]{0,15}$/.test(editForm.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setStatusMessage("Authentication required.");
      setTimeout(() => setStatusMessage(""), 3000);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/update", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setUserProfile(editForm);
      setIsEditing(false);
      setErrors({});
      setStatusMessage("Profile updated successfully!");
      setTimeout(() => setStatusMessage(""), 3000);
    } catch (error) {
      console.error("Failed to update user profile:", error);
      setStatusMessage("Failed to update profile. Please try again.");
      setTimeout(() => setStatusMessage(""), 3000);
    }
  };

  const handleCancel = () => {
    setEditForm(userProfile);
    setIsEditing(false);
    setErrors({});
    setStatusMessage("");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      console.error("Invalid date:", dateString);
      return "Invalid date";
    }
  };

  const formatPrice = (price) => {
    if (price == null || isNaN(price)) return "$0.00";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <User className="mr-3 h-6 w-6 text-blue-600" />
              User Profile
            </h1>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Edit Profile
              </button>
            )}
          </div>

          {statusMessage && (
            <div
              className={`p-3 rounded-md mb-4 ${
                statusMessage.includes("successfully") ||
                statusMessage.includes("Success")
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-red-100 text-red-700 border border-red-200"
              }`}
            >
              <p className="text-sm">{statusMessage}</p>
            </div>
          )}

          {isEditing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={editForm.first_name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, first_name: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.first_name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter first name"
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.first_name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={editForm.last_name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, last_name: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.last_name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter last name"
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.last_name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(e) =>
                    setEditForm({ ...editForm, phone: e.target.value })
                  }
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {userProfile.first_name || "Not set"}{" "}
                    {userProfile.last_name || ""}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {userProfile.phone || "Not set"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Order History Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Package className="mr-3 h-6 w-6 text-purple-600" />
            Order History
          </h2>

          {orderHistory.length === 0 ? (
            <div className="text-center py-8">
              <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">No orders found</p>
              <p className="text-gray-400 text-sm mt-2">
                Your order history will appear here once you make a purchase.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {orderHistory.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      <img
                        src={
                          item.product_image ||
                          "/placeholder.svg?height=64&width=64"
                        }
                        alt={item.product_name || "Product image"}
                        className="w-16 h-16 object-cover rounded-md border border-gray-200"
                        onError={(e) => {
                          e.target.src = "/placeholder.svg?height=64&width=64";
                        }}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.product_name || "Unknown Product"}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Package className="h-4 w-4 mr-1" />
                            Order #{item.order_id || "N/A"}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(item.created_at)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:flex-col md:items-end md:justify-center space-y-2">
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900 flex items-center">
                          <DollarSign className="h-4 w-4" />
                          {formatPrice(item.price)}
                        </p>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity || 1}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-purple-600">
                          Total:{" "}
                          {formatPrice(
                            (item.price || 0) * (item.quantity || 1)
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
