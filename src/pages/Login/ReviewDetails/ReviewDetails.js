import React from "react";
import Rating from "react-rating";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ReviewDetails.css";
import blankImg from "./../../../images/blank.png";
import { Grid } from "@mui/material";
import { Fade } from "react-reveal";

const ReviewDetails = ({ review }) => {
  const { stars, comments, email, customerName, img } = review;

  return (
    <Fade direction="right" triggerOnce={true}>
      <Grid item xs={12}>
        <img src={img ? img : blankImg} />
        <div className="myCarousel">
          <h4>{customerName}</h4>
          <h6>{email}</h6>
          <p>{comments}</p>
          <Rating
            className="d-block text-center"
            readonly
            initialRating={stars}
            fullSymbol="fas fa-star text-primary"
            emptySymbol="far fa-star"
          ></Rating>
        </div>
      </Grid>
    </Fade>
  );
};

export default ReviewDetails;
