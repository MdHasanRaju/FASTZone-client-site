import React from 'react';
import { useLottie } from "lottie-react";
import animationData from '../../../assets/login2.json';

const LottieComponent = () => {
    const options = {
        animationData,
        loop: true,
        autoplay: true
      };

    const { View } = useLottie(options, {height:"500px"});  

    return View;
};

export default LottieComponent;