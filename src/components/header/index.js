import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <ul className="nav-links">
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Header;
