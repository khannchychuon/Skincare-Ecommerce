"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const token = localStorage.getItem("adminToken");

  //   if (!token) {
  //     console.error("No admin token found in localStorage.");
  //     setLoading(false);
  //     return;
  //   }

  //   axios
  //     .get("http://127.0.0.1:8000/api/admin/profile", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setFormData({
  //         name: res.data?.name || "",
  //         phone: res.data?.phone || "",
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(
  //         "Profile fetch failed:",
  //         err.response?.data || err.message
  //       );
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("adminToken");

  //   if (!token) {
  //     alert("No token found. Please log in again.");
  //     return;
  //   }

  //   try {
  //     await axios.post(
  //       "http://127.0.0.1:8000/api/admin/profile-update",
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     alert("Profile updated successfully!");
  //   } catch (err) {
  //     console.error("Profile update error:", err.response?.data || err.message);
  //     alert("Failed to update profile.");
  //   }
  // };

  // if (loading) {
  //   return <div className="p-4">Loading profile...</div>;
  // }

  // return (
  //   <div className="space-y-6">
  //     <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

  //     <div className="p-6 bg-white rounded-lg shadow">
  //       <h2 className="text-lg font-medium text-gray-900">Admin Profile</h2>
  //       <div className="mt-4 space-y-6">
  //         <div className="flex items-center space-x-4">
  //           <div className="w-16 h-16 overflow-hidden bg-gray-300 rounded-full">
  //             <img
  //               src="/placeholder.svg?height=64&width=64"
  //               alt="Admin"
  //               className="object-cover w-full h-full"
  //             />
  //           </div>
  //           <button className="px-3 py-1 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50">
  //             Change Avatar
  //           </button>
  //         </div>

  //         <form className="space-y-6" onSubmit={handleSubmit}>
  //           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  //             <div>
  //               <label
  //                 htmlFor="name"
  //                 className="block text-sm font-medium text-gray-700"
  //               >
  //                 Name
  //               </label>
  //               <input
  //                 type="text"
  //                 id="name"
  //                 name="name"
  //                 value={formData.name}
  //                 onChange={handleChange}
  //                 className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  //                 required
  //               />
  //             </div>

  //             <div>
  //               <label
  //                 htmlFor="phone"
  //                 className="block text-sm font-medium text-gray-700"
  //               >
  //                 Phone Number
  //               </label>
  //               <input
  //                 type="text"
  //                 id="phone"
  //                 name="phone"
  //                 value={formData.phone}
  //                 onChange={handleChange}
  //                 className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  //                 required
  //               />
  //             </div>
  //           </div>

  //           <div className="flex justify-end">
  //             <button
  //               type="submit"
  //               className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  //             >
  //               Update Profile
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
}
