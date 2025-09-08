

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="profile-pic-wrapper">
          <span className="profile-icon">👤</span>
        </div>
        <h2 className="profile-title">Admin Dashboard</h2>
        <p className="profile-email">admin@happythoughts.com</p>

        <div className="profile-buttons">
          <button className="btn edit">Edit profile</button>
          <button className="btn view">View profile</button>
        </div>
      </div>

      <div className="guidelines">
        <h3>Admin Guidelines</h3>
        <ul>
          <li>Monitor user engagement and activity</li>
          <li>Ensure event quality and compliance</li>
          <li>Manage user registrations effectively</li>
          <li>Review and approve new events</li>
          <li>Maintain platform security standards</li>
        </ul>
        <a href="#" className="switch-link">Switch to User View</a>
      </div>
    </aside>
  );
}

export default Sidebar;
