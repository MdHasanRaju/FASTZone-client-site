import React from 'react';
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom';

const Car = ({car}) => {
    const {_id, img, name, price,description} = car;

    return (
      <div className="col-lg-4 col-md-6 col-sm-12">
        <Fade left>
          <div className="card-group mt-3">
            <div className="card p-4">
              <img style={{ width: "100%" }} src={img} alt="" />
              <div className="card-body text-start">
                <h3>{name}</h3>
                <p className="card-text">{description?.slice(0, 130)}..</p>
                <h5 className="card-title">${price}</h5>
                <Link to={`/cars/${_id}`}>
                  <button className="btn btn-info">PURCHASE NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
};

export default Car;