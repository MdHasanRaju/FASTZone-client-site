import React from 'react';
import Rating from "react-rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewDetails = ({review}) => {
    const {stars, comments, email, customerName, img} = review;
  console.log(review);
  

    return (
      <div className="col-lg-4">
        <div className="card-group mt-3">
          <div className="card p-4">
            <img style={{ width: "25%", borderRadius:"50%", margin:'auto', display:'inline-block'}} src={img} alt="" />
            <div className="card-body text-start">
              <h5>{email}</h5>
              <p className="card-text">{comments}</p>
              <h5 className="card-title">{customerName}</h5>
              <Rating
                className="d-block text-end"
                readonly
                initialRating={stars}
                fullSymbol="fas fa-star text-warning"
                emptySymbol="far fa-star"
              ></Rating>
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default ReviewDetails;