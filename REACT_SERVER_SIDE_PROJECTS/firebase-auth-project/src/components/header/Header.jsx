import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/login">Login</Link> */}
      <Link to="/register">Register</Link>
      <Link>
        {user ? (
          <>
            {user.email} <Link onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </Link>
    </nav>
  );
};

export default Header;
