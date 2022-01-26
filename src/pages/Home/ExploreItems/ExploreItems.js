import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExploreItem from "../ExploreItem/ExploreItem";


const ExploreItems = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://protected-stream-32771.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  return (
    <div className="mt-5">
      <div className="text-start text-bolder  ms-3"><Link className="text-info"  to="/home">GO BACK</Link><i className="fas fa-arrow-left text-info"></i></div>
      <h1 className="fw-bolder text-info">MORE CARS COLLECTION</h1>
      {!cars?.length ? (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row pb-5">
          {cars?.map((car, index) => (
            <ExploreItem car={car} key={index}></ExploreItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreItems;
