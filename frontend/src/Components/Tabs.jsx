import { useState } from "react";
import DataTable from "./DataTable";

function Tabs() {
  const [active, setActive] = useState("enrolled");

  const enrolledMembers = [
    { name: "John Doe", gender: "Male", event: "React Workshop", mode: "Online", date: "2024-01-25" },
    { name: "Sarah Wilson", gender: "Female", event: "Design Thinking", mode: "In-person", date: "2024-01-28" },
  ];

  const pastMembers = [
    { name: "Mike Johnson", gender: "Male", event: "Data Science", mode: "Online", date: "2024-02-02" },
  ];

  const othersMembers = [
    { name: "Emma Davis", gender: "Female", event: "UI/UX Bootcamp", mode: "Online", date: "2024-03-10" },
  ];

  const getData = () => {
    if (active === "enrolled") return enrolledMembers;
    if (active === "past") return pastMembers;
    if (active === "others") return othersMembers;
    return [];
  };

  return (
    <div className="tabs">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button onClick={() => setActive("enrolled")} className={active === "enrolled" ? "active" : ""}>
          Enrolled Events
        </button>
        <button onClick={() => setActive("past")} className={active === "past" ? "active" : ""}>
          Past Events
        </button>
        <button onClick={() => setActive("others")} className={active === "others" ? "active" : ""}>
          Enrolled for Others
        </button>
      </div>

      {/* Card-styled Table */}
      <div className="tab-content">
        <div className="table-card">
          <DataTable data={getData()} />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
