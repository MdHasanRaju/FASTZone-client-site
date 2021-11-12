import { Grid } from '@mui/material';
import React from 'react';
import MyOrders from '../../Login/MyOrders/MyOrders';

const DashboardHome = () => {
    
    return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <MyOrders></MyOrders>
          </Grid>
        </Grid>
    );
};

export default DashboardHome;