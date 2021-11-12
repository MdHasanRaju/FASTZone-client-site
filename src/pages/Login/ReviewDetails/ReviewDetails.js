import React from 'react';
import Rating from "react-rating";

const ReviewDetails = ({review}) => {
    const {stars, comments, email, customerName} = review;
    console.log(review)

    return (
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card-group mt-3">
          <div className="card p-4">
            <img style={{ width: "100%" }} src="" alt="" />
            <div className="card-body text-start">
              <h3>{email}</h3>
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