import React from 'react';
import { useState, useEffect } from "react";
import Car from '../Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
    fetch("http://localhost:5000/cars")
    .then(res => res.json())
    .then(data => {
        setCars(data.slice(0, 6));
    })
    }, [])

    return (
      <div className="mt-5">
        <h1 className="fw-bolder" style={{ color: "red" }}>
          Total car
        </h1>
        <div className="row pb-5">
          {cars?.map((car, index) => (
            <Car car={car} key={index}></Car>
          ))}
        </div>
      </div>
    );
};

export default Cars;