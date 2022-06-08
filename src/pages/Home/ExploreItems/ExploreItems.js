import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExploreItem from "../ExploreItem/ExploreItem";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";

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
    <Box sx={{ mt: 5 }}>
      <Container>
        <Box sx={{ textAlign: "left", fontWeight: "bold", ms: 3 }}>
          <Link sx={{ color: "primary.main", textDecoration:'none', }} to="/home">
            GO BACK<i className="fas fa-arrow-left text-primary text-decoration-none"></i>
          </Link>
        </Box>
        <Typography
          sx={{ fontWeight: "bolder",fontSize:{md:24, xs:18}, color: "info.main" }}
        >
          MORE CARS COLLECTION
        </Typography>
        {!cars?.length ? (
          <Box >
            <CircularProgress color="info" />
            <Box sx={{height:'300vh'}}></Box>
          </Box>
        ) : (
          <Grid container spacing={3}>
              {cars?.map((car, index) => (
              <ExploreItem car={car} key={index}></ExploreItem>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ExploreItems;
