import React from "react";
import { Link } from "react-router-dom";
import "./AdminHome.css"; // Import your CSS stylesheet

export default function AdminHome() {
  return (
    <div className="admin-container">
      <h1>Admin Home Page</h1>
      <header>
        <nav>
          <ul className="admin-nav">
            <li>
              <Link to="/maintenance">Maintenance</Link>
            </li>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{/* Content for the AdminHome page */}</main>
    </div>
  );
}
