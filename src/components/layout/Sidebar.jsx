import { NavLink } from "react-router-dom";
import { sidebarItems } from "../../data/sidebarItems.js";

export default function Sidebar({ isCollapsed }) {
  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>

      {sidebarItems.map((group, index) => (
        <div key={index} className="sidebar-group">

          {/* SECTION TITLE */}
          {!isCollapsed && (
            <div className="sidebar-section-title">
              {group.section}
            </div>
          )}

          {/* ITEMS */}
          <div className="sidebar-items">
            {group.items.map((item, i) => {

                // NORMAL LINK
                if (!item.children) {
                    return (
                    <NavLink
                        key={i}
                        to={item.path}
                        className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="icon">{item.icon}</span>

                        {!isCollapsed && (
                        <span className="label">{item.label}</span>
                        )}
                    </NavLink>
                    );
                }

                // PARENT (About Server)
                return (
                    <div key={i} className="sidebar-parent">

                    <div className="sidebar-item parent">
                        <span className="icon">{item.icon}</span>

                        {!isCollapsed && (
                        <span className="label">{item.label}</span>
                        )}
                    </div>

                    {/* CHILDREN */}
                    {!isCollapsed && (
                        <div className="sidebar-children">
                        {item.children.map((child, j) => (
                            <NavLink
                            key={j}
                            to={child.path}
                            className={({ isActive }) =>
                                `sidebar-child ${isActive ? "active" : ""}`
                            }
                            >
                            {child.label}
                            </NavLink>
                        ))}
                        </div>
                    )}

                    </div>
                );
                })}
          </div>

        </div>
      ))}

    </aside>
  );
}