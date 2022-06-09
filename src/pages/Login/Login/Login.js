import { Alert, Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import LottieLogin from "../LottieComponent/LottieLogin";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

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
    console.log(loginData.email, loginData.password);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div
          style={{ backgroundColor: "rgba(116,212, 222, .2)", height: "500px" }}
          className="col-lg-5"
        >
          <form onSubmit={handleLoginSubmit} className="py-5 px-2" style={{height:'100%'}}>
            <div className="mb-3">
              <h2 className="text-dark">Login</h2>
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
            {/* style={{ backgroundColor: "rgb(23, 206, 226" }} */}
            <button
              type="submit"
              className="btn btn-primary w-100 text-light fw-bold"
            >
              LOGIN
            </button>
            <br />
            <br />
            <NavLink
              // color:"rgb(0, 140, 130)
              // sx={{color:'main.info'}}
              className='text-dark'
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "rgb(0, 140, 130)",
              }}
              to="/register"
            >
              New User? Please Register
            </NavLink>
            <br />
            {isLoading && (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {user?.email && (
              <Alert severity="success">Login Successfully</Alert>
            )}
            {authError && (
              <div className="alert alert-danger" role="alert">
                {authError}
              </div>
            )}
            <p>-----------------------------</p>
            <Button
              onClick={handleGoogleSignIn}
              // style={{ backgroundColor: "rgb(23, 206, 226" }}
              color='primary'
              variant="contained"
            >
              Google Sign In
            </Button>
          </form>
        </div>
        <div className="col-lg-7">
          <LottieLogin></LottieLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
