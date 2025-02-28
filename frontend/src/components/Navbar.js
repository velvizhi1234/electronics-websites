import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span role="img" aria-label="electronics">
          ⚡
        </span>{" "}
        TechVerse
      </Link>
      <div className="navbar-links">
        <Link to="/products">
          <span role="img" aria-label="products">
            💻
          </span>{" "}
          Products
        </Link>
        <Link to="/cart">
          <span role="img" aria-label="cart">
            🛒
          </span>{" "}
          Cart
        </Link>
        <Link to="/order-history">
          <span role="img" aria-label="orders">
            📦
          </span>{" "}
          Orders
        </Link>
        {user ? (
          <>
            <button onClick={logout}>
              <span role="img" aria-label="logout">
                🚪
              </span>{" "}
              Logout
            </button>
            <span>{user.email}</span>
            {user.isAdmin && (
              <Link to="/admin">
                <span role="img" aria-label="admin">
                  🛠️
                </span>{" "}
                Admin
              </Link>
            )}
            {user.isVendor && (
              <Link to="/vendor">
                <span role="img" aria-label="vendor">
                  🤝
                </span>{" "}
                Vendor
              </Link>
            )}
          </>
        ) : (
          <>
            <Link to="/login">
              <span role="img" aria-label="login">
                🔑
              </span>{" "}
              Login
            </Link>
            <Link to="/register">
              <span role="img" aria-label="register">
                📝
              </span>{" "}
              Register
            </Link>
          </>
        )}
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;