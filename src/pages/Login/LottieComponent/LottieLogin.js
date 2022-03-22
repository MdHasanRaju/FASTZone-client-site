import React from 'react';
import { useLottie } from "lottie-react";
import animationData from '../../../assets/login-lottie-4.json';

const LottieLogin = () => {
    const options = {
        animationData,
        loop: true,
        autoplay: true,
      };

    const { View } = useLottie(options);  

    return View;
};

export default LottieLogin;