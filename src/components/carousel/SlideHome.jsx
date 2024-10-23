import Image from "next/image";
import React from "react";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "/s1.jpg",
    caption: "Slide 1",
  },
  {
    url: "/s2.jpg",
    caption: "Slide 2",
  },
];

const SlideHome = () => {
  // const parallax = useParallax({
  //   speed: -30,
  // });

  return (
    //ref={parallax.ref}
    <div  className="absolute left-0 top-0 w-full min-h-screen h-full" >
      <Slide arrows={false} autoplay={false} indicators={false}>
        {slideImages.map((slideImage, index) => (
          <div
            key={`fsdf${index}`}
           
          >
            <Image
              src={slideImage.url}
              alt="sd"
              loading="lazy"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-screen"
            />
          
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideHome;
