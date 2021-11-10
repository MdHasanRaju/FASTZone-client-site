import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <div className="d-flex">
                <Link to="/home">Home</Link>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navigation;