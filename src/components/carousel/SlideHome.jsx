import Image from "next/image";
import React from "react";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { Slide } from "react-slideshow-image";

import "./bg_animation.scss";

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
  const parallax = useParallax({
    speed: -50,
  });

  return (
    <ParallaxProvider>
      <div
        ref={parallax.ref}
        className="absolute left-0 top-0 w-full min-h-screen h-full "
      >
        <Slide arrows={true} autoplay={false} indicators={false}>
          {slideImages.map((slideImage, index) => (
            <div key={`fsdf${index}`} className="">
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
    </ParallaxProvider>
  );
};

export default SlideHome;
