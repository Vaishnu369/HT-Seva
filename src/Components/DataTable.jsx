function DataTable({ data }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Members</th>
          <th>Gender</th>
          <th>Event Title</th>
          <th>Mode</th>
          <th>Event Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row.name}</td>
            <td>{row.gender}</td>
            <td>{row.event}</td>
            <td>{row.mode}</td>
            <td>{row.date}</td>
            <td><button>View</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
