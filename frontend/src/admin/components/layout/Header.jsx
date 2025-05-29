"use client";

import { Bell, Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const { user } = useAuth();

  return (
    <header className="flex items-center h-16 px-4 bg-white border-b">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-1 mr-4 rounded-md md:hidden hover:bg-gray-100"
      >
        <Menu size={20} />
      </button>

      <div className="flex items-center ml-auto space-x-4">
        <div className="relative">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <Bell size={20} />
          </button>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 overflow-hidden bg-gray-300 rounded-full">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Admin"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="hidden text-sm font-medium md:block">
            {user?.email}
          </span>
        </div>
      </div>
    </header>
  );
}
