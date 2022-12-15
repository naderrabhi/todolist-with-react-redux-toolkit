import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
    <ul className="header--todo">
      <Link to="/listtask">
        <li>All</li>
      </Link>
      <Link to="/done">
        <li>Done</li>
      </Link>
      <Link to="/undone">
        <li>unDone</li>
      </Link>
    </ul>
  );
};

export default Header;
