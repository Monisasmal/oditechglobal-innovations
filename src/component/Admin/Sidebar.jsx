import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Admin Panel</h3>
      <nav>
        <Link to="/admin">Services</Link>
        <Link to="/">Back to Landing</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
