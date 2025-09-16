import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import KpiCard from "../Components/KpiCard";
import TabbedTable from "../Components/TabbedTable";

function DashboardPage() {
  const [kpi, setKpi] = useState(null);

  // Fetch KPI summary (main dashboard stats)
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/kpi/")
      .then((res) => res.json())
      .then((data) => setKpi(data))
      .catch((err) => console.error("Error fetching KPI:", err));
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <h1>Welcome Admin! Here's your platform overview</h1>

        {/* KPI Summary */}
        <div className="kpi-grid">
          {kpi ? (
            <>
              <KpiCard label="Total Registrations" value={kpi.total_registrations} color="#3498db" icon="📊" />
              <KpiCard label="Total Users" value={kpi.total_users} color="#2ecc71" icon="👥" />
              <KpiCard label="Total Payments" value={kpi.total_payments} color="#e67e22" icon="💰" />
              <KpiCard label="Total Events" value={kpi.total_events} color="#9b59b6" icon="🎉" />
            </>
          ) : (
            <p>Loading stats...</p>
          )}
        </div>

        {/* Tabbed Table */}
        <TabbedTable />
      </main>
    </div>
  );
}

export default DashboardPage;
