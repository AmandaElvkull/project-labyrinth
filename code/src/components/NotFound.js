/* eslint-disable linebreak-style */
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/error-404';

export const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};