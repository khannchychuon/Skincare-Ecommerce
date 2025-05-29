"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import SearchBar from "../common/SearchBar"
import Pagination from "../common/Pagination"
import { mockReviews } from "../../data/mockData"

export default function ReviewManagement({ setSelectedItem, setShowModal, setModalType }) {
  const [reviews, setReviews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const [filterStatus, setFilterStatus] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // In a real app, this would be an API call
    setReviews(mockReviews)
  }, [])

  const handleApproveReview = (review) => {
    setSelectedItem(review)
    setModalType("approveReview")
    setShowModal(true)
  }

  const handleRejectReview = (review) => {
    setSelectedItem(review)
    setModalType("rejectReview")
    setShowModal(true)
  }

  // Filter reviews by status and search term
  const filteredReviews = reviews.filter((review) => {
    const matchesStatus = filterStatus === "All" || review.status === filterStatus
    const matchesSearch =
      review.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.user.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredReviews.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Review Management</h1>

      {/* Reviews Table */}
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex flex-col mb-4 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <SearchBar
            placeholder="Search reviews..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="flex items-center space-x-4">
            <label htmlFor="status-filter" className="text-sm font-medium text-gray-700">
              Filter by Status:
            </label>
            <select
              id="status-filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Rating</th>
                <th className="px-4 py-3 text-left">Comment</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium">{review.product}</td>
                  <td className="px-4 py-3 text-sm">{review.user}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm max-w-xs truncate">{review.comment}</td>
                  <td className="px-4 py-3 text-sm">{review.date}</td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        review.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : review.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {review.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      {review.status === "Pending" && (
                        <>
                          <button
                            onClick={() => handleApproveReview(review)}
                            className="p-1 text-green-600 hover:text-green-800"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleRejectReview(review)}
                            className="p-1 text-red-600 hover:text-red-800"
                          >
                            Reject
                          </button>
                        </>
                      )}
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
          totalItems={filteredReviews.length}
          itemName="reviews"
        />
      </div>
    </div>
  )
}
