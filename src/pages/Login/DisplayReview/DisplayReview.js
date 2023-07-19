import React from "react";
import { useState, useEffect } from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const DisplayReview = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("https://fastzone-server-site.onrender.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <Box sx={{ my: 5 }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bolder", color: "info.main" }}
        >
          CUSTOMERS REVIEW
        </Typography>
        {!reviews?.length ? (
          <Box>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Grid container sx={{ py: 5 }}>
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
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default DisplayReview;
