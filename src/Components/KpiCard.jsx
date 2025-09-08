function KpiCard({ label, value, color, icon }) {
  return (
    <div
      className="kpi-card"
      style={{
        backgroundColor: `${color}15`, 
        color: color, 
        borderRadius: "12px",
        padding: "20px",
        textAlign: "center",
        flex: 1,
        boxShadow: "0 12px 12px rgba(0,0,0,0.09)",
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{icon}</div>
      <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600" }}>{value}</h3>
      <p style={{ margin: "5px 0 0", fontSize: "0.9rem", fontWeight: "500" }}>
        {label}
      </p>
    </div>
  );
}

export default KpiCard;
