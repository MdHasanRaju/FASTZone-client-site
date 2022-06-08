import React from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import {useHistory} from 'react-router-dom'

const Banner = () => {
  const history = useHistory()
  
  return (
    <div className="banner">
      <div className="row container h-100 justify-content-center align-items-center">
        <div className="col-lg-7 text-start text-light">
          <h1 className="text-light ms-5">
          THE ALL-NEW 
          </h1>
          <h1 className="text-light ms-5">
            <Typewriter
              options={{
                strings: ["STYLISH AND MODERN", "CARS AND NEW WORLD", "EXPERIENCE WITH LUXURY"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="ms-5 ">
            {" "}
            <button onClick={() => history.push('/explore')} className="btn btn-primary text-light mt-2">EXPLORE</button>
          </div>
        </div>
        <div className="col-lg-5"></div>
      </div>
    </div>
  );
};

export default Banner;
