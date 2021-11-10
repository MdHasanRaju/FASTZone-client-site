import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({car}) => {
    const {key,img, name, price,description} = car;

    return (
      <div className="col">
        <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body text-start">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description?.slice(0, 130)}</p>
        <p class="card-text">${price}</p>
        <Link>
            <button className="btn btn-primary">PURCHASE NOW</button>
        </Link>
      </div>
    </div>
      </div>
    );
};

export default Car;