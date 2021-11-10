import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CallToAction from '../CallToAction/CallToAction';
import Cars from '../Cars/Cars';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Cars></Cars>
            <CallToAction></CallToAction>
            <Footer></Footer>
        </div>
    );
};

export default Home;