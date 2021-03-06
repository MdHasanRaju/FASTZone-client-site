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
    <div className="container my-5">
      <div className="row">
        <div
          className="col-lg-5 py-5 px-3 rounded"
          style={{ backgroundColor: "rgba(116,212, 222, .4)",height:"500px"}}
        >
          <form onSubmit={handleRegisterSubmit} style={{height:'100%'}}>
            <div className="mb-3">
              {/* color:"rgb(0, 140, 130)", */}
              <h2 className="text-dark" style={{ fontWeight:"bold"}}>Register</h2>
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
            {/* style={{ backgroundColor: "rgb(23, 206, 226" }}  */}
            <button type="submit" className="btn btn-primary w-100 text-light fw-bold">
              REGISTER
            </button>
            <br /><br />
            <NavLink
            // color:"rgb(0, 140, 130)"
            className='text-dark'
              style={{ textDecoration: "none", fontWeight:"bold" }}
              to="/login"
            >
              Already Registered? Please Login
            </NavLink>
            <br />
            {isLoading && (
              <div style={clr} className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {authError && (
              <div className="alert alert-primary" role="alert">
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
