import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CallToAction from '../CallToAction/CallToAction';
import Cars from '../Cars/Cars';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Cars></Cars>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;