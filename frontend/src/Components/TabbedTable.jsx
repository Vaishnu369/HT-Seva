// components/TabbedTable.jsx
import React, { useState, useEffect } from "react";

function TabbedTable() {
  const [activeTab, setActiveTab] = useState("registrations");
  const [rows, setRows] = useState([]);

  // Map tabs to API endpoints
  const urls = {
    registrations: "http://127.0.0.1:8000/api/kpi/registrations/",
    events: "http://127.0.0.1:8000/api/kpi/events/",
    users: "http://127.0.0.1:8000/api/kpi/users/",
    revenue: "http://127.0.0.1:8000/api/kpi/payments/",
  };

  useEffect(() => {
    if (urls[activeTab]) {
      fetch(urls[activeTab])
        .then((res) => res.json())
        .then((data) => {
          // Ensure single-row responses are converted to array
          setRows(Array.isArray(data) ? data : [data]);
        })
        .catch((err) => console.error("Error fetching table data:", err));
    }
  }, [activeTab]);

  return (
    <div className="tabs">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          onClick={() => setActiveTab("registrations")}
          className={activeTab === "registrations" ? "active" : ""}
        >
          Registrations
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={activeTab === "events" ? "active" : ""}
        >
          Events
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={activeTab === "users" ? "active" : ""}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab("revenue")}
          className={activeTab === "revenue" ? "active" : ""}
        >
          Revenue
        </button>
      </div>

      {/* Table */}
      <div className="table-card">
        {rows.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                {Object.keys(rows[0]).map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td key={j}>{val}</td>
                  ))}
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default TabbedTable;
