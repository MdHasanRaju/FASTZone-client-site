import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError} = useAuth();

    const history = useHistory();
    const location = useLocation();

     const handleOnChange = (e) => {
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = { ...loginData };
       newLoginData[field] = value;
       setLoginData(newLoginData);
     };

     const handleLoginSubmit = (e) => {
       loginUser(loginData.email, loginData.password, location, history);
       console.log( loginData.email, loginData.password)

       e.preventDefault();
     };

    return (
      <div className="container my-5">
        <form
          onSubmit={handleLoginSubmit}
          className="w-50 mx-auto bg-secondary py-5 px-2"
        >
          <div className="mb-3">
            <h2>Login</h2>
            <input
              className="form-control"
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              onChange={handleOnChange}
              type="password"
              name="password"
              placeholder="Your Password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            LOGIN
          </button>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/register"
          >
            New User? Please Register
          </NavLink>
          <br />
          {isLoading && (
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
          {user?.email && (
            <div class="alert alert-success" role="alert">
              Login Successfully
            </div>
          )}
          {authError && (
            <div class="alert alert-danger" role="alert">
              {authError}
            </div>
          )}
        </form>
      </div>
    );

      
    
};

export default Login;