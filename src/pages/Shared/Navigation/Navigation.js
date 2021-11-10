import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const {user, logout} = useAuth();

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link to="/home" className="nav-item nav-link active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/myOrders" className="nav-item nav-link ">
                  My Orders
                </Link>
              </li>
              <li>
                <Link to="/addReview" className="nav-item nav-link ">
                  Add Review
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {user?.email ? (
                <Link to="/home">
                  <button
                    onClick={logout}
                    className="btn btn-outline-success"
                    type="submit"
                  >
                    Log Out
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-outline-success" type="submit">
                    Login
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    );
};

export default Navigation;