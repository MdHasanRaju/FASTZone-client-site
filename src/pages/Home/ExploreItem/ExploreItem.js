import React from "react";
import Fade from "react-reveal/Fade";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Link, } from "react-router-dom";

const ExploreItem = ({ car }) => {
  const { _id, img, name, price, description } = car;
  const history = useHistory();

  return (
    <Grid item xs={12} lg={4} md={4} sm={6}>
      <Fade left triggerOnce={true}>
        <Box sx={{ mt: 1 }}>
          <Box sx={{border:'1px solid lightGray',borderRadius:2, p:2}}>
            <Box
              component="img"
              sx={{ width: "100%", height: "200px", borderRadius:2 }}
              src={img}
              alt=""
            />
            <Box xs={{ textAlign: "left" }}>
              <Typography sx={{ color: "gray",textAlign: "left", pt:2 }} variant="body2">
                ${price}
              </Typography>
              <Typography sx={{ textAlign: "left",color: "info.main", }} variant="h6">{name}</Typography>
              <Typography variant="body2" sx={{ textAlign: "left",pb:2  }}>
                {description?.slice(0, 120)}..
              </Typography>
             
            </Box>
            <Divider></Divider>
            <Box sx={{ display: "flex", justifyContent: "end", mt:2 }}>
              <Button onClick={() => history.push(`/cars/${_id}`)}
                  sx={{ bgColor: "info.main", ml: "auto" }}
                  variant="contained"
                >
                  PURCHASE NOW
                </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Grid>
  );
};

export default ExploreItem;
