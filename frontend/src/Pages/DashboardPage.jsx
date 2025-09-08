import Sidebar from "../Components/Sidebar";
import KpiCard from "../Components/KpiCard";
import Tabs from "../Components/Tabs";

function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <h1>Welcome Admin! Here's your platform overview</h1>

        <div className="kpi-grid">
          <KpiCard label="Total Enrollment" value="387 Events" color="#3498db" icon="📊" />
          <KpiCard label="Enrolled Events" value="24 Active" color="#2ecc71" icon="📅" />
          <KpiCard label="Past Events" value="156 Completed" color="#e67e22" icon="✅" />
          <KpiCard label="Enrolled for Others" value="12 Family" color="#9b59b6" icon="👨‍👩‍👧" />
        </div>

        <Tabs />
      </main>
    </div>
  );
}

export default DashboardPage;
