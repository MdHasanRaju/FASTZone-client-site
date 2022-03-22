import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import LottieComponent from "../LottieComponent/LottieComponent";

const clr = {
  color:"rgba(116,212, 222, .5)"
}

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, authError } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password didn't match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div
          className="col-lg-5 py-5 px-3 rounded"
          style={{ backgroundColor: "rgba(116,212, 222, .4)",}}
        >
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-3">
              <h2 style={{color:"rgb(0, 140, 130)", fontWeight:"bold"}}>Register</h2>
              <input
                className="form-control"
                onBlur={handleOnBlur}
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                onBlur={handleOnBlur}
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                onBlur={handleOnBlur}
                type="password"
                name="password"
                placeholder="Your Password"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                onBlur={handleOnBlur}
                type="password"
                name="password2"
                placeholder="Retype Your Password"
              />
            </div>
            <button type="submit" style={{ backgroundColor: "rgb(23, 206, 226" }} className="btn w-100 text-light fw-bold">
              REGISTER
            </button>
            <br /><br />
            <NavLink
              style={{ textDecoration: "none",color:"rgb(0, 140, 130)", fontWeight:"bold" }}
              to="/login"
            >
              Already Registered? Please Login
            </NavLink>
            <br />
            {isLoading && (
              <div style={clr} className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {authError && (
              <div className="alert alert-info" role="alert">
                {authError}
              </div>
            )}
          </form>
        </div>
        <div className="col-lg-7">
          <LottieComponent></LottieComponent>
        </div>
      </div>
    </div>
  );
};

export default Register;
