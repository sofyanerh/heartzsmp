import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className="app-shell">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="app-body">
        <Sidebar isCollapsed={isCollapsed} />

        <main className={`content ${isCollapsed ? "collapsed" : ""}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}