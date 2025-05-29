"use client";

import { useState } from "react";
import { AuthProvider, useAuth } from "./admin/context/AuthContext";
import LoginPage from "./admin/components/auth/LoginPage";
import Sidebar from "./admin/components/layout/Sidebar";
import Header from "./admin/components/layout/Header";
import DashboardHome from "./admin/components/dashboard/DashboardHome";
import ProductManagement from "./admin/components/management/ProductManagement";
import OrderManagement from "./admin/components/management/OrderManagement";
import UserManagement from "./admin/components/management/UserManagement";
import ReviewManagement from "./admin/components/management/ReviewManagement";
import SettingsPage from "./admin/components/setting/SettingsPage";
import Modal from "./admin/components/common/Modal";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {!isAuthenticated ? (
        <LoginPage />
      ) : (
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

          {/* Main Content */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
              {currentPage === "dashboard" && <DashboardHome />}
              {currentPage === "products" && (
                <ProductManagement
                  setSelectedItem={setSelectedItem}
                  setShowModal={setShowModal}
                  setModalType={setModalType}
                />
              )}
              {currentPage === "orders" && (
                <OrderManagement
                  setSelectedItem={setSelectedItem}
                  setShowModal={setShowModal}
                  setModalType={setModalType}
                />
              )}
              {currentPage === "users" && (
                <UserManagement
                  setSelectedItem={setSelectedItem}
                  setShowModal={setShowModal}
                  setModalType={setModalType}
                />
              )}
              {currentPage === "reviews" && (
                <ReviewManagement
                  setSelectedItem={setSelectedItem}
                  setShowModal={setShowModal}
                  setModalType={setModalType}
                />
              )}
              {currentPage === "settings" && <SettingsPage />}
            </main>
          </div>

          {/* Modals */}
          {showModal && (
            <Modal
              type={modalType}
              item={selectedItem}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}

function Admin() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default Admin;
