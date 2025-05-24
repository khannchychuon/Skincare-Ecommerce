import { DashboardCards } from "../../app-components/dashboard-cards";
import { DashboardCharts } from "../../app-components/dashboard-charts";
import { DashboardHeader } from "../../app-components/dashboard-header";
import { RecentOrders } from "../../app-components/recent-orders";
import { TopProducts } from "../../app-components/top-products";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardCards />
      <div className="grid gap-6 md:grid-cols-2">
        <DashboardCharts />
        <div className="space-y-6">
          <RecentOrders />
          <TopProducts />
        </div>
      </div>
    </div>
  );
}
