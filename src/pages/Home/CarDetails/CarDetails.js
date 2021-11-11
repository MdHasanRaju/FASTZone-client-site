import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router';

const CarDetails = () => {
    const [carDetails, setCarDetails] = useState({});
    const {carId} = useParams()
    console.log(carDetails)

    useEffect(() => {
       fetch(`http://localhost:5000/singleCar/${carId}`)
         .then((res) => res.json())
         .then((data) => {
           setCarDetails(data[0]);
         });
    }, [])

    return (
        <div>
            <h2>This is CarDetails : {carDetails?.name}</h2>
            <div className="container row">
                <div className="col-md-6">
                    <img src={carDetails?.img} alt="" />
                    <p>{carDetails?.description}</p>
                </div>
                <div className="col-md-6">
                    
                </div>
            </div>
        </div>
    );
};

export default CarDetails;