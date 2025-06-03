"use client";

import { useState, useEffect } from "react";
import SearchBar from "../common/SearchBar";
import Pagination from "../common/Pagination";
import { useAuth } from "../../context/AuthContext";

export default function ProductManagement({
  setSelectedItem,
  setShowModal,
  setModalType,
}) {
  const { user } = useAuth(); // Optional for role check
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("adminToken");

      try {
        const res = await fetch("http://127.0.0.1:8000/api/admin/products", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        const data = await res.json();

        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Unexpected API format:", data);
          setProducts([]);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    setSelectedItem(null);
    setModalType("addProduct");
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setSelectedItem(product);
    setModalType("editProduct");
    setShowModal(true);
  };

  const handleDeleteProduct = (product) => {
    setSelectedItem(product);
    setModalType("deleteProduct");
    setShowModal(true);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
        <button
          onClick={handleAddProduct}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Add Product
        </button>
      </div>

      <div className="p-6 bg-white rounded-lg shadow">
        <div className="mb-4">
          <SearchBar
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={`http://localhost:8000/${product.image}`}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">
                    {product.name}
                  </td>
                  <td className="px-4 py-3 text-sm">{product.category}</td>
                  <td className="px-4 py-3 text-sm">
                    ${parseFloat(product.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        product.stock > 20
                          ? "bg-green-100 text-green-800"
                          : product.stock > 10
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="p-1 text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product)}
                        className="p-1 text-red-600 hover:text-red-800"
                      >
                        Delete
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
          totalItems={filteredProducts.length}
          itemName="products"
        />
      </div>
    </div>
  );
}
