import React from 'react';
import Rating from "react-rating";
import { useState, useEffect } from "react";
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const DisplayReview = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
            setReview(data);
        })
        
    }, [])


    return (
      <div className="mt-5">
        <h1 className="fw-bolder" style={{ color: "red" }}>
          People Reviewed: {reviews.length}
        </h1>
        {!reviews?.length ? (
          <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
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