import React from "react";
import Avatar from "@mui/material/Avatar";
import Rating from "react-rating";
import { AvatarGroup } from "@mui/material";

const ReviewDetails = ({ review }) => {
  const { stars, comments, email, customerName, img } = review;

  return (
    <div className="col-lg-4">
      <div className="card-group mt-3">
        <div className="card p-4">
          <img
            style={{
              width: "25%",
              borderRadius: "100%",
              margin: "auto",
              display: "inline-block",
            }}
            src={img}
            alt=""
          />
          <div className="card-body text-center">
            <h6 className="card-text">{email}</h6>
            <h5 className="card-title">{customerName}</h5>
            <p className="card-text">{comments}</p>
            <Rating
              className="d-block text-center"
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
