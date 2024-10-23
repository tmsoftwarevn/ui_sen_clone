
import React from 'react';
import './SnowAnimation.css'; 

const SnowAnimation = () => {
  return (
    <div className="relative overflow-hidden h-screen bg-[#1e3a8a] flex items-center justify-center">
      <div className="snowflake absolute left-10 top-0"></div>
      <div className="snowflake absolute left-20 top-0"></div>
      <div className="snowflake absolute left-30 top-0"></div>
      <div className="snowflake absolute left-40 top-0"></div>
      <div className="snowflake absolute left-50 top-0"></div>
      <div className="snowflake absolute left-60 top-0"></div>
      <div className="snowflake absolute left-70 top-0"></div>
      <div className="snowflake absolute left-80 top-0"></div>
      <div className="snowflake absolute left-90 top-0"></div>
      <div className="content relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold">Welcome to Winter Wonderland</h1>
        <p className="mt-4 text-lg">Enjoy the beauty of snow falling!</p>
      </div>
    </div>
  );
};

export default SnowAnimation;

