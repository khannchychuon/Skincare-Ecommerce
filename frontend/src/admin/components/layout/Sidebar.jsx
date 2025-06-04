"use client";

import {
  Home,
  LogOut,
  Package,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Star,
  Users,
  X,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  currentPage,
  setCurrentPage,
}) {
  const { logout } = useAuth();

  const menuItems = [
    { id: "products", label: "Products", icon: <Package size={20} /> },
    { id: "orders", label: "Orders", icon: <ShoppingCart size={20} /> },
    { id: "users", label: "Users", icon: <Users size={20} /> },
    // { id: "reviews", label: "Reviews", icon: <Star size={20} /> },
    // { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out transform bg-white border-r md:translate-x-0 md:static md:inset-auto md:h-full`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className="flex items-center">
            <ShoppingBag className="w-6 h-6 text-indigo-600" />
            <span className="ml-2 text-lg font-semibold">Admin Panel</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-md md:hidden hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
                currentPage === item.id
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={logout}
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50"
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
