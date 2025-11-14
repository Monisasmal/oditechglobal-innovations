import React from "react";
import Sidebar from "../component/Admin/Sidebar";
import ServiceManager from "../component/Admin/ServiceManager";
import MessageViewer from '../component/Admin/MessageViewer'

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="content-area">
        <h1>Admin Dashboard</h1>
        <ServiceManager />
        <MessageViewer />
      </div>
    </div>
  );
}

export default AdminDashboard;
