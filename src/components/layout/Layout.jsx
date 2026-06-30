import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Snowfall from "react-snowfall";

export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className="app-shell">
        <Snowfall
            snowflakeCount={80}
            speed={[0.5, 1.2]}
            wind={[-0.5, 0.5]}
            color="#e7e2dd"
        />
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