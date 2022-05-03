import React from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="row container h-100 justify-content-center align-items-center">
        <div className="col-lg-7 text-start text-light">
          <h1 className="text-light ms-5">
            <Typewriter
              options={{
                strings: ["THE ALL-NEW <br/>STYLISH AND MODERN"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="ms-5">
            {" "}
            <button className="btn btn-info text-light">Contact Us</button>
          </div>
        </div>
        <div className="col-lg-5"></div>
      </div>
    </div>
  );
};

export default Banner;
