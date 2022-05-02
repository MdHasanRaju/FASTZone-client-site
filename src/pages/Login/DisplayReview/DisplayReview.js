import React from "react";
import { useState, useEffect } from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
    <div className="my-5">
      <h1 className="fw-bolder text-info">CUSTOMERS REVIEWS</h1>
      {!reviews?.length ? (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row py-5">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={4500}
          >
            {reviews?.map((review, index) => (
              <ReviewDetails review={review} key={index}></ReviewDetails>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default DisplayReview;
