import React from 'react';
import { useLottie } from "lottie-react";
import animationData from '../../../assets/register-lottie.json';

const LottieComponent = () => {
    const options = {
        animationData,
        loop: true,
        autoplay: true
      };

    const { View } = useLottie(options);  

    return View;
};

export default LottieComponent;