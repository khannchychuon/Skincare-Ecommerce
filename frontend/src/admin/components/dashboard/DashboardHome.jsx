"use client"

import { useState, useEffect } from "react"
import { Bell, Package, ShoppingCart, Users } from "lucide-react"
import StatCard from "../common/StatCard"
import { mockOrders, mockUsers, mockProducts } from "../../data/mockData"

export default function DashboardHome() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalUsers: 0,
    totalProducts: 0,
    lowStockAlerts: 0,
  })

  useEffect(() => {
    // In a real app, this would be an API call
    setStats({
      totalOrders: mockOrders.length,
      totalUsers: mockUsers.length,
      totalProducts: mockProducts.length,
      lowStockAlerts: mockProducts.filter((p) => p.stock < 10).length,
    })
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Orders"
          value={stats.totalOrders}
          icon={<ShoppingCart className="w-6 h-6 text-indigo-600" />}
          change="+12.5%"
          trend="up"
        />
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<Users className="w-6 h-6 text-green-600" />}
          change="+8.2%"
          trend="up"
        />
        <StatCard
          title="Total Products"
          value={stats.totalProducts}
          icon={<Package className="w-6 h-6 text-blue-600" />}
          change="+5.1%"
          trend="up"
        />
        <StatCard
          title="Low Stock Alerts"
          value={stats.lowStockAlerts}
          icon={<Bell className="w-6 h-6 text-red-600" />}
          change="+2"
          trend="up"
          alert={true}
        />
      </div>

      {/* Recent Orders */}
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockOrders.slice(0, 5).map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{`#${order.id}`}</td>
                  <td className="px-4 py-3 text-sm">{order.customer}</td>
                  <td className="px-4 py-3 text-sm">{order.date}</td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">${order.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
