import { Grid, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
  const {user} = useAuth();

    return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h4'>HI! WELCOME TO YOUR DASHBOARD</Typography>
          </Grid>
        </Grid>
    );
};

export default DashboardHome;