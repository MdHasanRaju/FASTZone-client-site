import React from "react";
import { useState, useEffect } from "react";
import Car from "../Car/Car";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://protected-stream-32771.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.slice(0, 6));
      });
  }, []);

  return (
    <Box sx={{ mt: 5, py:5 }}>
      <Container>
        <Box sx={{ textAlign: "left", fontWeight: "bold", ms: 3 }}></Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bolder", color: "info.main" }}
        >
          CARS COLLECTION
        </Typography>
        {!cars?.length ? (
          <Box>
            <CircularProgress color="info" />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {cars?.map((car, index) => (
              <Car car={car} key={index}></Car>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
    // <div className="mt-5 container">
    //   <h1 className="fw-bolder text-info">
    //     CARS COLLECTION
    //   </h1>
    //   {!cars?.length ? (
    //     <div className="spinner-border text-info" role="status">
    //       <span className="visually-hidden">Loading...</span>
    //     </div>
    //   ) : (
    //     <div className="row pb-5">
    //       {cars?.map((car, index) => (
    //         <Car car={car} key={index}></Car>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
};

export default Cars;
