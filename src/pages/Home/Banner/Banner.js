import React from 'react';
import Typewriter from "typewriter-effect";
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner">
        <div className="row h-100">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="text-start text-light">
              {/*  <h1 className="text-light">
                THE ALL-NEW <br /> STYLISH AND MODERN
              </h1> */}
              <Typewriter
                
                options={{
                  strings: ["<h1>THE ALL-NEW <br /> STYLISH AND MODERN </h1>"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
          <div className="col-lg-6">
                
          </div>
        </div>
      </div>
    );
};

export default Banner;