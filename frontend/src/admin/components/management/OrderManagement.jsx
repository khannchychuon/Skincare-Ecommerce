"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../common/SearchBar";
import Pagination from "../common/Pagination";
import { useAuth } from "../../context/AuthContext"; // Make sure path is correct

export default function OrderManagement({
  setSelectedItem,
  setShowModal,
  setModalType,
}) {
  const token = localStorage.getItem("adminToken");
  console.log("Token:", token);

  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [updatingOrderId, setUpdatingOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const response = await axios.get(
          "http://192.168.0.105:8000/api/admin/orders",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const orderList = response.data.orders || response.data || [];
        const transformed = orderList.map((order) => ({
          id: order.id,
          customer: `${order.user?.first_name || "Unknown"} ${
            order.user?.last_name || ""
          }`,
          date: new Date(order.created_at).toLocaleDateString(),
          status: order.status || "Pending",
          total: parseFloat(order.total || 0),
          raw: order,
        }));

        setOrders(transformed);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    if (isAuthenticated) fetchOrders();
  }, [isAuthenticated]);

  // Handle status update
  const handleStatusChange = async (orderId, newStatus) => {
    setUpdatingOrderId(orderId);
    try {
      const token = localStorage.getItem("adminToken");
      await axios.put(
        `http://192.168.0.105:8000/api/admin/orders/${orderId}/status`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update local state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("Failed to update order status.");
    } finally {
      setUpdatingOrderId(null);
    }
  };

  const handleViewOrder = (order) => {
    setSelectedItem(order.raw);
    setModalType("viewOrder");
    setShowModal(true);
  };

  // Filter & search
  const filteredOrders = orders.filter((order) => {
    const matchesStatus =
      filterStatus === "All" || order.status === filterStatus;
    const matchesSearch = order.customer
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>

      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex flex-col mb-4 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <SearchBar
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex items-center space-x-4">
            <label
              htmlFor="status-filter"
              className="text-sm font-medium text-gray-700"
            >
              Filter by Status:
            </label>
            <select
              id="status-filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-md"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Customer</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Total</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{`#${order.id}`}</td>
                  <td className="px-4 py-3 text-sm">{order.customer}</td>
                  <td className="px-4 py-3 text-sm">{order.date}</td>
                  <td className="px-4 py-3 text-sm">
                    <select
                      disabled={updatingOrderId === order.id}
                      className={`px-2 py-1 text-xs font-semibold rounded-full border ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800 border-green-400"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-800 border-blue-400"
                          : "bg-yellow-100 text-yellow-800 border-yellow-400"
                      }`}
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      onClick={() => handleViewOrder(order)}
                      className="p-1 text-blue-600 hover:text-blue-800"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredOrders.length}
          itemName="orders"
        />
      </div>
    </div>
  );
}
