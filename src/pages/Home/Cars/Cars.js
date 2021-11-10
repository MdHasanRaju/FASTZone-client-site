import React from 'react';
import {useState} from 'react';
import Car from '../Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);

    fetch("http://localhost:5000/cars")
    .then(res => res.json())
    .then(data => {
        setCars(data)
    })

    return (
      <div>
        <h2>Total cars: {cars?.length}</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cars.map((car) => (
            <Car car={car.key} car={car}></Car>
          ))}
        </div>
      </div>
    );
};

export default Cars;