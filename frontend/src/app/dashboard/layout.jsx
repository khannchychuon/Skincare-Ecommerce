import { AdminSidebar } from "../../app-components/admin-sidebar";
import { AdminHeader } from "../../app-components/admin-header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto bg-muted/40 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
