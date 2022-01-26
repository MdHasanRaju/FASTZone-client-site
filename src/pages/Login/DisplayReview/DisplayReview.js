import React from "react";
import Rating from "react-rating";
import { useState, useEffect } from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const DisplayReview = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("https://protected-stream-32771.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div className="mt-5">
      <h1 className="fw-bolder text-info">REVIEWS</h1>
      {!reviews?.length ? (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row pb-5">
          {reviews?.map((review, index) => (
            <ReviewDetails review={review} key={index}></ReviewDetails>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayReview;
