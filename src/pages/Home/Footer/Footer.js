import React from 'react';
import "./Footer.css";
import Background from '../../../images/footer-car.jpg';
import { Box } from '@mui/system';
import { Button, Container, Divider, Grid, Stepper, Typography } from '@mui/material';

const footerBg =  {
  background: `url(${Background})`,
  color: "white",
  paddingTop:30,
  paddingBottom:20,
  backgroundSize:"cover",
  backgroundRepeat:'no-repeat',
  backgroundColor: `rgba(33, 33, 33,0.95)`,
  backgroundBlendMode: `darken, luminosity`,
}
const Footer = () => {
    return (
      <Box style={footerBg} >
        <Container>
          <Grid container spacing={2} >
            <Grid item lg={3} md={3} sm={3} xs={12} >
              <Typography variant='h6' sx={{textAlign:'left'}}>ABOUT <Typography component='span' variant='h6' sx={{color:"deepSkyBlue", fontWeight:900}}> FASTZone</Typography></Typography>
              <Typography variant='body1' sx={{textAlign:'left', mb:2}}>
                It is a long established fact that a reader will be distracted
                by the readable.
              </Typography>
              <Box sx={{display:'flex',}}>
                <i className="fab fa-facebook me-4 fs-4"></i>
                <i className="fab fa-instagram me-4 fs-4"></i>
                <i className="fab fa-linkedin-in me-4 fs-4"></i>
                <i className="fab fa-twitter me-2 fs-4"></i>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={12} sx={{textAlign:'left'}}>
              <Typography variant='h6'>TOP BRAND</Typography>
              <Typography component='div' variant='subtitle1' sx={{pb:2}}><i className="fas fa-chevron-right"></i> Alfa Romeo</Typography>
              <Typography component='div' variant='subtitle1' sx={{pb:2}}><i className="fas fa-chevron-right"></i> lotus Evora</Typography>
              <Typography component='div' variant='subtitle1' sx={{pb:2}}><i className="fas fa-chevron-right"></i> Ferrari</Typography>
              <Typography component='div' variant='subtitle1' sx={{pb:2}}><i className="fas fa-chevron-right"></i> BMW Series</Typography>
              <Typography component='div' variant='subtitle1' sx={{pb:2}}><i className="fas fa-chevron-right"></i> Mercedes</Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={12} sx={{textAlign:'left'}}>
              <Typography variant='h6'>CATEGORIES</Typography>
              <Typography component='div' variant='subtitle1' sx={{pb:2}}><i className="fas fa-chevron-right"></i> Crossovers</Typography>
              <Typography component='div' variant='subtitle1' sx={{pb:2}}><i className="fas fa-chevron-right"></i> Hybrid SUVs</Typography>
              <Typography component='div' variant='subtitle1' sx={{pb:2}}><i className="fas fa-chevron-right"></i> Sports Cars</Typography>
              <Typography component='div' variant='subtitle1' sx={{pb:2}}><i className="fas fa-chevron-right"></i> Sports Cars</Typography>
              <Typography component='div' variant='subtitle1' sx={{pb:2}}><i className="fas fa-chevron-right"></i> Hybrid Cars</Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={12} sx={{textAlign:'left'}}>
              <Typography variant='h6'>SUBSCRIBE</Typography>
              <Typography component='div' variant='subtitle1' sx={{my:2}}>
                <input className="w-100" type="text" placeholder="Email" />
              </Typography>
              <Button variant='contained' className="btn btn-primary w-100">Subscribe</Button>
              <Typography component='div' variant='subtitle1' sx={{my:4}}>
                Get The Latest Updates via email. Any time you may unsubscribe
              </Typography>
            </Grid>
          </Grid>
          <Box>
          <Divider></Divider>
            <Box sx={{display:{md:'flex'}, justifyContent:'space-between'}}>
              <p className="fw-bolder">© Website 2021 | All Rights Reserved</p>
              <Box>
                <Typography component='small' sx={{ml:2}} >Privacy</Typography>
                <Typography component='small' sx={{ml:2}} >Terms</Typography>
                <Typography component='small' sx={{ml:2}} >Sitemap</Typography>
                <Typography component='small' sx={{ml:2}} >Help</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    );
};

export default Footer;