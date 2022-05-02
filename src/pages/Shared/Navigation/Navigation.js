import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark custom">
      <div className="container-fluid menu-clr fs-5">
        <span className=" fw-bolder text-info ">FASTZone</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <Link to="/home" className="nav-item nav-link active text-info">
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="nav-item nav-link text-info">
                Explore
              </Link>
            </li>
            {user?.email && (
              <li>
                <Link to="/dashboard" className="nav-item nav-link  text-info">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex-lg">
            {user?.email && (
              <span className="my-auto me-2 text-light">
                Hi! {user.displayName}
              </span>
            )}
            {user?.email ? (
              <Link
                className="text-info text-decoration-none text-bold"
                onClick={logout}
                to="/home"
              >
                Log Out
              </Link>
            ) : (
              <Link
              className="text-info text-decoration-none text-bold"
              to="/register"
            >
             Register
            </Link>
              // <Link to="/login">
              //   <button className="btn btn-outline-info" type="submit">
              //     Login
              //   </button>
              // </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
