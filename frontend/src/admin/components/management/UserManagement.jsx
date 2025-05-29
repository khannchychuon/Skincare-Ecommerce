"use client"

import { useState, useEffect } from "react"
import SearchBar from "../common/SearchBar"
import Pagination from "../common/Pagination"
import { mockUsers } from "../../data/mockData"

export default function UserManagement({ setSelectedItem, setShowModal, setModalType }) {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // In a real app, this would be an API call
    setUsers(mockUsers)
  }, [])

  const handleViewUser = (user) => {
    setSelectedItem(user)
    setModalType("viewUser")
    setShowModal(true)
  }

  const handleBlockUser = (user) => {
    setSelectedItem(user)
    setModalType("blockUser")
    setShowModal(true)
  }

  // Filter users by search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">User Management</h1>

      {/* Users Table */}
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="mb-4">
          <SearchBar
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Orders</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium">{user.name}</td>
                  <td className="px-4 py-3 text-sm">{user.email}</td>
                  <td className="px-4 py-3 text-sm">{user.phone}</td>
                  <td className="px-4 py-3 text-sm">{user.orders}</td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      <button onClick={() => handleViewUser(user)} className="p-1 text-blue-600 hover:text-blue-800">
                        View
                      </button>
                      <button onClick={() => handleBlockUser(user)} className="p-1 text-red-600 hover:text-red-800">
                        {user.status === "Active" ? "Block" : "Unblock"}
                      </button>
                    </div>
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
          totalItems={filteredUsers.length}
          itemName="users"
        />
      </div>
    </div>
  )
}
