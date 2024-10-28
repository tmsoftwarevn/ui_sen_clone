import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";
const slideImages = [
  {
    url: "/s1.gif",
    caption: "Slide 1",
  },
  {
    url: "/s2.jpg",
    caption: "Slide 2",
  },
];

const SlideHome = () => {
  

  return (
    <div>
      <Slide arrows={true} autoplay={false} indicators={false}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <Image
              src={slideImage.url}
              alt="sd"
              loading="lazy"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-screen object-cover "
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideHome;
