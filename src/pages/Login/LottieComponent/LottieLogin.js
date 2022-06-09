import React from 'react';
import { useLottie } from "lottie-react";
import animationData from '../../../assets/login3.json';

const LottieLogin = () => {
    const options = {
        animationData,
        loop: true,
        autoplay: true,
      };

    const { View } = useLottie(options, {height:'500px'});  

    return View;
};

export default LottieLogin;