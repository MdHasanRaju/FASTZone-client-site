import { Grid, Typography } from '@mui/material';
import React from 'react';

const DashboardHome = () => {
    
    return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h2'>WELCOME TO YOUR DASHBOARD</Typography>
          </Grid>
        </Grid>
    );
};

export default DashboardHome;